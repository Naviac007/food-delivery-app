/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // colors: {
        //     'black': '#212121',
        //     'gray': '#c8cdd0',
        //     'depthBase': '#a5acb1',
        //     'depthLight1': '#C8CDD0',
        //     'depthLight2': '#c8cdd0',
        //     'depthLight3': '#f7f7f8',
        //     'brandBase': '#003479',
        //     'depthDark3':'#8C969B',
        //     'highlightDark1': '#235a9a',
        //     'highlightBase': '#2a6ebb',
        //     'highlightLight1': '#2e78cc',
        //     'highlightLight2': '#d5e4f6',
        //     'highlightLight3': '#eaf2fa',
        //     'highlightLight4': '#f7fafd',
        //     'warningBase':'#f6af09',
        //     'warningLight1': '#FFF6E0',
        //     'alertBase':'#ae332d',
        //     'white': '#ffffff',
        //     'sucess': '#09a580'
        // },
        fontFamily: {
            sans: ['Source Sans Pro', 'Helvetica Neue', 'Arial', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            // colors: {
            //     'primary': '',
            //     'secondary': ''

            // },
            fontSize: {
                '2xs': '0.625rem', // 10px
                'xs': '0.75rem',   // 12px
                'sm': '0.875rem',  // 14px
                'base': '1rem',    // 16px
                'lg': '1.125rem',  // 18px
                'xl': '1.25rem',   // 20px
                '2xl': '1.5rem',   // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem',  // 36px
                '5xl': '3rem',     // 48px
                '6xl': '4rem',     // 64px
            },
            padding: {
                '1': '1vh',
                '2': '2vh',
                '3': '3vh',
                '4': '4vh',
                '5': '5vh',
            },
            width: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            },
            height: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            }
        },
    },
    plugins: [],
}

