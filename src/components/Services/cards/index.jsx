import React, { lazy, Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';


const Card1 = lazy(() => import('./Card1'));
const Card2 = lazy(() => import('./Card2'));
const Card3 = lazy(() => import('./Card3'));

const Card = ({ service }) => {

    const renderServiceSection = () => {
        const data = { serviceSection: 'service1', }
        switch (data.serviceSection) {
            case 'service1': return <Card1 services={service} />;
            case 'service2': return <Card2 services={service} />;
            case 'service3': return <Card3 services={service} />;
            default: return null;
        }
    }

    return (
        <Suspense fallback={<LoadingPage />}>
            {renderServiceSection()}
        </Suspense>
    )
}

export default Card