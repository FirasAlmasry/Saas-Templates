import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import Btn from '../../global/Buttons/Btn'
import { useTheme as themeMobile } from '@emotion/react'
const HeroText = ({ title, desc, btn }) => {
    const theme = useTheme();

    const themeM = themeMobile();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant={isMobile ? 'body1' : 'h4'} color={'primary.text'} >{title}</Typography>
                <Typography variant={isMobile ? 'body1' : 'body1'} color={'secondary.text'}>{desc}</Typography>
                <Btn bg={theme.palette.primary.main} color={theme.palette.secondary.main} text={btn} path={'/about'} />
            </Box>
        </>
    )
}

export default HeroText