import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
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
                <Box sx={{
                    width: '100%',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    position: 'relative',
                    ':after': {
                        content: "''",
                        width: 0,
                        height: 0,
                        borderLeft: '12px solid transparent',
                        borderRight: '12px solid transparent',
                        borderTop: `12px solid ${theme.palette.primary.main}`,
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        m: 'auto',
                        right: 0,
                        ml: '-12px'
                    }
                }}>
                    <Typography color={'primary.main'} sx={{ px: 2, width: '100%', textAlign: 'center', mb: 1 }}  >
                        {lng === 'en' ? `Popular ` : 'الكلمات '}
                        <span style={{ color: theme.palette.primary.main }} >{lng === 'en' ? `Tags` : 'المفتاحية'}</span>
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1, width: '100%' }} >
                    {tags.map(tag => <Box sx={{
                        display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
                        width: '100%', p: 1, borderBottom: '1px solid #dddd',
                        cursor: 'pointer',
                        transition: '0.5s',
                        color: theme.palette.secondary.text,
                        ':hover': {
                            [lng === 'en' ? 'pl' : 'pr']: 3, color: theme.palette.primary.main }
                    }}>
                        {lng === 'en' ?
                            <KeyboardArrowRightIcon sx={{ fill: theme.palette.primary.main }} /> :
                            <KeyboardArrowLeftIcon sx={{ fill: theme.palette.primary.main }} />
                        }
                        <Typography key={tag.slug}
                            onClick={() => handleTagClick(tag.slug)}
                            sx={{ borderRadius: '8px', p: '2px', cursor: 'pointer', color: 'inherit' }} >
                            {tag.name}
                        </Typography>
                    </Box>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default PopularTags