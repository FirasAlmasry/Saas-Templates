import React from 'react'
import WrapperSection from '../../global/WrapperSection';
import { Grid } from '@mui/material';
import Form from './Form';
import Details from './Details';

const Contact2 = () => {
    return (
        <>
            <WrapperSection title={`Contact Us`} >
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}><Form /></Grid>
                    <Grid item md={4} xs={12}><Details /></Grid>
                </Grid>
            </WrapperSection>
        </>
    )
}

export default Contact2