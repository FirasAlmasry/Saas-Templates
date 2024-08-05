import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
import importComponent from '../../../utils/importComponent';
import { useBasicData } from '../../../hooks/useBasicData';

const Footer = () => {
    const {isLoading, basicData} = useBasicData()

    const data = { footerSection: 'Footer1', }

    const Component = importComponent(`/Footer/footers/${data.footerSection}`);

    if (isLoading) return <LoadingPage />

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component data={basicData?.data} />
        </Suspense>
    )
}

export default Footer