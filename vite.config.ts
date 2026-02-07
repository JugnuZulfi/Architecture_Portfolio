import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Vercel needs root base
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
