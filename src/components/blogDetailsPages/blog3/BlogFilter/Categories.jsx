import { Badge, Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import i18next from 'i18next';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Categories = ({ cat }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    let lng = i18next.language

    const handleCategoryClick = (catSlug) => {
        navigate('/blogs', { state: { catSlug } });
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, borderRadius: '16px' }} >
                <Box sx={{
                    width: '100%',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    position: 'relative',
                    mb:2,
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
                    <Typography color={'primary.main'} sx={{ px: 2, width: '100%', textAlign: 'center', mb: 1 }} >
                        {lng === 'en' ? 'Categories' : 'الأقسام'}
                    </Typography>
                </Box>
                {cat?.map(category => <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2, cursor: 'pointer', gap: 1 }} className='box'>
                    {lng === 'en' ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                    <Badge color='primary.main' sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: theme.palette.background.section,
                        }
                    }} badgeContent={category?.blogs_count} showZero>
                        <Typography color={'primary.main'} sx={{ width: '100%' }} onClick={() => handleCategoryClick(category?.slug)} >{category?.name}</Typography>
                    </Badge>
                </Box>)}
            </Box>
        </>
    )
}

export default Categories