import { defineConfig } from "wite";
import kdu from "@witejs/plugin-kdu";
import kduJsx from "@witejs/plugin-kdu-jsx";

// https://witejs.web.app/config/
export default defineConfig({
  plugins: [kdu(), kduJsx()],
});
