import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'
import i18next from 'i18next'

const OtherBlogs = ({data}) => {
    let lng = i18next.language
    return (
        <>
            <Box sx={{
                display: 'flex', flexDirection: 'column', gap: 2, mx: { md: '10%', xs: '0' }, my:2,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                p: 2,
                borderRadius: '8px',
            }} >
                <Typography variant='h5' >{lng === 'en'?'Other Blogs':'مقالات أخرى'}</Typography>
                {data?.random_blogs?.map(blog => <Card data={blog} />)}
            </Box>
        </>
    )
}

export default OtherBlogs