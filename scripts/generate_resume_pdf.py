from __future__ import annotations

import shutil
from pathlib import Path
from xml.sax.saxutils import escape

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, PageBreak, Paragraph, SimpleDocTemplate, Spacer

try:
    import fitz
except ModuleNotFoundError:
    fitz = None

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public"
PREVIEW_DIR = ROOT / "tmp" / "pdfs"
PDF_NAME = "akmal-muhammed-cv.pdf"

ACCENT = colors.HexColor("#0F766E")
INK = colors.HexColor("#0F172A")
MUTED = colors.HexColor("#475569")
LINE = colors.HexColor("#CBD5E1")

RESUME = {
    "name": "Akmal Muhammed",
    "title": "Offensive Security Consultant | Red Team | Adversary Emulation | Cloud Security",
    "contact_primary": "Doha, Qatar | +974 7401 5001 | akmalmuhammed93@gmail.com",
    "contact_secondary": "linkedin.com/in/akmal-muhammed-m-k | akmalmuhammed.github.io/resume",
    "summary": (
        "Offensive security consultant with 5 years across cybersecurity, analytics, and consulting, "
        "including recent critical infrastructure engagements in Qatar. Specializes in red team "
        "operations, adversary emulation, attack simulation, purple team validation, detection "
        "engineering, and cloud security assessment across enterprise, web, mobile, OT/IoT, and "
        "cloud environments."
    ),
    "highlights": [
        "Delivered red team, VAPT, adversary emulation, and Mandiant Security Validation work across critical infrastructure environments.",
        "Built and tuned 200+ KQL detections and hunting workflows across Microsoft Sentinel, Cortex XDR/XSOAR, SentinelOne, Defender XDR, and Darktrace.",
        "Developed production security tools including an autonomous agentic pentest platform and MXLens phishing intelligence SaaS.",
    ],
    "experience": [
        {
            "role": "Security Consultant",
            "company": "INTALEQ Technology & Consulting Services",
            "meta": "Client: Aspire Zone Foundation | Doha, Qatar | Feb 2024 - Present",
            "bullets": [
                "Delivered red team and VAPT engagements across enterprise, web, mobile, wireless, OT/IoT, and cloud environments, translating attack paths into remediation plans.",
                "Authored adversary emulation playbooks for GCC-region threat actors including APT39, MuddyWater, Stealth Falcon, and APT34 using MITRE ATT&CK mapping.",
                "Ran quarterly Mandiant Security Validation exercises across endpoint, email, network, and cloud controls using 200+ ATT&CK-mapped techniques.",
                "Performed controlled payload, EDR, lateral movement, privilege escalation, and Active Directory attack-path testing within approved engagement rules.",
                "Validated Azure and GCP security posture using Prisma Cloud and Microsoft Defender for Cloud, including identity, IAM, service-principal, and conditional-access review.",
                "Built and tuned 200+ KQL detections and threat-hunting workflows across Microsoft Sentinel, Cortex XDR/XSOAR, SentinelOne, Defender XDR, and Darktrace.",
                "Produced technical evidence packs, executive summaries, C-level briefings, and engagement-to-remediation closure materials.",
            ],
            "tools": "Cobalt Strike, Core Impact, Tenable, Burp Suite Pro, Microsoft Sentinel, Cortex XDR/XSOAR, SentinelOne, Defender XDR, Darktrace, Prisma Cloud, KQL, Python",
        },
        {
            "role": "Senior Analyst - Cybersecurity & Analytics",
            "company": "Interactive Avenues (IPG) | WPP",
            "meta": "Mumbai, India | Mar 2023 - Dec 2023",
            "bullets": [
                "Conducted web application security assessments identifying XSS, SQL injection, IDOR, malicious JavaScript injection, and authentication weaknesses.",
                "Performed VAPT across enterprise application and network environments with technical evidence and remediation guidance for client teams.",
                "Reverse-engineered malicious JavaScript injections to determine payload behavior, delivery mechanism, and attacker objective.",
                "Built Python anomaly-detection workflows for traffic-pattern analysis, bot activity identification, and third-party script exposure review.",
                "Implemented role-based access controls for BI/reporting platforms and triaged vulnerability-scan results into prioritized remediation guidance.",
            ],
            "tools": "Web AppSec, VAPT, Python, JavaScript analysis, RBAC, client reporting",
        },
        {
            "role": "Executive - Analytics and Reporting",
            "company": "Group M",
            "meta": "Bengaluru, India | Jun 2021 - Jun 2023",
            "bullets": [
                "Built Power BI, SQL, and Salesforce Datorama reporting workflows for enterprise clients with recurring data validation and delivery automation.",
                "Designed least-privilege access models across multi-tenant reporting infrastructure, strengthening access-control and privilege-analysis foundations.",
                "Managed stakeholder communication and project delivery across cross-functional teams, building client advisory and executive reporting habits.",
            ],
            "tools": "Power BI, SQL, Salesforce Datorama, access control, stakeholder delivery",
        },
    ],
    "projects": [
        {
            "name": "Autonomous Agentic Pentest and Red Team Platform",
            "tagline": "Consulting-scale external assessment platform",
            "description": "AI-powered platform running five isolated workflows for OSINT, enumeration, evidence capture, controlled validation, and technical/executive report generation with human approval gates.",
            "stack": "Python, FastAPI, Docker, GCP, LLM orchestration",
        },
        {
            "name": "MXLens",
            "tagline": "Phishing intelligence SaaS",
            "description": "B2B platform with 11 detection modules for sender spoofing, reply-to mismatch, typosquatting, QR phishing, open redirects, credential forms, DMARC/SPF/DKIM, and phishing intent scoring.",
            "stack": "Next.js, TypeScript, Prisma, PostgreSQL, Stripe, WebAssembly",
        },
        {
            "name": "Cloud Attack Path and Control Validation",
            "tagline": "Azure, GCP, identity, and posture review",
            "description": "Assessment track for cloud identity paths, service principals, conditional access, IAM exposure, and posture-control coverage using cloud security tooling.",
            "stack": "GCP, Azure/Entra ID, Prisma Cloud, Microsoft Defender for Cloud",
        },
        {
            "name": "SecUtil / CyberTools Hub",
            "tagline": "Browser-native security utilities",
            "description": "Zero-footprint WebAssembly security utility surface for encoding, cryptography, hash checks, IOC helpers, and payload string inspection in restricted environments.",
            "stack": "WebAssembly, JavaScript, client-side security tooling",
        },
    ],
    "skills": [
        ("Red / Purple Team", "Red team assessments, adversary emulation, attack simulation, controlled PoC validation, detection-gap analysis"),
        ("Payloads and EDR", "Python, C, Nim, shellcode loaders, process injection, direct syscall concepts, AMSI/ETW concepts, sleep masking"),
        ("Lateral Movement and PrivEsc", "BloodHound, Impacket, Mimikatz, Rubeus, Kerberoasting, delegation abuse, Windows privilege escalation"),
        ("Web and Mobile AppSec", "OWASP Top 10, Burp Suite Professional, API security, Fortra SAST/DAST, Frida, objection"),
        ("Cloud Security", "GCP posture review, Azure/Entra ID attack paths, AWS IAM enumeration, Prisma Cloud, Microsoft Defender for Cloud"),
        ("Threat Intelligence", "MITRE ATT&CK, ATT&CK for ICS, APT profiling, Kaspersky TIP, VirusTotal Enterprise, Mandiant Security Validation"),
        ("SIEM / SOAR / IR", "Microsoft Sentinel, KQL, Cortex XDR/XSOAR, SentinelOne, Defender XDR, Darktrace, XSOAR playbooks"),
        ("Tool Development", "Python, FastAPI, Next.js, TypeScript, Docker, PostgreSQL, WebAssembly, LLM orchestration"),
    ],
    "certifications_completed": [
        "Microsoft SC-200 - Security Operations Analyst",
        "CyberSec First Responder - Threat Detection and Response",
        "Microsoft SC-100 - Cybersecurity Architect",
        "IBM Data Analyst - Data Analyst Specialization",
        "Forcepoint DLP Admin",
        "Darktrace Admin",
        "Cortex XSOAR Admin",
    ],
    "certifications_pursuing": [
        "ISC2 CCSP - Certified Cloud Security Professional",
        "OSCP - OffSec Certified Professional",
    ],
    "education": [
        "B.Tech - Computer Science and Engineering",
        "National Institute of Technology Puducherry, India",
    ],
}


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="ResumeName",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=28,
            textColor=INK,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeTitle",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=ACCENT,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeContact",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeSection",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=ACCENT,
            spaceBefore=10,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.6,
            leading=13.4,
            textColor=INK,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeMeta",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=10.8,
            textColor=MUTED,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeRole",
            parent=styles["Heading4"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            textColor=INK,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.4,
            leading=12.6,
            leftIndent=10,
            textColor=INK,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeLabelLine",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.6,
            textColor=INK,
            spaceAfter=4,
        )
    )
    return styles


