import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';

const PopularTags = ({ tags }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleTagClick = (tagSlug) => {
        navigate('/blogs', { state: { tagSlug } });
    };
    let lng = i18next.language

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, borderRadius: '16px' }} >
                <Box>
                    <Typography color={'secondary.text'} sx={{ px: 2, width: '100%' }}  >{lng === 'en' ? `Popular ` : 'الكلمات '}
                        <span style={{ color: theme.palette.primary.main }} >{lng === 'en' ? `Tags` : 'المفتاحية'}</span>
                    </Typography>
                    <Divider variant="middle" sx={{borderWidth:'2px', borderColor:theme.palette.primary.main}} />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', p: 1 }} >
                    {tags.map(tag => <Typography
                        key={tag.slug}
                        color={'primary.main'}
                        onClick={() => handleTagClick(tag.slug)}
                        sx={{ backgroundColor: theme.palette.background.section, 
                            p: '2px 8px', 
                            cursor: 'pointer',
                            transition: '0.5s',
                            ':hover': { backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.text,
                            }}}
                        >
                        {tag.name}
                    </Typography>)}
                </Box>
            </Box>
        </>
    )
}

export default PopularTags