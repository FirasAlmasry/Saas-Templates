import React from 'react';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Button, CardMedia, Typography } from '@mui/material';
import i18next from 'i18next';
import translate from './../../../assets/translate/Vector.png'
import { useTheme } from '@mui/material/styles';

export function BasicSelect() {
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
                        <Typography color={'nav.link'} fontWeight={'bold'} >{lng === 'en' ? 'العربية' : 'English'}</Typography>
                        <CardMedia
                            component={'img'}
                            src={translate}
                            loading='lazy'
                            alt="green iguana"
                            sx={{ width: '20px' }}
                        />
                    </Box> 
                    </Button>
            </Box>
        </div>
    );
}