import React from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import i18next from 'i18next';
import { useTheme } from '@mui/material/styles';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
export function BasicSelect() {
    const theme = useTheme();

    const { i18n } = useTranslation();
    let lng = i18next.language;

    const toggleLanguage = () => {
        const otherLng = lng === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(otherLng);
    };


    return (
        <Button onClick={toggleLanguage} sx={{ border: `1px solid ${theme.palette.nav.link}`, backgroundColor: 'transparent' }} >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'row-reverse' }} >
                <Typography color={'nav.link'} fontWeight={'bold'} >{lng === 'en' ? 'العربية' : 'English'}</Typography>
                <NearMeOutlinedIcon sx={{ fill: theme.palette.secondary.main }} />
            </Box>
        </Button>
    );
}