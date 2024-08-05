import React from 'react'
import WrapperSection from '../../global/WrapperSection';
import { Grid } from '@mui/material';
import Form from './Form';
import Details from './Details';

const Contact2 = ({data, titles}) => {

    const main_title = titles?.find(item => item.key === 'contact_main_title')?.value || '';
    const form_title = titles?.find(item => item.key === 'contact_small_title')?.value || '';
    return (
        <>
            <WrapperSection title={main_title} >
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}><Form title={form_title}/></Grid>
                    <Grid item md={4} xs={12}><Details data={data}/></Grid>
                </Grid>
            </WrapperSection>
        </>
    )
}

export default Contact2