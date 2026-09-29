/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx,css,html}"],

  theme: {
    extend: {
      // =====================================================
      // COLORS
      // =====================================================
      colors: {
        primary: {
          25: "#F6FBFA",
          50: "#EFF8F7",
          100: "#DDF1EF",
          200: "#B9E3DF",
          300: "#8CCFC8",
          400: "#5AB6AE",
          500: "#2E9C94",
          600: "#187F78",
          700: "#0D7A73",
          800: "#0B615C",
          900: "#094F4B",
          950: "#042D2A",
          DEFAULT: "#0D7A73",
        },

        secondary: {
          25: "#F6FEFD",
          50: "#EDFCFA",
          100: "#D2F7F2",
          200: "#A7EEE6",
          300: "#72DFD4",
          400: "#3BCBBC",
          500: "#14B8A6",
          600: "#0F978A",
          700: "#0D796F",
          800: "#0C615A",
          900: "#0B504A",
          950: "#052F2C",
          DEFAULT: "#14B8A6",
        },

        tertiary: {
          25: "#FCFEFE",
          50: "#F7FCFB",
          100: "#F0F9F8",
          200: "#E3F3F1",
          300: "#D1EBE8",
          400: "#B5DFDA",
          500: "#91CEC7",
          600: "#6FB7AF",
          700: "#50948D",
          800: "#3F7570",
          900: "#355F5B",
          950: "#1B3532",
          DEFAULT: "#F0F9F8",
        },

        neutral: {
          25: "#FCFDFE",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },

        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#DCFAE6",
          200: "#ABEFC6",
          300: "#75E0A7",
          400: "#47CD89",
          500: "#17B26A",
          600: "#079455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
        },

        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
          950: "#4E1D09",
        },

        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
        },

        info: {
          25: "#F5FAFF",
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#53B1FD",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          800: "#1849A9",
          900: "#194185",
          950: "#102A56",
        },
      },

      // =====================================================
      // FONT FAMILY
      // =====================================================
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "Arial", "sans-serif"],
      },

      // =====================================================
      // GRID
      // =====================================================
      gridTemplateColumns: {
        "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fit-240": "repeat(auto-fit, minmax(240px, 1fr))",
        "auto-fit-280": "repeat(auto-fit, minmax(280px, 1fr))",
        "auto-fit-320": "repeat(auto-fit, minmax(320px, 1fr))",
      },

      // =====================================================
      // BOX SHADOW
      // =====================================================
      boxShadow: {
        card: "0px 4px 12px rgba(15, 23, 42, 0.06), 0px 1px 3px rgba(15, 23, 42, 0.04)",

        "card-hover":
          "0px 10px 30px rgba(15, 23, 42, 0.10), 0px 4px 10px rgba(15, 23, 42, 0.05)",

        soft: "0px 2px 8px rgba(15, 23, 42, 0.05)",

        modal: "0px 20px 50px rgba(15, 23, 42, 0.18)",

        button: "0px 4px 10px rgba(13, 122, 115, 0.18)",
      },

      // =====================================================
      // BORDER RADIUS
      // =====================================================
      borderRadius: {
        button: "10px",
        input: "10px",
        card: "16px",
        modal: "20px",
      },

      // =====================================================
      // BACKGROUND IMAGES / GRADIENTS
      // =====================================================
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0D7A73 0%, #14B8A6 100%)",

        "gradient-primary-dark":
          "linear-gradient(135deg, #094F4B 0%, #0D7A73 100%)",

        "gradient-soft": "linear-gradient(135deg, #F0F9F8 0%, #FFFFFF 100%)",

        "gradient-hero": "linear-gradient(135deg, #F0F9F8 0%, #DDF1EF 100%)",

        "gradient-secondary":
          "linear-gradient(135deg, #14B8A6 0%, #72DFD4 100%)",
      },

      // =====================================================
      // BACKGROUND POSITION
      // =====================================================
      backgroundPosition: {
        "hero-center": "center center",
        "hero-top": "center top",
      },

      // =====================================================
      // BACKGROUND SIZE
      // =====================================================
      backgroundSize: {
        full: "100% 100%",
        "x-full": "100%",
        contain: "contain",
        cover: "cover",
      },

      // =====================================================
      // MAX WIDTH
      // =====================================================
      maxWidth: {
        container: "1280px",
        content: "1180px",
        form: "520px",
      },

      // =====================================================
      // KEYFRAMES
      // =====================================================
      keyframes: {
        spinLoader: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },

        pulseSoft: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.6",
          },
        },

        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      // =====================================================
      // ANIMATIONS
      // =====================================================
      animation: {
        loader: "spinLoader 0.8s linear infinite",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "fade-out": "fadeOut 0.25s ease-out forwards",
        "pulse-soft": "pulseSoft 1.5s ease-in-out infinite",
        "scale-in": "scaleIn 0.25s ease-out forwards",
      },

      // =====================================================
      // TRANSITIONS
      // =====================================================
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },

      // =====================================================
      // Z-INDEX
      // =====================================================
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },

  plugins: [],
};
