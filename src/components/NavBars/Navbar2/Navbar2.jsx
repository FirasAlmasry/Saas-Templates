import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { IconButton, AppBar, Box, Toolbar, styled, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import i18next from "i18next";
import NavDrawer from "./NavDrawer";
import TransLang from "./TransLang"
import { useTheme } from '@mui/material/styles';
import { Pages } from "../../../constants";
import DarkModeToggle from "../../global/DarkModeToggle";

function Navbar2({data}) {
      const theme = useTheme();

    let lng = i18next.language
    const [drawer, setDrawer] = useState(false);

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
            <AppBar position="static" elevation={0} sx={{
                backgroundColor: theme.palette.nav.main,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                position: 'sticky',
                top: 0,
                zIndex: 999
            }}>
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
                                marginInlineStart: 8,
                                width: '35%'
                            }}>
                            <img src={data?.header_logo} alt="logo" className="nav-logo" />
                        </RouterLink>
                        {Pages?.map((page, i) => (
                            <StyledLink
                                key={i}
                                to={page.path}
                            >
                                {lng === 'ar' ? page.name : page.name_en}
                            </StyledLink>
                        ))}
                        <TransLang />
                        <DarkModeToggle />
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
                                <img src={data?.header_logo} alt="logo" className="nav-logo" ></img>
                            </RouterLink>
                            <IconButton onClick={() => setDrawer(true)}>
                                <MenuIcon sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <NavDrawer drawer={drawer} setDrawer={setDrawer} data={data}/>
        </>
    );
}
export default Navbar2;
