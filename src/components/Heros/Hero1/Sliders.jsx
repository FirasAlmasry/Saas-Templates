import { Box, CardMedia, useMediaQuery } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import slideImg from './../../../assets/Hero/slider.png'
import la from './../../../assets/Hero/leftAr.png'
import ra from './../../../assets/Hero/rightar.png'
import { useTheme } from '@emotion/react';
import HeroText from './HeroText';

const Sliders = () => {
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));

    const images = [
        slideImg,
        slideImg,
        slideImg,
        slideImg,
    ]
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
                {images?.map((img, i) =>
                    <Box key={i} sx={{ zIndex: 999 }}>
                        <HeroText title={`title template four Here`} desc={`description template four Here`} btn={`see more`} />
                        <div className="overlay"></div>
                        <CardMedia
                            key={i}
                            sx={{
                                height: {
                                    md: "85dvh", xs: "50dvh",
                                },
                                width: "100%",
                                objectFit: "cover",
                            }}
                            component="img"
                            alt={img}
                            src={img} />
                    </Box>
                )}
            </Carousel>
        </>
    )
}

export default Sliders