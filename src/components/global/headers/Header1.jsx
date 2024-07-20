import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import header from './../../../assets/Hero/slider.png'
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const Header1 = () => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    const location = useLocation()
    let page = location.pathname.split('/')[1]
    
    
    return (
        <Box position={'relative'} sx={{ mt: '-70px', backgroundImage: `url(${header})`, height: '20rem', backgroundSize: 'cover', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div className="overlay"></div>
            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 3, alignItems: 'center' }} >
                <Typography variant={isMobile ? 'h6' : 'h5'} color={'primary.main'} >{`Home / ${page}`}</Typography>
            </Box>
        </Box>
    )
}

export default Header1