import React, { Suspense } from 'react'
import LoadingPage from '../LoadingPage';
import importComponent from '../../../utils/importComponent';

const Image = ({ nameSection, image }) => {

    const Component = importComponent(`/global/images/${nameSection.descriptionSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component img={image}/>
        </Suspense>
    )
}

export default Image