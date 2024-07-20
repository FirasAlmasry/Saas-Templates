import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react';
const Section = ({ title, children }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{display:'flex', gap:2, flexDirection:'column', mb:2, my:2 }} >
                <Typography variant={isMobile ? 'body2' : 'h6'} color={'primary.main'} fontWeight={400} >{title}</Typography>
                {children}
            </Box>
        </>
    )
}

export default Section