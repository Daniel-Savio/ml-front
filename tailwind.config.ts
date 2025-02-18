import { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'mockup': "url('/src/assets/mockup.png')",
            }
        },
    },
    plugins: [],
};

export default config;