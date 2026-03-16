/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          yellow: '#FBBF24',
          ink: '#1F2937',
          warm: '#FFFDF7',
          canvas: '#F7F4EC',
          mint: '#14B8A6',
          coral: '#FB7185'
        }
      },
      boxShadow: {
        soft: '0 12px 40px rgba(31, 41, 55, 0.08)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};
