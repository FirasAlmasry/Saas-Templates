import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage'
import importComponent from '../../../utils/importComponent';

const Card = ({ project, nameSection }) => {

    const Component = importComponent(`/Projects/cards/${nameSection.projectSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component projects={project} />
        </Suspense>
    )
}

export default Card