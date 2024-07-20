import React, { lazy, Suspense } from 'react'
import LoadingPage from '../../../global/LoadingPage';

const Card1 = lazy(() => import('./Card1'));
const Card2 = lazy(() => import('./Card2'));
const Card3 = lazy(() => import('./Card3'));

const Card = ({ goal }) => {
    
    const renderGoalsSection = () => {
        const data = { goalSection: 'goal1', }
        switch (data.goalSection) {
            case 'goal1': return <Card1 goals={goal} />;
            case 'goal2': return <Card2 goals={goal} />;
            case 'goal3': return <Card3 goals={goal} />;
            default: return null;
        }
    }

  return (
      <Suspense fallback={<LoadingPage />}>
          {renderGoalsSection()}
      </Suspense>
  )
}

export default Card