import { Box, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'

const BlogDetails = (blogs ={}) => {
    const { name, type, createdBy, date, img, description } = blogs;
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <CardMedia
                    sx={{ width: '100%', height: '25rem', borderRadius: '16px', position: 'relative' }}
                    image={img}
                    title="green iguana">
                    {

                        <CardContent
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: '-7%',
                                width: 'calc(100%)',
                                p: 1,
                                pb: 0,
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                height: "4.5rem",
                            }}
                        >
                            <Typography
                                gutterBottom
                                color={'primary.main'}
                                component="div"
                                sx={{ textTransform: 'uppercase' }}
                            >
                                {name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }} >
                                <Typography gutterBottom color={'secondary.main'} component="div" sx={{ textTransform: 'uppercase' }} >
                                    {createdBy},
                                </Typography>
                                <Typography color={'secondary.text'}  >
                                    {type},   {date}
                                </Typography>
                            </Box>
                        </CardContent>
                    }
                </CardMedia>
                <Typography color={'secondary.main'} variant={isMobile ? 'h6' : 'h5'} sx={{ my: 1.2 }} >{name}</Typography>
                {description && description?.split('.')?.map((part, index) => (
                    <Typography key={index} color={'secondary.text'} >{part}</Typography>
                ))}
            </Box>
        </>
    )
}

export default BlogDetails