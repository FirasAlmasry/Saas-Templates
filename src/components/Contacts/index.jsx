import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage'
import importComponent from '../../utils/importComponent'

const Contact = () => {

    const contact = { contactSection: 'Contact1', }

    const Component = importComponent(`/Contacts/${contact.contactSection}/${contact.contactSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.81100295322!2d30.927131874540493!3d30.469790874712128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587f312c6655ef%3A0x139b504b1245cf25!2sRevamp%20Brands!5e0!3m2!1sen!2seg!4v1709737789018!5m2!1sen!2seg" 
            width="100%" height="600" 
            title={'test'} 
            style={{ border: 0, marginTop: '16px' }} 
            allowFullScreen="" 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Suspense>
    )
}

export default Contact