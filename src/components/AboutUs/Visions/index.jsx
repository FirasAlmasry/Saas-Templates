import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import { Grid } from '@mui/material'
import Image from './../Image'
import Description from '../../global/Description';

const Visions = ({data}) => {
  const { vision_title, vision_description, vision_image } = data
  return (
    <>
      <WrapperSection>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item md={5} xs={12}>
            <Image img={vision_image} />
          </Grid>
          <Grid item md={7} xs={12}>
            <Description
              title={vision_title}
              description={vision_description} />
          </Grid>
        </Grid>
      </WrapperSection>
    </>
  )
}

export default Visions