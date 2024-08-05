import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react';
const Section = ({ title, img, description, supDesc }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{
                display: 'flex', gap: 2, flexDirection: 'column', mb: 2, my: 2, p: 1}} >
                <CardMedia
                    component={'img'}
                    src={img}
                    sx={{
                        p: 1,
                        width: '50px',
                        height: '50px',
                        borderRadius: '8px',
                        objectFit: 'contain',
                        margin: { md: '0', xs: 'auto' },
                    }} />
                <Typography variant={isMobile ? 'h6' : 'h5'} color={'primary.main'} fontWeight={400} >{title}</Typography>
                <Typography variant={'subtitle2'} color={'secondary.main'}>{description}</Typography>
                {
                    supDesc &&
                    <Typography variant={'subtitle2'} color={'secondary.main'}>{supDesc}</Typography>
                }
            </Box>
        </>
    )
}

export default Section