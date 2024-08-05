import { Badge, Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ cat }) => {
    const navigate = useNavigate();

    const handleCategoryClick = (catSlug) => {
        navigate('/blogs', { state: { catSlug } });
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, border: '1px solid #ddd', borderRadius: '16px' }} >
                <Typography color={'secondary.main'} sx={{ p: 2, pt: 0, borderBottom: '1px solid #dddd', width: '100%' }} >
                    Categories
                </Typography>
                {cat?.map((catItem) => (
                    <Box
                        key={catItem?.slug}
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2, cursor: 'pointer' }}
                        onClick={() => handleCategoryClick(catItem?.slug)}
                    >
                        <Typography color={'secondary.main'} sx={{ width: '50%' }} >
                            {catItem?.name}
                        </Typography>
                        <Badge badgeContent={catItem?.blogs_count} color="primary" />
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default Categories;
