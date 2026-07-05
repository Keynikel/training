/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: '#25344F',
        slate: '#617891',
        tan: '#D5B893',
        coffee: '#6F4D38',
        caput: '#632024',
        linen: '#F8F2EA',
        ivory: '#FFFCF6',
        mist: '#EDF1EE',
        cloud: '#F3F6F4'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(37, 52, 79, 0.06)',
        card: '0 8px 20px rgba(37, 52, 79, 0.05)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
};
