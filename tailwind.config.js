/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050712',
        night: '#090d1d',
        electric: '#21d4ff',
        cyanGlow: '#67e8f9',
        violetGlow: '#8b5cf6',
        magentaGlow: '#ff3df2',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 28px rgba(33, 212, 255, 0.26)',
        magenta: '0 0 28px rgba(255, 61, 242, 0.22)',
      },
      backgroundImage: {
        'panel-gradient':
          'linear-gradient(145deg, rgba(7, 12, 28, 0.92), rgba(13, 15, 37, 0.74))',
      },
    },
  },
  plugins: [],
};
