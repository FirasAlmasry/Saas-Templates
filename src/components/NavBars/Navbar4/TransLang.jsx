import React from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Button, CardMedia, Typography } from '@mui/material';
import i18next from 'i18next';
import arIcon from './../../../assets/translate/united-arab-emirates.png'
import enIcon from './../../../assets/translate/united-kingdom.png'
import { useTheme } from '@mui/material/styles';
export default function BasicSelect() {
    const theme = useTheme();

    const { i18n } = useTranslation();
    let lng = i18next.language;

    const toggleLanguage = () => {
        const otherLng = lng === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(otherLng);
    };


    return (
        <div>
            <Box>
                <Button onClick={toggleLanguage} sx={{ border: `1px solid ${theme.palette.nav.link}`, backgroundColor: 'transparent' }} >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'row-reverse' }} >
                        <CardMedia
                            component={'img'}
                            src={lng === 'en' ? arIcon : enIcon}
                            sx={{ width: '20px' }}
                        />
                        <Typography color={'nav.link'} fontWeight={'bold'} >{lng === 'en' ? 'العربية' : 'English'}</Typography>
                    </Box>
                </Button>
            </Box>
        </div>
    );
}