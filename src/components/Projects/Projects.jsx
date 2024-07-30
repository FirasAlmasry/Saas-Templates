import React from 'react'
import WrapperSection from '../global/WrapperSection'
import GridItems from '../global/GridItems'
import { Grid } from '@mui/material'
import { projects } from '../../constants/projects'
import Btn from '../global/Buttons/Btn'
import Card from './cards'


const Projects = ({ nameSection }) => {

    return (
        <>
            <WrapperSection title={`Our Projects`} >
                {projects && <GridItems data={projects} slices={3} 
                    render={(project) => <Grid item md={4} xs={12} key={project?.id} ><Card nameSection={nameSection} project={project}/></Grid>} />}
                <Btn path={'projects'} />
            </WrapperSection>
        </>
    )
}

export default Projects