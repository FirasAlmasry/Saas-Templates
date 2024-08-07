import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import TransLang from "./TransLang"
import { Pages } from "../../../constants";
import i18next from "i18next";
import { IconButton } from "@mui/material";
// import logo from './../../../assets/Logo/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import DarkModeToggle from "../../global/DarkModeToggle";

export default function NavDrawer({ setDrawer, drawer, data }) {

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
    let lng = i18next.language
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
                            gap: 3,
                            display: "flex",
                            flexDirection: "column",
                            textAlign:  lng === 'en' ? 'left' : 'right',
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
                            <Link to="/">
                                <img src={data?.header_logo} style={{ height:'fit-contain' }} alt="logo" className="nav-logo" ></img>
                            </Link>
                            <IconButton onClick={() => setDrawer(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        {
                            Pages?.map((page, i) => (
                                <StyledLink
                                    key={i}
                                    to={page.path}
                                    onClick={() => setDrawer(false)}>
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
