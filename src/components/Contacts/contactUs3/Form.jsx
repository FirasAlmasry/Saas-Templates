import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './form.css'
import FormInput from './FormInput';
import Btn from './../../global/Buttons/Btn';
import theme from '../../../utils/theme';

const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service', 'template', form.current, 'user')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <Box sx={{ background: theme.palette.background.form, p: 4, borderRadius: 2 }} >
            <Typography sx={{ my: 1, textTransform: 'capitalize' }} color={'primary.main'} fontWeight={400} variant='h5' >Send A Message</Typography>
            <Box component={'form'} ref={form} onSubmit={sendEmail} >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
                    <Box sx={{ width: { md: '45%', xs: '100%' }, my: 2 }}>
                        <FormInput label={'Name'} type={'name'} />
                    </Box>
                    <Box sx={{ width: { md: '45%', xs: '100%' }, my: 2 }}  >
                        <FormInput label={'Email'} type={'email'} />
                    </Box>
                    <Box sx={{ width: '100%', my: 2 }}  >
                        <FormInput label={'Phone Number'} type={'phone'} />
                    </Box>
                    <Box sx={{ width: { md: '100%', xs: '100%' }, }}  >
                        <FormInput label={'Message'} type={'message'} />
                    </Box>
                </Box>
                <Box mt={2} >
                    <Btn text='Send Message' type='submit' />
                </Box>
            </Box>
        </Box >
    )
}
export default Form
