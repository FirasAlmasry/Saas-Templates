import { Box, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'
import { extractVideoLink, formatDate } from '../../../../utils/helpers';
import i18next from 'i18next';

const BlogDetails = (blogs ={}) => {
    const { name, cat, createdBy, date, img, description, type, video } = blogs;
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    const isImage = type === 'photo'
    const lng = i18next.language

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                {
                    isImage ? <CardMedia
                        sx={{ width: '100%', height: '25rem', borderRadius: '16px', position: 'relative' }}
                        image={img}
                        title="green iguana">
                        {

                            <CardContent
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: lng === 'en' ? '-7%' : '0',
                                    width: 'calc(100%)',
                                    p: 1,
                                    pb: 0,
                                    backgroundColor: '#fff',
                                    borderRadius: '16px',
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
                                    <Typography gutterBottom color={'secondary.text'} component="div" sx={{ textTransform: 'uppercase' }} >
                                        {createdBy},
                                    </Typography>
                                    <Typography color={'secondary.text'}  >
                                        {cat},    {formatDate(date)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        }
                    </CardMedia> :
                        <Box style={{ width: '100%', height: '25rem', borderRadius: '16px', position: 'relative' }}>
                            <iframe
                                src={extractVideoLink(video)}
                                frameborder="0"
                                style={{ width: '100%', height: '25rem', borderRadius: '16px', position: 'relative' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="video" />
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
                                    <Typography gutterBottom color={'secondary.text'} component="div" sx={{ textTransform: 'uppercase' }} >
                                        {createdBy},
                                    </Typography>
                                    <Typography color={'secondary.text'}  >
                                        {cat},    {formatDate(date)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Box>
                }
                <Typography color={'secondary.main'} variant={isMobile ? 'h6' : 'h5'} sx={{ my: 1.2 }} >{name}</Typography>
                {description && description?.split('.')?.map((part, index) => (
                    <Typography key={index} color={'secondary.text'} >  <div className="desc" dangerouslySetInnerHTML={{ __html: part }}></div></Typography>
                ))}
            </Box>
        </>
    )
}

export default BlogDetails