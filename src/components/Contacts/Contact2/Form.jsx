import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import './form.css'
import FormInput from './FormInput';
import Btn from './../../global/Buttons/Btn';
import { useTheme } from '@mui/material/styles';
import { useSendMessage } from '../../../hooks/useSendMessage';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next'

const Form = ({title}) => {
    const theme = useTheme();
    const form = useRef();
    const { message, isLoading, error } = useSendMessage();
    const { t } = useTranslation()

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        // تحضير البيانات من النموذج
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            notes: formData.get('notes'),
        };

        // إرسال البيانات باستخدام useBlogSearch
        message(userData, {
            onSuccess: (data) => {
                enqueueSnackbar(data.success || 'Message sent successfully', { variant: 'success' });
                console.log("Message sent successfully:", data);
                // يمكنك إضافة رسالة تأكيد هنا
            },
            onError: (error) => {
                enqueueSnackbar('Error sending message', { variant: 'error' })
                console.log("Error sending message:", error);
                // يمكنك إضافة رسالة خطأ هنا
            },
        });

        e.target.reset(); // إعادة تعيين النموذج
    };

    return (
        <Box sx={{background:theme.palette.background.form, p:4,  borderRadius:2}} >
            <Typography sx={{ my: 1, textTransform:'capitalize' }} color={'primary.main'} fontWeight={400} variant='h5' >{title}</Typography>
            <Box component={'form'} ref={form} onSubmit={sendEmail} >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
                    <Box sx={{ width: { md: '45%', xs: '100%' }, my: 2 }}>
                        <FormInput label={t('Form.Name')} type={'name'} />
                    </Box>
                    <Box sx={{ width: { md: '45%', xs: '100%' }, my: 2 }}  >
                        <FormInput label={t('Form.Email')} type={'email'} />
                    </Box>
                    <Box sx={{ width: '100%', my: 2 }}  >
                        <FormInput label={t('Form.PhoneNumber')} type={'phone'} />
                    </Box>
                    <Box sx={{ width: { md: '100%', xs: '100%' }, }}  >
                        <FormInput label={t('Form.Message')} type={'message'} />
                    </Box>
                </Box>
                <Box mt={2}>
                    <Btn text={isLoading ? 'Sending...' : t('Form.btn')} type='submit' />
                </Box>
                {error && <Typography color="error" variant="body2">Error sending message. Please try again.</Typography>}
            </Box>
        </Box >
    )
}
export default Form
