import React from 'react'
import WrapperSection from '../global/WrapperSection'
import { Grid } from '@mui/material';
import projectImage from './../../assets/projects/project1.png'
import Description from '../global/Description';
import { projects } from '../../constants/projects'
import GridItems from '../global/GridItems'
import Card from './cards';
import Image from '../global/images';


const DetailsPage = () => {

    const Project = { descriptionSection: 'Image3', projectSection: 'Card2', }

    return (
        <>
            <WrapperSection title={'Project'} >
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <Image nameSection={Project} image={projectImage} />
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
            <WrapperSection title={`Other projects`} >
                {projects && <GridItems data={projects} slices={3}
                    render={(project) => <Grid item md={4} xs={12} key={project?.id} ><Card nameSection={Project} project={project}/></Grid>} />}
            </WrapperSection>
        </>
    )
}

export default DetailsPage