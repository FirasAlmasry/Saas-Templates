import React from 'react'
import WrapperSection from '../../global/WrapperSection';
import GridItems from '../../global/GridItems';
import { goals } from '../../../constants/goals';
import { Grid } from '@mui/material';
import Card from './cards';

const Goals = ({nameSection}) => {
    
    return (
        <>
            <WrapperSection title={`Goals`} >
                {goals && <GridItems data={goals} slices={3}
                    render={(goal) => <Grid item md={4} xs={12} key={goal?.id} ><Card nameSection={nameSection} goal={goal}/></Grid>} />}
            </WrapperSection>
        </>
    )
}

export default Goals