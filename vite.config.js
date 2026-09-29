import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",

  build: {
    outDir: "build",

    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),

        "patient-home": resolve(__dirname, "src/patient/home.html"),
        "patient-profile": resolve(__dirname, "src/patient/profile.html"),
        "patient-sessions": resolve(__dirname, "src/patient/sessions.html"),
        "patient-session-details": resolve(
          __dirname,
          "src/patient/session-details.html",
        ),
      },
    },
  },
});
