/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e0f7ff',
          100: '#b3ebff',
          200: '#80dfff',
          300: '#4dd3ff',
          400: '#26c9ff',
          500: '#00bfff', // electric cyan
          600: '#0099cc',
          700: '#007399',
          800: '#004d66',
          900: '#002633',
        },
        'accent': '#ff0040', // neon red
        'cyber': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#00d4ff', // cyan
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#0a0e17', // deep navy dark
        },
        'gray': {
          800: '#111827',
          900: '#0a0a0a',
        }
      },
      textColor: {
        'primary': '#00d4ff',
        'secondary': '#e0e0e0',
        'tertiary': '#b3b3b3',
        'danger': '#ff0040'
      },
      fontFamily: {
        'sans': ['JetBrains Mono', 'Fira Code', 'system-ui', 'sans-serif'],
        'display': ['JetBrains Mono', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-red': 'glowRed 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'typing': 'typing 2s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff', textShadow: '0 0 2px #00d4ff' },
          'to': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff', textShadow: '0 0 5px #00d4ff' },
        },
        glowRed: {
          'from': { boxShadow: '0 0 5px #ff0040, 0 0 10px #ff0040', textShadow: '0 0 2px #ff0040' },
          'to': { boxShadow: '0 0 10px #ff0040, 0 0 20px #ff0040', textShadow: '0 0 5px #ff0040' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px #00d4ff' },
          '50%': { opacity: '0.8', boxShadow: '0 0 5px #00d4ff' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00d4ff' },
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}