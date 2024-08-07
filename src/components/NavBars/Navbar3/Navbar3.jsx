import { useState } from "react";
import i18next from "i18next";
import { Link as RouterLink } from "react-router-dom";
import { Container, IconButton, AppBar, Box, Toolbar, styled, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TransLang from "./TransLang"
import NavDrawer from "./NavDrawer";
import { useTheme } from '@mui/material/styles';
import { Pages } from "../../../constants";
import DarkModeToggle from "../../global/DarkModeToggle";

function Navbar3({data}) {
    let lng = i18next.language
    const [drawer, setDrawer] = useState(false);
      const theme = useTheme();

    const StyledLink = styled(RouterLink)(({ theme }) => ({
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

    return (
        <>
            <AppBar position="static" elevation={0}
                style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    backgroundColor: theme.palette.nav.main,
                    position: 'sticky',
                    top: 0,
                    zIndex: 999
                }}>
                <Container maxWidth="lg">
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
                            <RouterLink
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    marginInlineStart: 8
                                }}>
                                <img src={data?.header_logo} alt="logo" className="nav-logo" />
                            </RouterLink>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    width: '60%'
                                }}>
                                {
                                    Pages?.map((page, i) => <StyledLink
                                        key={i}
                                        to={page.path}>
                                        {lng === 'ar' ? page.name : page.name_en}
                                    </StyledLink>
                                    )}
                                <TransLang />
                                <DarkModeToggle />
                            </Box>
                        </Box>
                        <Box sx={{ justifyContent: 'space-between', display: 'flex', gap: { md: '65px', xs: 1 }, width: { md: 'fit-content', xs: '100%' }, alignItems: 'center' }} >
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { md: "none", xs: "flex" },
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}>
                                <RouterLink
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        marginInlineStart: 8
                                    }}>
                                    <img src={data?.header_logo} alt="logo" className="nav-logo" ></img>
                                </RouterLink>
                                <IconButton onClick={() => setDrawer(true)}>
                                    <MenuIcon sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <NavDrawer drawer={drawer} setDrawer={setDrawer} data={data} />
        </>
    );
}
export default Navbar3;
