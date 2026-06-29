# Akmal Muhammed Resume

GitHub Pages resume site for Akmal Muhammed, tailored around offensive security consulting, red team operations, adversary emulation, cloud security assessment, and security tooling.

Live site: https://akmalmuhammed.github.io/resume/

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/Radix UI components
- Framer Motion

## Local Development

```sh
npm ci
npm run dev
```

The Vite dev server defaults to port `8080`.

## Build and Test

```sh
npm run build
npm run test
npm run lint
```

## Resume PDF

The public download is `public/akmal-muhammed-cv.pdf`. Source content for the generated PDF lives in `scripts/generate_resume_pdf.py`.

Install the PDF dependencies before regenerating with the system Python:

```sh
python -m pip install -r requirements-pdf.txt
npm run generate:resume-pdf
```

`PyMuPDF` is only required for preview image rendering. PDF generation and text validation still run without previews when `fitz` is unavailable.

## Deployment

GitHub Pages is deployed by `.github/workflows/deploy-pages.yml` on pushes to `main`. Production Vite builds use the `/resume/` base path.
