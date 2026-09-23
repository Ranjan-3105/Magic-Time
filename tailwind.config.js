/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0B0C',
        'bg-secondary': '#141414',
        'accent-orange': '#FF5A1F',
        'accent-rust': '#7A3623',
        'accent-gold': '#D4AF37',
        'text-primary': '#FFFFFF',
        'text-muted': '#B8B8B8',
        'border-subtle': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        headline: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.05) translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Assuming double content
        }
      }
    },
  },
  plugins: [],
}
