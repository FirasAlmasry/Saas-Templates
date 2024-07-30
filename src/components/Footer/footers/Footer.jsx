import React, { lazy, Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';

const Footer1 = lazy(() => import('./Footer1'));
const Footer2 = lazy(() => import('./Footer2'));
const Footer3 = lazy(() => import('./Footer3'));


const Footer = () => {
    const renderFooter = () => {
        const data = { footerSection: 'footer3', }
        switch (data.footerSection) {
            case 'footer1':
                return <Footer1 />;
            case 'footer2':
                return <Footer2 />;
            case 'footer3':
                return <Footer3 />;
            default:
                return null;
        }
    };
  return (
    <Suspense fallback={<LoadingPage/>}>
            {renderFooter()}
        </Suspense>
  )
}

export default Footer