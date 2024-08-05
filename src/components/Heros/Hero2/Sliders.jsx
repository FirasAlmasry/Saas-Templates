import { Box, CardMedia, useMediaQuery } from '@mui/material';
import React from 'react';
import Carousel from "react-material-ui-carousel";
import HeroText from './HeroText';
import i18next from 'i18next';
import { useTheme as themeMobile } from '@emotion/react';

const Sliders = ({data}) => {
    const themeM = themeMobile();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));

    let lng = i18next.language
    return (
        <Carousel
            animation='slide'
            navButtonsAlwaysInvisible
            indicatorIconButtonProps={{
                style: {
                    padding: '0',
                    color: 'transparent',
                    border: '1px solid #FFF',
                    '&:hover': {
                        opacity: "0.6 !important"
                    },
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#FFF',
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '10px',
                    marginLeft: '10px',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: isMobile ? '75%' : '50%',
                    zIndex: 9,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    left: lng === 'en' ? isMobile ? '90%' : '95%' : 0,
                    width: 'fit-content',
                    transform: isMobile ? 'translateY(75%)' : 'translateY(50%)',
                }
            }}
        >
            {data?.slider?.map((res, i) =>
                <Box
                    key={i}
                    sx={{
                        display: 'flex',
                        flexDirection: { md: 'row', xs: 'column-reverse' },
                        alignItems: 'center',
                        gap:2,
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <Box sx={{ width: { md: '45%', xs: '100%' } }} >
                        <HeroText title={res?.title} desc={res?.description} btn={res?.btn_text} path={res?.btn?.link} />
                    </Box>
                    <CardMedia
                        sx={{
                            height: {
                                md: "20rem", xs: "300px",
                            },
                            width: { md: '45%', xs: '100%' },
                            objectFit: "fill",
                            borderRadius:'16px'
                        }}
                        component="img"
                        alt={`slide-${i}`}
                        src={res?.image}
                    />
                </Box>
            )}
        </Carousel>
    );
}

export default Sliders;
