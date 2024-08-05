import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import header from './../../../assets/Hero/slider.png'
import EastIcon from '@mui/icons-material/East';

const Header2 = ({ page_name, cover }) => {
const location = useLocation()
    let page = location.pathname.split('/')[1]

    return (
        <Box position={'relative'} sx={{ mt: '-70px', backgroundImage: `url(${cover || header})`, height: '20rem', backgroundSize: 'cover', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div className="overlay"></div>
            <Box sx={{ position: 'relative', zIndex: 3, textAlign: 'center' }} >
                <Typography variant='h4' color={'primary.text'} sx={{ fontWeight: 'bold', mb: 2 }} >
                    {page.toUpperCase()}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }} color={'secondary.text'} >
                    <Typography>Home</Typography>
                    <EastIcon color='primary.text' />
                    <Typography>{page_name || page}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Header2