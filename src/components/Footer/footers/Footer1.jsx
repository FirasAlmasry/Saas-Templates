import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Logo from '../Logo'
import Navigation from '../Navigation'
import TouchWithUs from '../TouchWithUs'
import img from './../../../assets/footer/footer.png'
const Footer1 = () => {
    return (
        <>
            <Box component={'footer'} sx={{
                position: 'relative',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                padding: '16px 64px',
            }} >
                <div className="overlay"></div>
                <Grid container>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }} >
                        <TouchWithUs />
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }} >
                        <Navigation />
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }} >
                        <Logo />
                    </Grid>
                </Grid>
                <Typography color='primary.text' variant={'body2'} fontWeight={400}
                    sx={{ position: 'relative', zIndex: 3, textAlign: 'center', mt: 2 }} >
                    Copyright © 2024 Revamp TECHNICAL SERVICES. All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default Footer1