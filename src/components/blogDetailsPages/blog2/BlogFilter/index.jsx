import { Box } from '@mui/material'
import React from 'react'
import Search from './Search'
import Categories from './Categories'
import PopularTags from './PopularTags'

const BlogFilter = ({data}) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mx: { md: '10%', xs: '0' }, my: { md: '0', xs: 2 } }} >
        <Search />
        <Categories cat={data?.categories}/>
        <PopularTags tags={data?.tags} />
      </Box>
    </>
  )
}

export default BlogFilter