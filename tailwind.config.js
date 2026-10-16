/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1F265A",       // Deep GES Academic Navy
          "primary-dark": "#102448",  // Midnight Heritage Navy
          "primary-light": "#253D84", // Deep Royal Navy
          blue: "#0064D3",          // Logo Emblem Electric / Royal Blue
          azure: "#3365B0",         // Logo Mid Azure Blue
          accent: "#E53239",        // Logo Vibrant Crimson Red
          "accent-hover": "#C9242A",// Darker Crimson
          gold: "#F5AF02",          // Logo Emblem Warm Sun Gold
          green: "#85B826",         // Logo Emblem Vitality Lime Green
          surface: "#F8FAFC",       // Calm Aman-like off-white
          "surface-muted": "#F1F5F9",
          border: "#E2E8F0",
          "border-dark": "#2A3370",
          text: "#0F172A",
          muted: "#64748B",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        editorial: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(31, 38, 90, 0.05)',
        'premium': '0 20px 40px -15px rgba(31, 38, 90, 0.08)',
        'floating': '0 30px 60px -12px rgba(16, 36, 72, 0.15)',
        'glow-crimson': '0 0 35px -5px rgba(229, 50, 57, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(0, 100, 211, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #102448 0%, #1F265A 50%, #253D84 100%)',
        'subtle-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'navy-sheen': 'linear-gradient(180deg, rgba(31, 38, 90, 0.95) 0%, rgba(16, 36, 72, 0.98) 100%)',
      }
    },
  },
  plugins: [],
}
