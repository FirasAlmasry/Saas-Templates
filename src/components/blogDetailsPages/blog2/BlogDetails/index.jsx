import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Btn from '../../../global/Buttons/Btn'
import WrapperCatCreated from './WrapperCatCreated'
import userIcon from './../../../../assets/blogs/Icon awesome-user-check.png'
import catIcon from './../../../../assets/blogs/Icon ionic-ios-book.png'
import { useTheme } from '@emotion/react'

const BlogDetails = (blogs = {}) => {
    const { name, type, createdBy, date, img, description } = blogs;
    const themeM = useTheme();
    const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <CardMedia
                    component={'img'}
                    src={img}
                />
                {
                    isMobile ||
                    <Box sx={{ mt: '-5%', ml: '2%' }} >
                            <Btn text={date} />
                    </Box>
                }
                <Box sx={{ display: 'flex', flexDirection: { md: 'column', xs: 'column-reverse' }, gap:2, alignItems:{md:'unset', xs:'center'} }} >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                        <WrapperCatCreated icon={userIcon} text={createdBy} />
                        <WrapperCatCreated icon={catIcon} text={type} />
                    </Box>
                    <Typography variant='h6' color={'secondary.main'} >{name}</Typography>
                </Box>
                {description && description?.split('.')?.map((part, index) => (
                    <Typography key={index} color={'secondary.text'} >{part}</Typography>
                ))}
            </Box>
        </>
    )
}

export default BlogDetails