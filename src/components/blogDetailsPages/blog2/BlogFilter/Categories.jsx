import { Badge, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import i18next from 'i18next';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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
                <Box>
                    <Typography color={'primary.main'} sx={{ px: 2, pt: 0, width: '100%' }} >{lng === 'en' ? 'Categories' : 'الأقسام'}</Typography>
                    <Divider variant="middle" sx={{ borderWidth: '2px', borderColor: theme.palette.primary.main }} />
                </Box>
                {cat?.map(category => <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', p: 1, borderBottom: '1px solid #dddd', px: 2, cursor: 'pointer', gap: 1 }} className='box'>
                    <KeyboardDoubleArrowRightIcon /> 
                    <Typography color={'secondary.text'} 
                        sx={{
                            width: '100%',
                            transition: '0.5s',
                            ':hover': { color: theme.palette.primary.main } }} 
                    onClick={() => handleCategoryClick(category?.slug)} >
                        {category?.name}
                    </Typography>
                    <Badge color='primary.main' sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: theme.palette.background.section,
                            mr: lng === 'ar' ? -2 : 2,
                        }
                    }} badgeContent={category?.blogs_count} showZero>
                    </Badge>
                </Box>)}
            </Box>
        </>
    )
}

export default Categories