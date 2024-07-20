import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../../../utils/theme'
import Btn from '../../global/Buttons/Btn'
import { useTheme } from '@emotion/react'
const HeroText = ({ title, desc, btn }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                <Typography variant={isMobile ? 'body1' : 'h4'} color={'primary.main'} >{title}</Typography>
                <Typography variant={isMobile ? 'body1' : 'body1'} color={'secondary.text'}>{desc}</Typography>
                    <Btn bg={theme.palette.primary.main} color={theme.palette.secondary.main} text={btn} path={'/about-us'} />
            </Box>
        </>
    )
}

export default HeroText