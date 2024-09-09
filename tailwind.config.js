/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'custom': '1.8fr 1fr',
      },
      gridTemplateColumns: {
        'custom': '2fr 1fr',
      },
      animation: {
        'marquee': 'marquee var(--marquee-duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--marquee-duration) linear infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(-50%)' }
        },
        "marquee-vertical": {
          '100%': { transform: 'translateY(-50%)' }
        }
      }
      
    },
  },
  plugins: [],
}

