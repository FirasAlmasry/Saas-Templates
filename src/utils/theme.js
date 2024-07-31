// theme.js
import { createTheme } from '@mui/material/styles';

const baseTheme = {
    typography: {
        fontWeight: '600',
        h1: {
            fontWeight: 'bold'
        },
        h2: {
            fontWeight: '600'
        },
        h3: {
            fontWeight: '500'
        },
        h4: {
            fontWeight: '400'
        },
        h5: {
            fontWeight: '400'
        },
        h6: {
            fontWeight: '400'
        },
    },
};

const lightPalette = {
    mode: 'light',
    primary: {
        main: "#FCCC24",
        text: "#fff",
    },
    secondary: {
        main: "#000",
        text: "#A69F9F",
    },
    nav: {
        main: "#fff",
        link: '#000',
        hover: '#A69F9F'
    },
    footer: {
        main: "#102251",
        link: '#fff',
        hover: '#A69F9F'
    },
    background: {
        default: "#fff",
        section: "#f7f7f7",
        card: '#ddd',
        input: "#f7f7f7",
        form: "#fff",
    },
};

const darkPalette = {
    mode: 'dark',
    primary: {
        main: "#FCCC24",
        text: "#000",
    },
    secondary: {
        main: "#fff",
        text: "#A69F9F",
    },
    nav: {
        main: "#000",
        link: '#fff',
        hover: '#A69F9F'
    },
    footer: {
        main: "#121212",
        link: '#fff',
        hover: '#A69F9F'
    },
    background: {
        default: "#121212",
        section: "#1e1e1e",
        card: '#2e2e2e',
        input: "#1e1e1e",
        form: "#121212",
    },
};

const getPalette = (mode) => (mode === 'dark' ? darkPalette : lightPalette);

const theme = (mode) => createTheme({ ...baseTheme, palette: getPalette(mode) });

export default theme;
