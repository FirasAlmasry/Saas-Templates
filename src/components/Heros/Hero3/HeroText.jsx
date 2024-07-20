import { Box, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../../../utils/theme'
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
        left: '25%',
        transform: 'translate(-25%, -50%)',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            gap: '8px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
        },
    }));

    return (
        <>
            <StyledBox>
                <Typography variant={isMobile ? 'body1' : 'h5'} color={'primary.main'} >{title}</Typography>
                <Typography variant={isMobile ? 'h6' : 'h4'} color={'secondary.main'} >{desc}</Typography>
                <Btn bg={theme.palette.primary.main} color={theme.palette.secondary.main} text={btn} path={'about-us'} />
            </StyledBox>
        </>
    )
}

export default HeroText