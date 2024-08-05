import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const PopularTags = ({ tags }) => {
    const theme = useTheme();
const navigate = useNavigate();

    const handleTagClick = (tagSlug) => {
        navigate('/blogs', { state: { tagSlug } });
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, border: '1px solid #ddd', borderRadius: '16px' }} >
                <Typography color={'secondary.main'} sx={{ px: 2, width: '100%' }}  >{`Popular `}
                    <span style={{ color: theme.palette.secondary.text }} >{`Tags`}</span>
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', p: 1 }} >
                    {tags.map(tag => <Typography key={tag.slug}
                        color={'primary.main'}
                        onClick={() => handleTagClick(tag.slug)} 
                        sx={{ backgroundColor: theme.palette.background.section, borderRadius: '8px', p: '2px 8px' }} >
                        {tag.name}
                    </Typography>)}
                </Box>
            </Box>
        </>
    )
}

export default PopularTags