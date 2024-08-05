import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, IconButton, AppBar, Box, Toolbar, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import TransLang from "./TransLang"
// import logo from './../../../assets/Logo/logo.png'
import './Nav.css'
import i18next from "i18next";
import { Pages } from "../../../constants";
import { useTheme } from '@mui/material/styles';
import DarkModeToggle from "../../global/DarkModeToggle";

function Navbar4({data}) {
      const theme = useTheme();

    const StyledLink = styled(Link)(({ theme }) => ({
        textDecoration: "none",
        fontSize: 18,
        textTransform: 'capitalize',
       color: theme.palette.nav.link,
        transition: '0.5s',
        '&:hover': {
            color: theme.palette.nav.hover,
            textDecoration: 'underline',
        },
    }));

    const StyledDiv = styled('div')(({ theme, language }) => ({
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'inline-block',
            backgroundImage: `linear-gradient(to right, ${theme.palette.nav.main} 100%, transparent calc(50% + 60px))`,
            position: 'absolute',
            width: '100%',
            height: '6rem',
            top: '0.3rem',
            borderRadius: '50px',
            left: language === 'ar' ? '-17%' : '17%',
            transform: language === 'ar' ? 'translateX(50%)' : 'translateX(-50%)',
        },
        '@media only screen and (max-width: 767px)': {
            '&::before': {
                left: '0%',
                transform: language === 'ar' ? 'translateX(70%)' : 'translateX(-70%)',
            },
        },
    }));

    let lng = i18next.language
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            
            <AppBar position="static" elevation={0}
                style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    position:'sticky',
                    top:0,
                    zIndex: 999, 
                    backgroundColor:'transparent'
                }} sx={{ backgroundColor: theme.palette.nav.main }}>
                <StyledDiv language={lng} ></StyledDiv>
                    <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                gap: 5,
                                marginInlineStart: 1,
                                display: { md: "flex", xs: "none" },
                                alignItems: "center",
                                justifyContent: 'space-around'
                            }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    width: '60%'
                                }}>
                                <DarkModeToggle />
                                <TransLang />
                                {
                                    Pages?.map((page, i) => <StyledLink
                                        key={i}
                                        to={page.path}>
                                        {lng === 'ar' ? page.name : page.name_en}
                                    </StyledLink>
                                    )}
                            </Box>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    marginInlineStart: 8
                                }}>
                                <img src={data?.header_logo} height={60} alt="logo" className="nav-logo" />
                            </Link>
                        </Box>
                        <Box sx={{ justifyContent: 'space-between', display: 'flex', gap: { md: '65px', xs: 1 }, width: { md: 'fit-content', xs: '100%' }, alignItems: 'center' }} >
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { md: "none", xs: "flex" },
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        marginInlineStart: 8
                                    }}>
                                    <img src={data?.header_logo} height={60} alt="logo" className="nav-logo" ></img>
                                </Link>
                                <IconButton onClick={() => setDrawer(true)}>
                                    <MenuIcon sx={{ fontSize: '3rem', color: theme.palette.primary.main }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                    </Container>
            </AppBar>
            <NavDrawer drawer={drawer} setDrawer={setDrawer} />
        </>
    );
}
export default Navbar4;