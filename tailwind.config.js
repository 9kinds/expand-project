const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            blue: colors.cyan,
            gray: colors.warmGray,
        },
        extend: {
            fontFamily: {
                serif: ['Sacramento', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: { container: false },
}