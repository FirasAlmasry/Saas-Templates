import React, { useEffect } from 'react';
import Header from '../components/global/headers/Header';
import BlogDetails from '../components/blogDetailsPages';
import { useBlog } from '../hooks/useBlog';
import LoadingPage from '../components/global/LoadingPage';
import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {
  const { blog, isLoading } = useBlog();
  const navigate = useNavigate();
  const { blogSlug } = useParams();

  useEffect(() => {
    if (blog?.data?.slug && blogSlug !== blog?.data?.slug) {
      navigate(`/blog/${blog.data?.slug}`, { replace: true });
    }
  }, [blog, blogSlug, navigate]);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Header page_name={blog?.blog_title} cover={blog?.blog_cover} />
      <BlogDetails data={blog} />
    </>
  );
};

export default Blog;
