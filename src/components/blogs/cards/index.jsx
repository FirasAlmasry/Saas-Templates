import React, { lazy, Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
const Card1 = lazy(() => import('./Card1'));
const Card2 = lazy(() => import('./Card2'));
const Card3 = lazy(() => import('./Card3'));

const Card = ({ blog }) => {

    const renderBlogSection = () => {
        const data = { blogSection: 'blog1', }
        switch (data.blogSection) {
            case 'blog1': return <Card1 blogs={blog} />;
            case 'blog2': return <Card2 blogs={blog} />;
            case 'blog3': return <Card3 blogs={blog} />;
            default: return null;
        }
    }

    return (
        <Suspense fallback={<LoadingPage />}>
            {renderBlogSection()}
        </Suspense>
    )
}

export default Card