import { Box, Typography } from '@mui/material'
import React from 'react'
import { Pages } from '../../constants'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import { useTheme } from '@mui/material/styles';

const Navigation = () => {
    let lng = i18next.language
      const theme = useTheme();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant='h6' color={'secondary.main'} mb={1} mt={2}>{lng === 'en' ?'Navigation':'الصفحات'}</Typography>
            <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
                {Pages?.map((page, i) => (
                    <Link
                        key={i}
                        to={page.path}
                        style={{ textTransform: 'capitalize', color: theme.palette.footer.link, textDecoration: 'none' }}
                        onClick={() => scrollToTop()}>
                        {lng === 'ar' ? page.name : page.name_en}
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Navigation