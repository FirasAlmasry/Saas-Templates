// utils/importComponent.js

import { lazy } from 'react';

const FallbackComponent = () => (
    <div>Component not found</div>
);

const importComponent = (componentPath) => {
    try {
        return lazy(() => import(`../components${componentPath}`));
    } catch (error) {
        console.error(`Component ${componentPath} not found.`, error);
        return FallbackComponent;
    }
};

export default importComponent;
