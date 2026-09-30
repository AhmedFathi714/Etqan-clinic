import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const frontendRoot = resolve(projectRoot, "frontend/src");

export default defineConfig({
  // أثناء التطوير: http://localhost:5173/pages/patient/home.html
  root: frontendRoot,
  base: "./",

  build: {
    outDir: resolve(projectRoot, "build"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "auth/login": resolve(frontendRoot, "pages/auth/login.html"),
        "auth/signin": resolve(frontendRoot, "pages/auth/signin.html"),
        "doctor/dashboard": resolve(frontendRoot, "pages/doctor-dashbord/dashboard.html"),
        "doctor/new-patient": resolve(frontendRoot, "pages/doctor-dashbord/new-patient.html"),
        "doctor/patient-details": resolve(frontendRoot, "pages/doctor-dashbord/patient-details.html"),
        "doctor/patients": resolve(frontendRoot, "pages/doctor-dashbord/patients.html"),
        "doctor/schedule": resolve(frontendRoot, "pages/doctor-dashbord/schedule.html"),
        "patient/home": resolve(frontendRoot, "pages/patient/home.html"),
        "patient/our-doctors": resolve(frontendRoot, "pages/patient/our-doctors.html"),
        "patient/doctor-profile": resolve(frontendRoot, "pages/patient/doctor-profile.html"),
        "patient/booking": resolve(frontendRoot, "pages/patient/booking.html"),
        "patient/appointment": resolve(frontendRoot, "pages/patient/appointment.html"),
        "patient/confirmation": resolve(frontendRoot, "pages/patient/confirmation.html"),
        "patient/conditions": resolve(frontendRoot, "pages/patient/conditions.html"),
        "patient/profile": resolve(frontendRoot, "pages/patient/profile.html"),
        "patient/service": resolve(frontendRoot, "pages/patient/service.html"),
      },
    },
  },
});
