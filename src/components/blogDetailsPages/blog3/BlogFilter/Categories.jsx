import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Categories = ({cat}) => {
    const navigate = useNavigate();

    const handleCategoryClick = (catSlug) => {
        navigate('/blogs', { state: { catSlug } });
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py:2, border:'1px solid #ddd', borderRadius:'16px' }} >
                <Typography color={'secondary.main'} sx={{ p: 2, pt: 0, borderBottom: '1px solid #dddd', width:'100%' }} >Categories</Typography>
                {cat?.map(category => <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2, cursor:'pointer' }} >
                    <Typography  color={'primary.main'} sx={{ width: '50%' }}   onClick={() => handleCategoryClick(category?.slug)} >{category?.name}</Typography>
                    <Typography color={'primary.main'} sx={{ width: '50%' }} >{category?.blogs_count}</Typography>
                </Box>)}
            </Box>
        </>
    )
}

export default Categories