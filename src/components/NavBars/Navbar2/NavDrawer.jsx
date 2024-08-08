import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, styled, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import TransLang from "./TransLang"
import { Pages } from "../../../constants";
import i18next from "i18next";
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
                    anchor={lng === 'en' ? 'left' : 'right'}
                    open={drawer}
                    onClose={() => setDrawer(false)}
                    sx={{
                        '.MuiDrawer-paper': {
                            height: '80% !important ',
                            borderBottomRightRadius: '16px',
                            backgroundColor: theme.palette.primary.main,
                            overflowY: 'auto'
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: 300,
                            gap: 3,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: lng === 'en' ? 'left' : 'right',
                            padding: "40px 20px",
                        }}>
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { md: "none", xs: "flex" },
                                justifyContent: "space-between",
                                width: "100%",
                                alignItems: "center",
                            }}>
                            <RouterLink to="/">
                                <img src={data?.header_logo} style={{ height: 'fit-contain' }} alt="logo" className="nav-logo" ></img>
                            </RouterLink>
                            <IconButton onClick={() => setDrawer(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        {
                            Pages?.map((page, i) => (
                                <StyledLink
                                    key={i}
                                    to={page.path}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: 14,
                                        textTransform: 'capitalize',
                                        fontWeight: 'bold'
                                    }}
                                    className="link"
                                    onClick={() => setDrawer(false)}
                                >
                                    {lng === 'ar' ? page.name : page.name_en}
                                </StyledLink>
                            ))
                        }
                        <TransLang />
                        <DarkModeToggle />
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
