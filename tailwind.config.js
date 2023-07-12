/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode:['jit'],
  theme: {
	extend: {
		colors: {
			base:'#f4f4f4',
			primary_green: '#00463D',
			accent_green: '#00d264',
			dark_gray:'#ddd',
			accent_orange:'#e4943b',
			accent_pink:'#e6007e',
			brand_ds_bg:'#F66126',
			brand_ds_text:'#6C252E'
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		screens: {
            xs: '480px',
            ss: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1700px',
        },
	},
  },
  plugins: [],
}
