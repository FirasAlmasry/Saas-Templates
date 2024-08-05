import React from 'react'
import Header from '../components/global/headers/Header'
import Contact from '../components/Contacts'
import { useContact } from '../hooks/useContact'
import LoadingPage from '../components/global/LoadingPage'

const ContactUs = () => {
  const { contacts: contactData, isLoading } = useContact()
  if (isLoading) return <LoadingPage />
  const { data } = contactData
  return (
    <>
      <Header cover={contactData?.contactCover} page_name={contactData?.contactTitle} />
      <Contact data={data} titles={contactData?.mainPage} />
    </>
  )
}

export default ContactUs