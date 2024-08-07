import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react';
const Section = ({ title, children, description, supDesc }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{
                display: 'flex', gap: 1, flexDirection: 'column', my: 2, p: 1}} >
                {children}
                <Typography variant={isMobile ? 'h6' : 'h5'} color={'primary.main'} fontWeight={400} >{title}</Typography>
                <Typography variant={'subtitle2'} color={'secondary.text'}>{description}</Typography>
                {
                    supDesc &&
                    <Typography variant={'subtitle2'} color={'secondary.text'}>{supDesc}</Typography>
                }
            </Box>
        </>
    )
}

export default Section