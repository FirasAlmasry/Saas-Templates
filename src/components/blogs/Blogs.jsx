import React from 'react';
import WrapperSection from '../global/WrapperSection';
import GridItems from '../global/GridItems';
import { Grid } from '@mui/material';
import { blogs } from '../../constants/blogs';
import Btn from '../global/Buttons/Btn';
import Card from './cards';
import { useHome } from '../../hooks/useHome';
import LoadingPage from '../global/LoadingPage';


const Blogs = ({ nameSection }) => {
    const { home, isLoading } = useHome()
    if (isLoading) return <LoadingPage />
    const { data } = home
    return (
        <WrapperSection title={data?.blogTitle}>
            {blogs &&
                <GridItems data={data?.blogs} slices={4} render={(blog) => (
                    <Grid item md={4} xs={12} key={blog.id}>
                        <Card nameSection={nameSection} blog={blog} />
                    </Grid>
                )} />
            }
            <Btn path={'blogs'} />
        </WrapperSection>
    );
};

export default Blogs;
