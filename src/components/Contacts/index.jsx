import React, { lazy, Suspense } from 'react'
import LoadingPage from '../global/LoadingPage'
const Contact1 = lazy(() => import('./contactUs1/Contact1'))
const Contact2 = lazy(() => import('./contactUs2/Contact2'))
const Contact3 = lazy(() => import('./contactUs3/Contact3'))


const Contact = () => {

    const renderContactSection = () => {
        const data = { contactSection: 'contact1', }
        switch (data.contactSection) {
            case 'contact1': return <Contact1 />;
            case 'contact2': return <Contact2 />;
            case 'contact3': return <Contact3 />;
            default: return null;
        }
    }    
  return (
      <Suspense fallback={<LoadingPage />}>
          {renderContactSection()}
      </Suspense>
  )
}

export default Contact