def section_heading(title: str, styles) -> list:
    return [
        Paragraph(escape(title), styles["ResumeSection"]),
        HRFlowable(width="100%", thickness=0.8, color=LINE, spaceBefore=0, spaceAfter=5),
    ]


def paragraph(text: str, style_name: str, styles) -> Paragraph:
    return Paragraph(escape(text), styles[style_name])


def build_story(styles) -> list:
    story = [
        Paragraph(escape(RESUME["name"]), styles["ResumeName"]),
        Paragraph(escape(RESUME["title"]), styles["ResumeTitle"]),
        Paragraph(escape(RESUME["contact_primary"]), styles["ResumeContact"]),
        Paragraph(escape(RESUME["contact_secondary"]), styles["ResumeContact"]),
        Spacer(1, 0.08 * inch),
        HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceBefore=0, spaceAfter=9),
    ]

    story.extend(section_heading("Professional Summary", styles))
    story.append(paragraph(RESUME["summary"], "ResumeBody", styles))
    for line in RESUME["highlights"]:
        story.append(Paragraph(f"- {escape(line)}", styles["ResumeBullet"]))

    story.extend(section_heading("Professional Experience", styles))
    for item in RESUME["experience"]:
        story.append(paragraph(f"{item['role']} | {item['company']}", "ResumeRole", styles))
        story.append(paragraph(item["meta"], "ResumeMeta", styles))
        for bullet in item["bullets"]:
            story.append(Paragraph(f"- {escape(bullet)}", styles["ResumeBullet"]))
        story.append(Paragraph(f"<b>Platforms:</b> {escape(item['tools'])}", styles["ResumeLabelLine"]))
        story.append(Spacer(1, 0.06 * inch))

    story.append(PageBreak())

    story.extend(section_heading("Selected Projects", styles))
    for project in RESUME["projects"]:
        story.append(paragraph(f"{project['name']} | {project['tagline']}", "ResumeRole", styles))
        story.append(paragraph(project["description"], "ResumeBody", styles))
        story.append(Paragraph(f"<b>Stack:</b> {escape(project['stack'])}", styles["ResumeLabelLine"]))
        story.append(Spacer(1, 0.05 * inch))

    story.extend(section_heading("Technical Skills", styles))
    for label, values in RESUME["skills"]:
        story.append(Paragraph(f"<b>{escape(label)}:</b> {escape(values)}", styles["ResumeLabelLine"]))

    story.extend(section_heading("Certifications", styles))
    for item in RESUME["certifications_completed"]:
        story.append(Paragraph(f"- {escape(item)}", styles["ResumeBullet"]))
    for item in RESUME["certifications_pursuing"]:
        story.append(Paragraph(f"- Pursuing: {escape(item)}", styles["ResumeBullet"]))

    story.extend(section_heading("Education", styles))
    story.append(paragraph(RESUME["education"][0], "ResumeRole", styles))
    story.append(paragraph(RESUME["education"][1], "ResumeMeta", styles))

    return story


