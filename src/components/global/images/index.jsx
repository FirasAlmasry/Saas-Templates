import React, { lazy, Suspense } from 'react'
import LoadingPage from '../LoadingPage';

const Image1 = lazy(() => import('./Image1'));
const Image2 = lazy(() => import('./Image2'));
const Image3 = lazy(() => import('./Image3'));

const Image = ({ image }) => {

    const renderDescriptionSection = () => {
        const data = { descriptionSection: 'description1' };
        switch (data.descriptionSection) {
            case 'description1': return <Image1 img={image} />;
            case 'description2': return <Image2 img={image} />;
            case 'description3': return <Image3 img={image} />;
            default: return null;
        }
    };


    return (
        <Suspense fallback={<LoadingPage />}>
            {renderDescriptionSection()}
        </Suspense>
    )
}

export default Image