import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import logo from './../../assets/Logo/logo.png'
const Logo = () => {
    return (
        <>
            <Box sx={{ position: 'relative', zIndex: 2, width:'10rem' }}>
                <CardMedia component={'img'} src={logo} sx={{mt:2}} />
                <Typography color='footer.link' variant={'body2'} fontWeight={400}
                    sx={{ position: 'relative', zIndex: 3, textAlign: 'center', mt: 2 }} >
                    Writer Example Bio Company Here Writer Example Bio Company Here
                </Typography>
            </Box>
        </>
    )
}

export default Logo