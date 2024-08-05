import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage';
import importComponent from '../../utils/importComponent';
import { useBasicData } from '../../hooks/useBasicData';

const NavBar = () => {
    const { isLoading, basicData } = useBasicData()
    if(isLoading) return <LoadingPage />
    const nameSection = { navbarSection: 'Navbar1', }

    const Component = importComponent(`/NavBars/${nameSection.navbarSection}/${nameSection.navbarSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component data={basicData?.data} />
        </Suspense>
    )
}

export default NavBar