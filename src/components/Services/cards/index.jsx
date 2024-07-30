import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
import importComponent from '../../../utils/importComponent';

const Card = ({ service, nameSection }) => {

    const Component = importComponent(`/Services/cards/${nameSection.serviceSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component services={service} />
        </Suspense>
    )
}

export default Card