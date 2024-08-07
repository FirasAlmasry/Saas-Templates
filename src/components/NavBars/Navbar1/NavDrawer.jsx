import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, styled, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { BasicSelect as TransLang } from "./TransLang"
import { Pages } from "../../../constants";
import i18next from "i18next";
import { IconButton } from "@mui/material";
// import logo from './../../../assets/Logo/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import DarkModeToggle from "../../global/DarkModeToggle";

export default function NavDrawer({ setDrawer, drawer, data }) {
    let lng = i18next.language
    const theme = useTheme()
    const StyledLink = styled(RouterLink)(({ theme }) => ({
        textDecoration: "none",
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: theme.palette.nav.link,
        transition: '0.5s',
        '&:hover': {
            color: theme.palette.nav.hover,
            textDecoration: 'underline',
        },
    }));
    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'top'}
                    open={drawer}
                    onClose={() => setDrawer(false)}
                    sx={{
                        '.MuiDrawer-paper': {
                            borderBottomRightRadius: '16px',
                            overflowY: 'auto',
                            backgroundColor: theme.palette.primary.main,
                            alignItems: 'center'
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: 300,
                            gap: 2,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: 'center',
                            padding: "40px 20px",
                        }}>
                                <IconButton onClick={() => setDrawer(false)} sx={{position:'absolute', right:'25px'}} >
                                    <CloseIcon />
                                </IconButton>
                        {/* <Box
                            sx={{
                                flexGrow: 0,
                                display: { md: "none", xs: "flex" },
                                justifyContent: "space-between",
                                width: "100%",
                                alignItems: "center",
                            }}>
                        </Box> */}
                            <RouterLink to="/">
                                <img src={data?.header_logo} alt="logo" style={{ width: '50%' }} ></img>
                            </RouterLink>
                        {Pages?.map((page, i) => (
                            <StyledLink
                                key={i}
                                to={page.path}
                                onClick={() => setDrawer(false)}>
                                {lng === 'ar' ? page.name : page.name_en}
                            </StyledLink>
                        ))}
                        <TransLang />
                        <DarkModeToggle />
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
