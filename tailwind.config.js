module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Sage Green
        primary: {
          50: "#F7F9F5",
          100: "#EEF3E9",
          200: "#DCE6D2",
          300: "#C9D9BB",
          400: "#B6CCA4",
          500: "#9CAF88", // sage-green
          600: "#7D8C6F",
          700: "#5E6956",
          800: "#3F463D",
          900: "#202324",
          DEFAULT: "#9CAF88", // sage-green
        },
        
        // Secondary Colors - Charcoal
        secondary: {
          50: "#F2F3F4",
          100: "#E5E7E9",
          200: "#CBCFD3",
          300: "#B1B7BD",
          400: "#979FA7",
          500: "#7D8791",
          600: "#64707B",
          700: "#4A5865",
          800: "#36454F", // charcoal
          900: "#1B2328",
          DEFAULT: "#36454F", // charcoal
        },

        // Accent Colors - Warm Gold
        accent: {
          50: "#FDF9F3",
          100: "#FBF3E7",
          200: "#F7E7CF",
          300: "#F3DBB7",
          400: "#EFCF9F",
          500: "#E8B86D", // warm-gold
          600: "#BA9357",
          700: "#8B6E41",
          800: "#5C492B",
          900: "#2E2416",
          DEFAULT: "#E8B86D", // warm-gold
        },

        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F5F5DC", // beige

        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
        },

        // Status Colors
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#48BB78", // green-400
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          DEFAULT: "#48BB78", // green-400
        },

        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#ED8936", // orange-400
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          DEFAULT: "#ED8936", // orange-400
        },

        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F56565", // red-400
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          DEFAULT: "#F56565", // red-400
        },

        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          active: "#9CAF88", // sage-green
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      fontWeight: {
        'headline-medium': '600',
        'headline-bold': '700',
        'body-normal': '400',
        'body-medium': '500',
        'body-semibold': '600',
        'cta': '600',
      },

      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },

      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },

      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },

      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}