import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import { Grid } from '@mui/material'
import Image from './../Image'
import Description from '../../global/Description';

const Missions = ({data}) => {
  const { mission_title, mission_description, mission_image } = data
  return (
    <>
      <WrapperSection>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item md={7} xs={12}>
            <Description
              title={mission_title}
              description={mission_description}/>
          </Grid>
          <Grid item md={5} xs={12}>
            <Image img={mission_image} />
          </Grid>
        </Grid>
      </WrapperSection>
    </>
  )
}

export default Missions