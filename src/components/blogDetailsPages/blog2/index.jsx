import { Grid } from '@mui/material'
import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import BlogDetails from './BlogDetails'
import BlogFilter from './BlogFilter'

const Blog2 = ({ data }) => {

  return (
    <WrapperSection title={data?.blog_title} >
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
                </Grid>
                <Grid item md={4} xs={12} >
                    <BlogFilter data={data}/>
                </Grid>
            </Grid>
        </WrapperSection>
  )
}

export default Blog2