import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#FCCC24",
            text: "#fff",
            link:'#fff'
        },
        secondary: {
            main: "#000",
            text: "#A69F9F",
            link: '#fff'
        },
        background: {
            default: "#fff",
            section: "#f7f7f7",
            card:'#FFF9FB',
            navbar: "#fff",
            input: "#f7f7f7",
            form: "#fff",
            footer:'#102251'
        },
    },
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
});

export default theme;
