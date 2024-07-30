import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import Logo from '../Logo'
import Navigation from '../Navigation'
import TouchWithUs from '../TouchWithUs'
import { useTheme } from '@mui/material/styles';

const Footer2 = () => {
    const theme = useTheme();

    return (
        <>
            <Box component={'footer'} sx={{
                position: 'relative',
                background: theme.palette.footer.main,
                padding: '16px 64px',
            }}>
                <Grid container>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }} >
                        <Logo />
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }} >
                        <TouchWithUs />
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' } }} >
                        <Navigation />
                    </Grid>
                </Grid>
                <Divider sx={{ border: `1px solid #fff`, my: 2 }} />
                <Typography color='footer.link' variant={'body2'} fontWeight={200}
                    sx={{ position: 'relative', zIndex: 3, textAlign: 'center', mt: 2 }} >
                    Copyright © 2024 Revamp TECHNICAL SERVICES. All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default Footer2