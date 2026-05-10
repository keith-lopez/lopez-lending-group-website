/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#366e6d',
          dark: '#2a5857',
          light: '#4a8a89',
        },
        offwhite: '#fefefe',
        silver: {
          DEFAULT: '#e4eaeb',
          dark: '#c9d3d5',
        },
        steel: '#9aadb3',
        navy: {
          DEFAULT: '#37465c',
          dark: '#2a3648',
          light: '#4d5e78',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
        prose: '68ch',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(55, 70, 92, 0.06), 0 4px 12px rgba(55, 70, 92, 0.04)',
      },
    },
  },
  plugins: [],
};
