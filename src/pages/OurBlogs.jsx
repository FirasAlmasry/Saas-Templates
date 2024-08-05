import React, { useState } from 'react';
import Header from '../components/global/headers/Header';
import WrapperSection from '../components/global/WrapperSection';
import GridItems from '../components/global/GridItems';
import { Grid } from '@mui/material';
import Card from '../components/blogs/cards';
import { useBlogs } from '../hooks/useBlogs';
import { useBlogsByCat } from '../hooks/useBlogsByCat';
import { useBlogsByTag } from '../hooks/useBlogsByTag';
import LoadingPage from '../components/global/LoadingPage';
import CustomPagination from '../components/global/CustomPagination';
import { useLocation } from 'react-router-dom';
import { useNameSection } from '../hooks/useNameSection';

const OurBlogs = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const searchResults = location.state?.results;
  const catSlug = location.state?.catSlug;
  const tagSlug = location.state?.tagSlug;
  const { isLoading: isLoadingNameSection, nameSection } = useNameSection('our-blogs');

  const { sections } = nameSection?.data || {};

  const Blogs = {
    blogSection: sections?.find(section => section.name.includes('Blogs'))?.component?.[0]?.name,
  };

  // Fetch data based on category, tag, or default to all blogs
  const { blogs, isLoading: blogsLoading } = useBlogs(page);
  const { blogs: catBlogs, isLoading: catBlogsLoading } = useBlogsByCat(catSlug);
  const { blogs: tagBlogs, isLoading: tagBlogsLoading } = useBlogsByTag(tagSlug);

  // Determine the loading state
  const isLoading = blogsLoading || catBlogsLoading || tagBlogsLoading;

  // Determine the data to display
  const dataToDisplay = searchResults?.data
    || (tagSlug ? tagBlogs?.data : (catSlug ? catBlogs?.data : blogs?.data));
  const title = searchResults?.blog_title
    || (tagSlug ? tagBlogs?.blog_title : (catSlug ? catBlogs?.blog_title : blogs?.blog_title));
  const coverImage = searchResults?.blog_cover
    || (tagSlug ? tagBlogs?.blog_cover : (catSlug ? catBlogs?.blog_cover : blogs?.blog_cover));
  const pageCount = searchResults?.meta?.last_page
    || (tagSlug ? tagBlogs?.meta?.last_page : (catSlug ? catBlogs?.meta?.last_page : blogs?.meta?.last_page));

  if (isLoading || isLoadingNameSection) return <LoadingPage />;

  return (
    <>
      <Header page_name={blogs?.blog_title} cover={coverImage} />
      <WrapperSection title={title}>
        {dataToDisplay &&
          <GridItems data={dataToDisplay} render={(blog) => (
            <Grid item md={4} xs={12} key={blog.id}>
              <Card nameSection={Blogs} blog={blog} />
            </Grid>
          )} />
        }
        <CustomPagination
          setCurrentPage={setPage}
          count={pageCount}
          currentPage={page}
        />
      </WrapperSection>
    </>
  );
}

export default OurBlogs;
