// DarkModeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from './../utils/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = theme(isDarkMode ? 'dark' : 'light');

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={currentTheme}>
        {children}
      </MuiThemeProvider>
    </DarkModeContext.Provider>
  );
};
