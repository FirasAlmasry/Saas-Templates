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
        main: "#4c164c",
        text: "#fff",
    },
    secondary: {
        main: "#ffdf6f",
        text: "#A69F9F",
    },
    nav: {
        main: "#4c164c",
        link: '#fff',
        hover: '#ffdf6f'
    },
    footer: {
        main: "#102251",
        link: '#fff',
        hover: '#A69F9F'
    },
    background: {
        default: "#fff",
        section: "#f7f7f7",
        card: '#fff',
        input: "#f7f7f7",
        form: "#fff",
        drawer: ''
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
