import React from 'react'
import Header from '../components/global/headers/Header'
import WrapperSection from '../components/global/WrapperSection'
import GridItems from '../components/global/GridItems'
import { Grid } from '@mui/material'
import { blogs } from '../constants/blogs'
import Card from '../components/blogs/cards'

const OurBlogs = () => {

  const Blogs = { blogSection: 'Card1', }

  return (
    <>
      <Header />
      <WrapperSection title={`Our Blogs`}>
        {blogs &&
          <GridItems data={blogs} render={(blog) => (
            <Grid item md={6} xs={12} key={blog.id}>
              <Card nameSection={Blogs} blog={blog} />
            </Grid>
          )} />
        }
      </WrapperSection>
    </>
  )
}

export default OurBlogs