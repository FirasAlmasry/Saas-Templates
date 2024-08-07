import { Box, Grid } from '@mui/material'
import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import BlogDetails from './BlogDetails'
import BlogFilter from './BlogFilter'
import OtherBlogs from './OtherBlogs/OtherBlogs'
import NPBlog from './NPBlog/NPBlog'

const Blog3 = ({ data }) => {
    
    return (
        <WrapperSection>
            <Grid container>
                <Grid item md={8} xs={12} >
                    <BlogDetails
                        img={data?.data?.image}
                        cat={data?.data?.category}
                        createdBy={data?.data?.addBy}
                        date={data?.data?.date}
                        name={data?.data?.title}
                        description={data?.data?.body}
                        type={data?.data?.type}
                        video={data?.data?.video_link}
                    />
                    <NPBlog data={data} />
                </Grid>
                <Grid item md={4} xs={12} >
                    <Box sx={{
                        position: { md: 'sticky', xs: 'static' },
                        top: '15%'
                    }}>
                        <BlogFilter data={data} />
                        <OtherBlogs data={data} />
                    </Box>
                </Grid>
            </Grid>
        </WrapperSection>
    )
}

export default Blog3