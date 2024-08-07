import { Box, Typography, useTheme } from '@mui/material';
import i18next from 'i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data, N_P, disable }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { title, slug } = data;
    let lng = i18next.language
    const AlternativeTitle = lng === 'en' ? 'There are no other articles' : 'لا توجد مقالات أخرى'
    return (
        <>
            <Box sx={{
                display: 'flex',
                gap: 1,
                flexDirection: 'column',
                borderRadius: '8px',
                p: 2,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                width: '100%',
                cursor: disable ? 'pointer' : 'not-allowed',
                opacity: disable ? 1 : 0.6,
            }}
                onClick={() => disable && navigate(`/blog/${slug}`)} >
                <Typography
                    variant={'h6'}
                    color={'secondary.text'}
                    sx={{ ':hover': disable ? { color: theme.palette.primary.main } : {}, cursor: disable ? 'pointer' : 'not-allowed' }}>
                    {N_P}
                </Typography>
                <Typography variant={'body1'} color={'primary.main'} sx={{ ':hover': disable ? { color: theme.palette.secondary.main } : {}, cursor: disable ? 'pointer' : 'not-allowed' }}>
                    {disable ? title : AlternativeTitle }
                </Typography>
            </Box>
        </>
    );
}

export default Card;
