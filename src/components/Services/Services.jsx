import React from 'react'
import WrapperSection from '../global/WrapperSection'
import GridItems from '../global/GridItems'

import { Grid } from '@mui/material'
import { services } from '../../constants/services'
import Btn from '../global/Buttons/Btn'
import Card from './cards'

const Services = () => {

    

    return (
        <>
            <WrapperSection title={`Services`} >
                {services && <GridItems data={services} slices={3} 
                    render={(service) => <Grid item md={4} xs={12} key={service?.id} >{<Card service={service}/>}</Grid>} />}
                <Btn path={'services'} />
            </WrapperSection>
        </>
    )
}

export default Services