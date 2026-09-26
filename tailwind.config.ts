/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f5e7e4',
        champagne: '#f3d7b5',
        rose: '#d98d92',
        ivory: '#fffaf7',
        cocoa: '#2f2624',
        charcoal: '#1d1a1a',
        gold: '#b98a48'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(41, 26, 21, 0.08)',
        gold: '0 12px 30px rgba(185, 138, 72, 0.25)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: [],
};
