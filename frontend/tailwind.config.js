/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Theme
        'light-bg': '#FFF5E4', // Soft cream background
        'light-text': '#5A3E2B', // Dark brown text for contrast
        'light-primary': '#856A5D', // Muted brown for secondary text
        'light-accent': '#FF8080', // Vibrant coral/pink accent
        'light-accent-2': '#FFC0CB', // Lighter pastel pink

        // Dark Theme
        'dark-bg': '#0B0014', // Deeper, richer dark purple
        'dark-text': '#EAE6F0', // Soft off-white text
        'dark-primary': '#B4A5C7', // Muted lavender for secondary text
        'dark-accent': '#C589E8', // Vibrant purple accent
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Pacifico', 'cursive'],
      },
      
      backgroundColor: {
        'light-glass': 'rgba(255, 245, 228, 0.5)',
        'dark-glass': 'rgba(28, 13, 41, 0.5)',
      },
      backdropBlur: {
        'lg': '10px',
      }
    },
  },
  plugins: [],
};