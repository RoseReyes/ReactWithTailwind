/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-tangerine": "#FA4B38",
                "skill-header": "#F6EAB2",
                "skill-subtext": "#F3F4F6",
                "avatar-border": "#5D8D99",
            },
            animation: {
                shake: "shake 0.85s cubic-bezier(.36,.07,.19,.97) both",
            },
            keyframes: {
                shake: {
                    "10%, 90%": {
                        transform: "translate3d(-1px, 0, 0)",
                    },
                    "20%, 80%": {
                        transform: "translate3d(2px, 0, 0)",
                    },
                    "30%, 50%, 70%": {
                        transform: "translate3d(-4px, 0, 0)",
                    },
                    "40%, 60%": {
                        transform: "translate3d(4px, 0, 0)",
                    },
                },
            },
        },
    },

    plugins: [],
};
