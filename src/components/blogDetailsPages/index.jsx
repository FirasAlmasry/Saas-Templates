import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage'
import importComponent from '../../utils/importComponent';
import { useNameSection } from '../../hooks/useNameSection';


const BlogDetails = ({ data }) => {

  const { isLoading: isLoadingNameSection, nameSection } = useNameSection('sengle-blog');
  if (isLoadingNameSection) return <LoadingPage />
  const { sections } = nameSection?.data || {};

  const Blog = {
    blogSection: sections?.find(section => section.name.includes('Details'))?.component?.[0]?.name,
  };

  const Component = importComponent(`/blogDetailsPages/${Blog.blogSection}`);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Component data={data}/>
    </Suspense>
  )
}

export default BlogDetails