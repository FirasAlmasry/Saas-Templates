import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage'
import importComponent from '../../utils/importComponent';


const BlogDetails = () => {

  const Blog = { blogSection: 'blog3', }

  const Component = importComponent(`/blogDetailsPages/${Blog.blogSection}`);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  )
}

export default BlogDetails