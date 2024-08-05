import React, { Suspense } from 'react';
import LoadingPage from '../LoadingPage';
import importComponent from '../../../utils/importComponent';

const Header = ({ page_name, cover }) => {

    const nameSection = { headerSection: 'Header1', }

    const Component = importComponent(`/global/headers/${nameSection.headerSection}`);
    return (
        <Suspense fallback={<LoadingPage />}>
            <Component page_name={page_name} cover={cover} />
        </Suspense>
    );
};

export default Header;
