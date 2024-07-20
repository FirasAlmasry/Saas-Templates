import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import BlogDetails from './BlogDetails'
import BlogFilter from './BlogFilter'
import { useTheme } from '@emotion/react'
import BlogImage from './../../../assets/blogs/blog1.png'

const Blog1 = () => {

  const themeM = useTheme();
  const isMobile = useMediaQuery(themeM.breakpoints.down('sm'));

  return (
    <WrapperSection title={`our blog`} >
      <Grid container>
        <Grid item md={9} xs={12} >
          <BlogDetails
            img={BlogImage}
            type={isMobile ? `, August 9, 2022` : `design`}
            createdBy={isMobile ? `Architecture` : `admin`}
            date={` August 9, 2022`}
            name={`Strategically Thinks and Acts`}
            description={`Lorem ipsum dolor sit amet consectetur Sed risus lectus ac semper id proin mi nulla tellus ellus fermentum morb
i a nisi ut amet leo fermentum eget Neque orci feugiat empus diam Aliquam in gravida pulvinar arcu porttitor
 viverra sed sem orci
 Lorem ipsum dolor sit amet consectetur Sed risus lectus ac semper id proin mi nulla tellus
i a nisi ut amet leo fermentum eget Neque orci feugiat empus diam Aliquam in gravida pulvinar arcu porttitor
 viverra sed sem orci`}
          />
        </Grid>
        <Grid item md={3} xs={12} >
          <BlogFilter />
        </Grid>
      </Grid>
    </WrapperSection>
  )
}

export default Blog1