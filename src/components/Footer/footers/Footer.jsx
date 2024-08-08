import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
import importComponent from '../../../utils/importComponent';
import { useBasicData } from '../../../hooks/useBasicData';
import { useNameSection } from '../../../hooks/useNameSection';

const Footer = () => {
    const {isLoading, basicData} = useBasicData()

    const { isLoading: isLoadingNameSection, nameSection } = useNameSection('footer');

    const { sections } = nameSection?.data || {};

    const footer = {
        footerSection: sections?.find(section => section.name.includes('footer'))?.component?.[0]?.name,
    };
    const Component = importComponent(`/Footer/footers/${footer.footerSection}`);

    if (isLoading || isLoadingNameSection) return <LoadingPage />

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component data={basicData?.data} />
        </Suspense>
    )
}

export default Footer