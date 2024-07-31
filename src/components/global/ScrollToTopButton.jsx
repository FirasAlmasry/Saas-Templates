import React from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTranslation } from 'react-i18next';

const ScrollToTopButton = () => {
    const { i18n } = useTranslation();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Fab
            color="primary"
            onClick={handleScrollToTop}
            sx={{
                position: 'fixed',
                bottom: 16,
                right: i18n.dir() === 'ltr' ? 16 : 'auto',
                left: i18n.dir() === 'rtl' ? 16 : 'auto',
                zIndex: 1000,
                width:'2rem',
                height:'2rem',
                borderRadius: '8px',
            }}
        >
            <ArrowUpwardIcon />
        </Fab>
    );
};

export default ScrollToTopButton;
