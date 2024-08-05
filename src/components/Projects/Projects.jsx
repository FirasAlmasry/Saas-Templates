import React from 'react'
import WrapperSection from '../global/WrapperSection'
import GridItems from '../global/GridItems'
import { Grid } from '@mui/material'
import { projects } from '../../constants/projects'
import Btn from '../global/Buttons/Btn'
import Card from './cards'
import { useHome } from '../../hooks/useHome'
import LoadingPage from '../global/LoadingPage'


const Projects = ({ nameSection }) => {
    const { home, isLoading } = useHome()
    if (isLoading) return <LoadingPage />
    const { data } = home
    return (
        <>
            <WrapperSection title={data?.projectTitle} >
                {projects && <GridItems data={data?.projects} slices={3} 
                    render={(project) => <Grid item md={4} xs={12} key={project?.id} ><Card nameSection={nameSection} project={project}/></Grid>} />}
                <Btn path={'/projects'} />
            </WrapperSection>
        </>
    )
}

export default Projects