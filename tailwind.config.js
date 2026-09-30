/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./frontend/src/pages/**/*.html",
    "./frontend/src/index.html",
    "./frontend/src/components/**/*.{js,ts}",
    "./frontend/src/js/**/*.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F5FA",
          100: "#DEE9F4",
          200: "#C0D5E9",
          300: "#9CBBD9",
          400: "#749BC3",
          500: "#527EAC",
          600: "#396596",
          700: "#305780",
          800: "#284767",
          900: "#203950",
          DEFAULT: "#396596",
        },

        secondary: {
          50: "#EEF9FB",
          100: "#D9F1F4",
          200: "#B7E4EA",
          300: "#88D2DC",
          400: "#61C3D0",
          500: "#3FB2C0",
          600: "#31919D",
          700: "#287782",
          DEFAULT: "#3FB2C0",
        },

        tertiary: {
          50: "#F5FBFC",
          100: "#EAF6F7",
          200: "#D8EFF1",
          300: "#C1E5E9",
          400: "#A8DADF",
          500: "#83C6CD",
          DEFAULT: "#A8DADF",
        },

        neutral: {
          50: "#F8FAFA",
          100: "#F1F5F5",
          200: "#E2E9E9",
          300: "#C8D3D4",
          400: "#9DADAF",
          500: "#7D9092",
          600: "#607274",
          700: "#4B5B5E",
          800: "#374649",
          900: "#253337",
          DEFAULT: "#607274",
        },

        surface: {
          page: "#F8FAFA",
          card: "#FFFFFF",
          soft: "#F5FBFC",
        },

        success: {
          50: "#ECFDF3",
          600: "#079455",
        },

        warning: {
          50: "#FFFAEB",
          600: "#DC6803",
        },

        error: {
          50: "#FEF3F2",
          600: "#D92D20",
        },
      },

      fontFamily: {
        cairo: ['"Cairo"', "Tahoma", "Arial", "sans-serif"],

        jakarta: ['"Plus Jakarta Sans"', "Arial", "sans-serif"],

        sans: ['"Cairo"', "Tahoma", "Arial", "sans-serif"],
      },

      borderRadius: {
        button: "10px",
        input: "10px",
        card: "16px",
        modal: "20px",
      },

      boxShadow: {
        card: "0 4px 12px rgb(32 57 80 / 6%), 0 1px 3px rgb(32 57 80 / 4%)",

        "card-hover": "0 10px 30px rgb(32 57 80 / 10%)",

        soft: "0 2px 8px rgb(32 57 80 / 5%)",
      },

      maxWidth: {
        container: "1280px",
        content: "1180px",
        form: "520px",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #396596 0%, #527EAC 100%)",

        "gradient-soft": "linear-gradient(135deg, #F5FBFC 0%, #FFFFFF 100%)",
      },
    },
  },

  plugins: [],
};
