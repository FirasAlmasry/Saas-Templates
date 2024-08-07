import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme as themeMobile } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const Section = ({ title, children, description, supDesc }) => {
    const theme = useTheme();

    const themeM = themeMobile();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{
                display: 'flex', gap: 1, flexDirection: 'column', my: 2, alignItems: 'center', p: 1, borderRadius: '0 30px 0 30px',
                    border:`1px solid ${theme.palette.primary.main}`, textAlign:'center'  }} >
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