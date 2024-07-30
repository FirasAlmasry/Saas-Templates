import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme as themeMobile } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const Section = ({ title, img, description }) => {
    const theme = useTheme();

    const themeM = themeMobile();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{
                display: 'flex', gap: 2, flexDirection: 'column', mb: 2, my: 2, alignItems: 'center', p: 1, borderRadius: '0 30px 0 30px',
                    border:`1px solid ${theme.palette.primary.main}`, textAlign:'center'  }} >
                <CardMedia
                    component={'img'}
                    src={img}
                    sx={{
                        p: 1,
                        width: '50px',
                        height: '50px',
                        borderRadius: '8px',
                        objectFit: 'contain',
                        margin: 'auto',
                    }} />
                <Typography variant={isMobile ? 'h6' : 'h5'} color={'primary.main'} fontWeight={400} >{title}</Typography>
                <Typography variant={'subtitle2'} color={'secondary.main'}>{description}</Typography>
            </Box>
        </>
    )
}

export default Section