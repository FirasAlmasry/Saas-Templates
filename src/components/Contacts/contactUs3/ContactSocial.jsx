import { Box, Typography } from '@mui/material'
import React from 'react'

const ContactSocial = ({ text, children }) => {
  return (
    <>
      <Box color={'secondary.text'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {children}
        <Typography variant='body2' color={'secondary.text'} >{text}</Typography>
      </Box>
    </>
  )
}

export default ContactSocial