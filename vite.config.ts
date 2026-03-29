import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const githubRepository = process.env.GITHUB_REPOSITORY;
const githubRepositoryName = githubRepository?.split("/")[1] ?? "resume";
const githubPagesBase = `/${githubRepositoryName}/`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? githubPagesBase : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
