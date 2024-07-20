import React, { lazy, Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage'

const Card1 = lazy(() => import('./Card1'))
const Card2 = lazy(() => import('./Card2'))

const Card = ({ project }) => {

    const renderProjectSection = () => {
        const data = { projectSection: 'project1', }
        switch (data.projectSection) {
            case 'project1': return <Card1 projects={project} />;
            case 'project2': return <Card2 projects={project} />;
            default: return null;
        }
    }

    return (
        <Suspense fallback={<LoadingPage />}>
            {renderProjectSection()}
        </Suspense>
    )
}

export default Card