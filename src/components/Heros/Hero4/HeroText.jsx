import { Box, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
// import theme from '../../../utils/theme';
import Btn from '../../global/Buttons/Btn'
import { useTheme } from '@emotion/react'

const HeroText = ({ title, desc, btn }) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));

    const StyledBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'absolute',
        top: '50%',
        zIndex: 9,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            margin: 'auto',
        },
    }));
    return (
        <>
            <StyledBox>
                <Typography variant={isMobile ? 'h6' : 'h3'} color={'primary.main'} >{title}</Typography>
                <Typography variant={'body1'} color={'secondary.text'} >{desc}</Typography>
                <Btn text={btn} path={'/about'} />
            </StyledBox>
        </>
    )
}

export default HeroText