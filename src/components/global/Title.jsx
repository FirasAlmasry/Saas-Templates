import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'

const Title = ({ title, description, secColor = 'secondary.text', color = 'secondary.main', align= 'center' }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: align, gap:2}} >
                <Typography variant={isMobile ? 'h6' : 'h5'} color={color} >{title}</Typography>
                {description && description?.split('.')?.map((part, index) => (
                    <Typography key={index} color={secColor} sx={{ textAlign: 'center', lineHeight: 1.7,}} variant='body2' >{part}</Typography>
                ))}
            </Box>
        </>
    )
}

export default Title