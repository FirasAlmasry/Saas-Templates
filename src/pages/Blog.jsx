import React from 'react'
import Header from '../components/global/headers/Header'
import BlogDetails from '../components/blogDetailsPages'
import { useBlog } from '../hooks/useBlog'
import LoadingPage from '../components/global/LoadingPage'


const Blog = () => {
  const { blog, isLoading } = useBlog()
  if (isLoading) return <LoadingPage />
  
  return (
    <>
      <Header cover={blog?.blog_cover}/>
      <BlogDetails data={blog} />
    </>
  )
}

export default Blog