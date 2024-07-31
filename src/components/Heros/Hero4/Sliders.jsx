import { Box, CardMedia } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import HeroText from './HeroText';
import { useTheme } from '@mui/material/styles';
import slideImg from './../../../assets/Hero/slider.png'

const Sliders = () => {
        const theme = useTheme();

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
                indicatorIconButtonProps={{
                    style: {
                        padding: '0',
                        fill: '#fff',
                        '&:hover': {
                            opacity: "0.6 !important"
                        },
                    }
                }}

                activeIndicatorIconButtonProps={{
                    style: {
                        fill: theme.palette.primary.main,
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '10px',
                        textAlign: 'center',
                        position: 'absolute',
                        bottom: '3%',
                        zIndex: 9
                    }
                }}
            >
                {images?.map((res, i) => 
                    <Box key={i} sx={{ zIndex: 999 }}>
                        <HeroText title={`title template four Here`} desc={`description template four Here`} btn={`see more`} />
                        <div className="overlay"></div>
                        <CardMedia
                            sx={{
                                height: {
                                    md: "45rem", xs: "300px",
                                },
                                width: "100%",
                                objectFit: "cover",
                            }}
                            component="img"
                            alt={res}
                            src={res} /> 
                    </Box>
                            )} 
            </Carousel> 
        </>
    )
}

export default Sliders