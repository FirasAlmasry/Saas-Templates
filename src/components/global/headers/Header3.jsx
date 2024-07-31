import { Box, Typography } from '@mui/material'
import React from 'react'
import header from './../../../assets/Hero/slider.png'
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';


const Header3 = () => {
    const theme = useTheme();

    const location = useLocation()
    let page = location.pathname.split('/')[1]
    return (
        <Box position={'relative'} sx={{ mt: '-70px', backgroundImage: `url(${header})`, height: '20rem', backgroundSize: 'cover', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div className="overlay"></div>
            <Box sx={{ position: 'relative', zIndex: 9 }} >
                <div style={{
                    position: 'absolute',
                    top: -10,
                    right: 0,
                    width: '100%',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '100%',
                    borderTop: `2px solid ${theme.palette.primary.main}`,
                    // margin: '10px 0'
                }} />
                <Box sx={{ display: 'flex', color: '#FFF', justifyContent: 'center', gap: 1 }} >
                    <Typography>Home</Typography>
                    /
                    <Typography>{page.toUpperCase()}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Header3