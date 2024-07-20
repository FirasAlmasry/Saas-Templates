import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import { BasicSelect as TransLang } from "./TransLang"
import i18next from "i18next";
import theme from "../../../utils/theme";
import { Pages } from "../../../constants";
import logo from './../../../assets/Logo/logo.png'
import './Nav.css'
import { styled } from '@mui/material/styles';




function NavBar() {

    const StyledLink = styled(RouterLink)(({ theme }) => ({
        textTransform: 'capitalize',
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        transition:'0.5s',
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
        },
    }));

    let lng = i18next.language
    const [drawer, setDrawer] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.section, py:2 }} >
                <AppBar position="static" elevation={0} className="appNav" sx={{backgroundColor:theme.palette.background.navbar}} >
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                marginInlineStart: 1,
                                display: { md: "flex", xs: "none" },
                                alignItems: "center",
                                justifyContent: 'space-evenly',
                            }}>
                            <RouterLink
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    marginInlineStart: 8
                                }}>
                                <img src={logo} alt="logo" className="nav-logo" />
                            </RouterLink>
                            {Pages?.map((page, i) => (
                                <StyledLink
                                    key={i}
                                    to={page.path}
                                    onClick={() => scrollToTop()}
                                >
                                    {lng === 'ar' ? page.name : page.name_en}
                                </StyledLink>
                            ))}
                            <TransLang />
                        </Box>
                        <Box sx={{ justifyContent: 'space-between', display: 'flex', gap: { md: '65px', xs: 1 }, width: { md: 'fit-content', xs: '100%' }, alignItems: 'center' }} >
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { md: "none", xs: "flex" },
                                    justifyContent: "space-between",
                                    width: "100%",
                                    alignItems: 'center'
                                }}>
                                <RouterLink
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        marginInlineStart: 8
                                    }}>
                                    <img src={logo} alt="logo" className="nav-logo" ></img>
                                </RouterLink>
                                <IconButton onClick={() => setDrawer(true)}>
                                    <MenuIcon sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <NavDrawer drawer={drawer} setDrawer={setDrawer} />
        </>
    );
}
export default NavBar;
