import { Box, CardMedia, useMediaQuery } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import la from './../../../assets/Hero/leftAr.png'
import ra from './../../../assets/Hero/rightar.png'
import { useTheme } from '@emotion/react';
import HeroText from './HeroText';

const Sliders = ({data}) => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Carousel
                animation='slide'
                NextIcon={<img src={ra} alt='icon' />}
                PrevIcon={<img src={la} alt='icon' />}
                navButtonsWrapperProps={{
                    style: {
                        zIndex: 3,
                        backgroundColor: 'none'
                    }
                }}
                navButtonsProps={{ style: { backgroundColor: 'transparent', } }}
                indicators={false}
                cycleNavigation={true}
                navButtonsAlwaysVisible={!isMobile && true}
            >
                {data?.slider?.map((res, i) =>
                    <Box key={i} sx={{ zIndex: 999 }}>
                        <HeroText title={res?.title} desc={res?.description} btn={res?.btn_text} path={res?.btn_link} />
                        <div className="overlay"></div>
                        <CardMedia
                            key={i}
                            sx={{
                                height: {
                                    md: "75dvh", xs: "60dvh",
                                },
                                width: "100%",
                                objectFit: "cover",
                            }}
                            component="img"
                            alt={res?.image}
                            src={res?.image} />
                    </Box>
                )}
            </Carousel>
        </>
    )
}

export default Sliders