def draw_page_chrome(canvas, doc):
    canvas.saveState()
    canvas.setTitle("Akmal Muhammed CV")
    canvas.setAuthor("Akmal Muhammed")
    canvas.setSubject("ATS-friendly cybersecurity resume")
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1)
    canvas.line(doc.leftMargin, A4[1] - 0.48 * inch, A4[0] - doc.rightMargin, A4[1] - 0.48 * inch)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.35 * inch, "Akmal Muhammed - Resume")
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.35 * inch, f"Page {canvas.getPageNumber()}")
    canvas.restoreState()


def render_previews(pdf_path: Path):
    if fitz is None:
        print("Preview rendering skipped: PyMuPDF (fitz) is not installed.")
        return

    if PREVIEW_DIR.exists():
        shutil.rmtree(PREVIEW_DIR)
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)

    document = fitz.open(pdf_path)
    try:
        for index, page in enumerate(document, start=1):
            pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
            pixmap.save(PREVIEW_DIR / f"akmal-muhammed-cv-page-{index}.png")
    finally:
        document.close()


def validate_text(pdf_path: Path):
    reader = PdfReader(str(pdf_path))
    extracted_text = "\n".join(page.extract_text() or "" for page in reader.pages)
    required_terms = [
        "Akmal Muhammed",
        "Offensive Security Consultant",
        "Red Team",
        "Mandiant Security Validation",
        "Professional Experience",
        "Technical Skills",
        "Microsoft SC-200",
    ]
    missing = [term for term in required_terms if term not in extracted_text]
    if missing:
        raise RuntimeError(f"PDF text validation failed. Missing terms: {', '.join(missing)}")


def build_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    output_pdf = OUTPUT_DIR / PDF_NAME
    public_pdf = PUBLIC_DIR / PDF_NAME

    document = SimpleDocTemplate(
        str(output_pdf),
        pagesize=A4,
        leftMargin=0.62 * inch,
        rightMargin=0.62 * inch,
        topMargin=0.74 * inch,
        bottomMargin=0.62 * inch,
    )

    styles = build_styles()
    story = build_story(styles)
    document.build(story, onFirstPage=draw_page_chrome, onLaterPages=draw_page_chrome)

    shutil.copy2(output_pdf, public_pdf)
    validate_text(output_pdf)
    render_previews(output_pdf)

    page_count = len(PdfReader(str(output_pdf)).pages)
    print(f"Generated: {output_pdf}")
    print(f"Copied to: {public_pdf}")
    print(f"Preview pages: {PREVIEW_DIR}")
    print(f"Page count: {page_count}")


if __name__ == "__main__":
    build_pdf()
