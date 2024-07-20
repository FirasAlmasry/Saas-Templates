import React from 'react'
import WrapperSection from '../global/WrapperSection'
import { Grid } from '@mui/material';
import GridItems from '../global/GridItems'
import serviceImage from './../../assets/services/service1.png'
import Description from '../global/Description';
import { services } from '../../constants/services'
import Card from './cards';
import Image from '../global/images';


const DetailsPage = () => {

    return (
        <>
            <WrapperSection title={'Service'} >
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <Image image={serviceImage}/>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Description
                            title={`We have 25+ years of experience.`}
                            description={`Now you can start trading Bitcoin, Ethereum and many cryptocurrencies fast, easily and safely from where ever you are. With great margin trading leverage and short sell options available with quick deposit & withdrawal capability, you can start trading with us in seconds.
                    Cryptocurrencies have become established investment commodities among major financial institutions, and have even been adopted by countries such as Australia and Japan.
                    Quick Deposits Withdrawals`} />
                    </Grid>
                </Grid>
            </WrapperSection>
            <WrapperSection title={`Other Services`} >
                {services && <GridItems data={services} slices={3}
                    render={(service) => <Grid item md={4} xs={12} key={service?.id} ><Card service={service}/></Grid>} />}
            </WrapperSection>
        </>
    )
}

export default DetailsPage