import { CardMedia } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import slideImg from './../../../assets/Hero/slider.png'
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
                        bottom: '50%',
                        zIndex: 9,
                        display: 'flex',
                        flexDirection: 'column',
                        gap:8,
                        left:'95%',
                        width: 'fit-content',
                        transform: 'translateY(50%)'
                    }
                }}
            >
                {images?.map((img, i) =>
                        <CardMedia
                            key={i}
                            sx={{
                                height: {
                                    md: "20rem", xs: "300px",
                                },
                                width: "100%",
                                objectFit: "fill",
                            }}
                            component="img"
                            alt={img}
                            src={img} /> )}
            </Carousel>
        </>
    )
}

export default Sliders