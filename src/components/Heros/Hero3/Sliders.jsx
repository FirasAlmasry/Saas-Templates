import { CardMedia } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import slideImg from './../../../assets/Hero/slider.png'
import theme from '../../../utils/theme';

const Sliders = () => {
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
                IndicatorIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="10" viewBox="0 0 32 14">
                        <rect id="Rectangle_266" data-name="Rectangle 266" width="30" height="10" rx="2"   />
                    </svg>
                }
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
                {images?.map((img, i) =>
                        <CardMedia
                            key={i}
                            sx={{
                                height: {
                                    md: "35rem", xs: "300px",
                                },
                                width: "100%",
                                objectFit: "cover",
                            }}
                            component="img"
                            alt={img}
                            src={img} /> )}
            </Carousel>
        </>
    )
}

export default Sliders