import React from 'react';
import WrapperSection from '../global/WrapperSection';
import GridItems from '../global/GridItems';
import { Grid } from '@mui/material';
import { blogs } from '../../constants/blogs';
import Btn from '../global/Buttons/Btn';
import Card from './cards';


const Blogs = () => {

   

    return (
        <WrapperSection title={`Our Blogs`}>
            {blogs &&
                <GridItems data={blogs} slices={4} render={(blog) => (
                    <Grid item md={6} xs={12} key={blog.id}>
                    <Card blog={blog}/>
                    </Grid>
                )} />
            }
            <Btn path={'blogs'} />
        </WrapperSection>
    );
};

export default Blogs;
