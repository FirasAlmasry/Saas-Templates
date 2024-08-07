import { Badge, Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import i18next from 'i18next';

const Categories = ({ cat }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    let lng = i18next.language
    const handleCategoryClick = (catSlug) => {
        navigate('/blogs', { state: { catSlug } });
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', py: 2, border: '1px solid #ddd', borderRadius: '16px' }} >
                <Typography color={'primary.main'} sx={{ p: 2, pt: 0, borderBottom: '1px solid #dddd', width: '100%' }} >{lng === 'en' ?'Categories': 'الأقسام'}</Typography>
                {cat?.map(category => <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2, cursor: 'pointer' }}>
                    <Typography color={'primary.main'} sx={{ width: '100%' }} onClick={() => handleCategoryClick(category?.slug)} >{category?.name}</Typography>
                    <Badge sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.text,
                        }
                    }} badgeContent={category?.blogs_count} showZero>
                    </Badge>
                </Box>)}
            </Box>
        </>
    )
}

export default Categories