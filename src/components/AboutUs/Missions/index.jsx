import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import { Grid } from '@mui/material'
import Image from './../Image'
import aboutImage from './../../../assets/about/about.png';
import Description from '../../global/Description';

const Missions = () => {
  return (
    <>
      <WrapperSection>
        <Grid container spacing={2}>
          <Grid item md={7} xs={12}>
            <Description
              title={`Our Mission`}
              description={`Ard alsafa is supporting safety green buildings regulation in execution of their pertinent projects.
As most MEP systems inspiriting buildings like most active systems in the human body.they have 
As most MEP systems inspiriting buildings like most active systems in the human body.they have 
As most MEP systems inspiriting buildings like most active systems in the human body.they have 
to be strictly complied with green building regulations.
`}/>
          </Grid>
          <Grid item md={5} xs={12}>
            <Image img={aboutImage} />
          </Grid>
        </Grid>
      </WrapperSection>
    </>
  )
}

export default Missions