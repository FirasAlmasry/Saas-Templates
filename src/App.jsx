import './App.css';
import React, { useEffect, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
// import theme from './utils/theme';
import RoutesPath from './routes';
import { DarkModeProvider } from "./context/DarkModeContext";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

const languages = [
  {
    code: 'ar',
    name: 'Ar',
    country_code: 'sa',
    dir: 'rtl'
  },
  {
    code: 'en',
    name: 'En',
    country_code: 'gb',
    dir: 'ltr'
  }
]

function App() {
  const currentLanguageCode = Cookies.get('i18next') || 'ar';
  const currentLanguage = useMemo(() => languages.find(l => l.code === currentLanguageCode), [currentLanguageCode]);
  const { t } = useTranslation();

  useEffect(() => {
    document.dir = currentLanguage.dir || 'rtl';
    document.getElementsByTagName('html')[0].setAttribute('lang', currentLanguage.code || 'ar');
  }, [currentLanguage, t]);
  return (
  <>
      
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} buttonPosition='top-right' />
          <CssBaseline />
          <HelmetProvider>
            <BrowserRouter>
              <RoutesPath />
            </BrowserRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </DarkModeProvider>
  </>
  );
}

export default App;
