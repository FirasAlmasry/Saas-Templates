import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { BasicSelect as TransLang } from "./TransLang"
import { Pages } from "../../../constants";
import i18next from "i18next";
import { IconButton } from "@mui/material";
import logo from './../../../assets/Logo/logo.png'
import CloseIcon from '@mui/icons-material/Close';

export default function NavDrawer({ setDrawer, drawer }) {
    let lng = i18next.language

    const StyledLink = styled(RouterLink)(({ theme }) => ({
        textDecoration: "none",
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
        transition: '0.5s',
        '&:hover': {
            color: theme.palette.primary.main,
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
                            overflowY: 'auto'
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: 300,
                            gap: 2,
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
                                <img src={logo} alt="logo" style={{ width: '50%' }} ></img>
                            </RouterLink>
                            <IconButton onClick={() => setDrawer(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        {Pages?.map((page, i) => (
                            <StyledLink
                                    key={i}
                                    to={page.path}
                                    onClick={() => setDrawer(false)}>
                                    {lng === 'ar' ? page.name : page.name_en}
                            </StyledLink>
                            ))}
                        <TransLang />
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}