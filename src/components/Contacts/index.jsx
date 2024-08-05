import React, { Suspense } from 'react'
import LoadingPage from '../global/LoadingPage'
import importComponent from '../../utils/importComponent'
import { useNameSection } from '../../hooks/useNameSection';

const Contact = ({ data, titles }) => {

    // const contact = { contactSection: 'Contact3', }
    const { isLoading: isLoadingNameSection, nameSection } = useNameSection('contact-us');

    // التحقق من أن البيانات متوفرة قبل محاولة الوصول إلى `sections`
    const { sections } = nameSection?.data || {};
    if (isLoadingNameSection) return <LoadingPage />
    const contact = {
        contactSection: sections?.find(section => section.name.includes('Details'))?.component?.[0]?.name,
    };

    const Component = importComponent(`/Contacts/${contact.contactSection}/${contact.contactSection}`);

    return (
        <Suspense fallback={<LoadingPage />}>
            <Component data={data} titles={titles}/>
            <iframe src={data?.map}
            width="100%" height="600" 
            title={'test'} 
            style={{ border: 0, marginTop: '16px' }} 
            allowFullScreen="" 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Suspense>
    )
}

export default Contact