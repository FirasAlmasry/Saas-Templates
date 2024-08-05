import React from 'react'
import WrapperSection from '../../global/WrapperSection';
import GridItems from '../../global/GridItems';
import { goals } from '../../../constants/goals';
import { Grid } from '@mui/material';
import Card from './cards';
import { useHome } from '../../../hooks/useHome';
import LoadingPage from '../../global/LoadingPage';

const Goals = ({nameSection}) => {
    const { home, isLoading } = useHome()
    if (isLoading) return <LoadingPage />
    const { data } = home
    return (
        <>
            <WrapperSection title={data?.goalTitle} >
                {goals && <GridItems data={data?.goals} slices={3}
                    render={(goal) => <Grid item md={4} xs={12} key={goal?.id} ><Card nameSection={nameSection} goal={goal}/></Grid>} />}
            </WrapperSection>
        </>
    )
}

export default Goals