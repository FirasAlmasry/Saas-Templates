import React from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTranslation } from 'react-i18next';
import FullscreenIcon from '@mui/icons-material/Fullscreen'; 

const ScrollToTopButton = () => {
    const { i18n } = useTranslation();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <>
            <Fab
                color="primary"
                onClick={handleScrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: i18n.dir() === 'ltr' ? 16 : 'auto',
                    left: i18n.dir() === 'rtl' ? 16 : 'auto',
                    zIndex: 1000,
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '8px',
                }}
            >
                <ArrowUpwardIcon />
            </Fab>

            <Fab
                color="primary"
                onClick={handleFullScreen}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: i18n.dir() === 'rtl' ? 16 : 'auto',
                    left: i18n.dir() === 'ltr' ? 16 : 'auto',
                    zIndex: 1000,
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '8px',
                }}
            >
                <FullscreenIcon />
            </Fab>

        </>
    );
};

export default ScrollToTopButton;
