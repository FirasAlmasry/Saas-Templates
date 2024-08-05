import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Btn from '../../../global/Buttons/Btn'
import WrapperCatCreated from './WrapperCatCreated'
import userIcon from './../../../../assets/blogs/Icon awesome-user-check.png'
import catIcon from './../../../../assets/blogs/Icon ionic-ios-book.png'
import { useTheme } from '@emotion/react'
import { extractVideoLink } from '../../../../utils/helpers'

const BlogDetails = (blogs = {}) => {
    const { name, cat, createdBy, date, img, description, type, video } = blogs;
    const isImage = type === 'photo'
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                {isImage ? <CardMedia
                    component={'img'}
                    src={img}
                /> : <iframe
                    src={extractVideoLink(video)}
                    frameborder="0"
                    style={{ width: '100%', height: '25rem', borderRadius: '16px', position: 'relative' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video" />}
                
                {
                    isMobile ||
                    <Box sx={{ mt: '-5%', ml: '2%' }} >
                            <Btn text={date} />
                    </Box>
                }
                <Box sx={{ display: 'flex', flexDirection: { md: 'column', xs: 'column-reverse' }, gap:2, alignItems:{md:'unset', xs:'center'} }} >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                        <WrapperCatCreated icon={userIcon} text={createdBy} />
                        <WrapperCatCreated icon={catIcon} text={cat} />
                    </Box>
                    <Typography variant='h6' color={'secondary.main'} >{name}</Typography>
                </Box>
                {description && description?.split('.')?.map((part, index) => (
                    <Typography key={index} color={'secondary.text'} >  <div className="desc" dangerouslySetInnerHTML={{ __html: part }}></div></Typography>
                ))}
            </Box>
        </>
    )
}

export default BlogDetails