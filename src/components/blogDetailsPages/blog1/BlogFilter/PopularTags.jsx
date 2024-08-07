import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import i18next from 'i18next';

const PopularTags = ({tags}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    let lng = i18next.language

    const handleTagClick = (tagSlug) => {
        navigate('/blogs', { state: { tagSlug } });
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, border: '1px solid #ddd', borderRadius: '16px' }}>
                <Typography color={'primary.main'} sx={{ px: 2, width: '100%' }}>{lng === 'en' ? 'Popular Tags': 'الكلمات المفتاحية'}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', p: 1 }}>
                    {tags.map(tag => (
                        <Typography
                            key={tag.slug}
                            color={'primary.main'}
                            sx={{ backgroundColor: theme.palette.background.section, borderRadius: '8px', p: '2px 8px', cursor: 'pointer' }}
                            onClick={() => handleTagClick(tag.slug)}
                        >
                            {tag.name}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default PopularTags