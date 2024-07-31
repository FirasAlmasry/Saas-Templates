import React, { Suspense, lazy } from 'react';

const Header1 = lazy(() => import('./Header1'));
const Header2 = lazy(() => import('./Header2'));
const Header3 = lazy(() => import('./Header3'));

const Header = () => {

    const data = { headerSection: 'header3', }

    const renderHeader = () => {
        switch (data.headerSection) {
            case 'header1':
                return <Header1 />;
            case 'header2':
                return <Header2 />;
            case 'header3':
                return <Header3 />;
            default:
                return null;
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {renderHeader()}
        </Suspense>
    );
};

export default Header;
