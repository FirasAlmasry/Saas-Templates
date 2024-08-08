import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage';
import importComponent from '../../utils/importComponent';
import { useBasicData } from '../../hooks/useBasicData';
import { useNameSection } from '../../hooks/useNameSection';

const NavBar = () => {
    // const nameSection = { navbarSection: 'Navbar1', }
    const { isLoading: isLoadingNameSection, nameSection } = useNameSection('navbar');

    const { sections } = nameSection?.data || {};

    const navbar = {
        navbarSection: sections?.find(section => section.name.includes('navbar'))?.component?.[0]?.name,
    };
    const { isLoading, basicData } = useBasicData()
    if (isLoading || isLoadingNameSection) return <LoadingPage />

    const Component = importComponent(`/NavBars/${navbar.navbarSection}/${navbar.navbarSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component data={basicData?.data} />
        </Suspense>
    )
}

export default NavBar