import React, { Suspense } from 'react'
import LoadingPage from '../../../global/LoadingPage';
import importComponent from '../../../../utils/importComponent';

const Card = ({ goal, nameSection }) => {

    const Component = importComponent(`/AboutUs/Goals/cards/${nameSection.goalSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component goals={goal} />
        </Suspense>
    )
}

export default Card