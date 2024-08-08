import { Box, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Btn from '../../global/Buttons/Btn'
import { useTheme as themeMobile } from '@emotion/react'
const HeroText = ({ title, desc, btn }) => {
    const themeM = themeMobile();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));


    const StyledBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'absolute',
        top: '50%',
        zIndex: 9,
        left: '25%',
        transform: 'translate(-25%, -50%)',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            gap: '8px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            alignItems: 'center',
            width: '85%',
            margin: 'auto',
        },
    }));

    return (
        <>
            <StyledBox>
                <Typography variant={isMobile ? 'h6' : 'h3'} color={'primary.text'} >{title}</Typography>
                <Typography variant={'body1'} color={'secondary.text'} sx={{display: isMobile && 'none'}} >{desc}</Typography>
                <Btn text={btn} path={'/about'} />
            </StyledBox>
        </>
    )
}

export default HeroText