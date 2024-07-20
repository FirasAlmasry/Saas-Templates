import React, { lazy, Suspense } from 'react'
import LoadingPage from '../global/LoadingPage'

const Blog1 = lazy(() => import('./blog1'))
const Blog2 = lazy(() => import('./blog2'))
const Blog3 = lazy(() => import('./blog3'))

const BlogDetails = () => {
      const renderBlogSection = (blog) => {
    const data = { blogSection: 'blog1', }
    switch (data.blogSection) {
      case 'blog1': return <Blog1 blogs={blog} />;
      case 'blog2': return <Blog2 blogs={blog} />;
      case 'blog3': return <Blog3 blogs={blog} />;
      default: return null;
    }
  }
  return (
      <Suspense fallback={<LoadingPage />}>
          {renderBlogSection()}
      </Suspense>
  )
}

export default BlogDetails