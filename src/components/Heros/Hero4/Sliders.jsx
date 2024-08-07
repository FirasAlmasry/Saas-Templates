import { Box, CardMedia } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import HeroText from './HeroText';
import { useTheme } from '@mui/material/styles';

const Sliders = ({ data }) => {
        const theme = useTheme();

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
                {data?.slider?.map((res, i) => 
                    <Box key={i} sx={{ zIndex: 999 }}>
                        <HeroText title={res?.title} desc={res?.description} btn={res?.btn_text} path={res?.btn_link} />
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
                            alt={res?.image}
                            src={res?.image} /> 
                    </Box>
                            )} 
            </Carousel> 
        </>
    )
}

export default Sliders