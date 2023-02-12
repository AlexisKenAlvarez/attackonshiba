/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'rye': ['Rye'],
                'bree': ['Bree Serif'],
                'noto': ['Noto Sans']
            },
            colors: {
                'main': '#F8EDC0',
                'button': '#402622',
                'cardname': '#4A4024',
                'buttonHover': '#341814',
                'cardtext': '#9B6913',
                'tokenbg': '#E7BB70'
            },
            boxShadow: {
                upper: '0px 2px 18px 15px rgba(64,38,34,1)'
            },
            backgroundImage: {
                hero: "url('/shibahero.webp')",
                paper: "url('/papercut.webp')"
            }
        },
    },
    plugins: [],
}
