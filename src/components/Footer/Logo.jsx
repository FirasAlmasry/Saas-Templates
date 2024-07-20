import { Box, CardMedia } from '@mui/material'
import React from 'react'
import logo from './../../assets/Logo/logo.png'
const Logo = () => {
    return (
        <>
            <Box sx={{ position: 'relative', zIndex: 2, width:'10rem' }}>
                <CardMedia component={'img'} src={logo} sx={{mt:2}} />
            </Box>
        </>
    )
}

export default Logo