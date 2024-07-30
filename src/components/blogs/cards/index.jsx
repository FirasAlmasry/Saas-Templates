import React, { Suspense } from 'react'
import LoadingPage from '../../global/LoadingPage';
import importComponent from '../../../utils/importComponent';

const Card = ({ blog, nameSection }) => {

    const Component = importComponent(`/blogs/cards/${nameSection.blogSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component blogs={blog} />
        </Suspense>
    )
}

export default Card