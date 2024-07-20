import React, { lazy, Suspense } from 'react'
import LoadingPage from '../global/LoadingPage';

const NavBar1 = lazy(() => import('./Navbar1'));
const NavBar2 = lazy(() => import('./Navbar2'));
const NavBar3 = lazy(() => import('./Navbar3'));

const NavBar = () => {

    const renderNavbar = () => {
        const data = { navbarSection: 'navbar1', }
        switch (data.navbarSection) {
            case 'navbar1': return <NavBar1 />;
            case 'navbar2': return <NavBar2 />;
            case 'navbar3': return <NavBar3 />;
            default: return null;
        }
    };

    return (
        <Suspense fallback={<LoadingPage />}>
            {renderNavbar()}
        </Suspense>
    )
}

export default NavBar