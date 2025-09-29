import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  resolve: {
    extensions: [".web.ts", ".ts"],
  },
  plugins: [cloudflare()],
});
