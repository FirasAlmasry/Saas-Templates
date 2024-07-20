import React from 'react'
import WrapperSection from '../../global/WrapperSection'
import { Grid } from '@mui/material'
import Image from './../Image'
import aboutImage from './../../../assets/about/about.png';
import Description from '../../global/Description';

const Visions = () => {
  return (
    <>
      <WrapperSection>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Image img={aboutImage} />
          </Grid>
          <Grid item md={7} xs={12}>
            <Description
              title={`Our Vision`}
              description={`Our aspiration is to become a sustainably growing and protable MEP & Low.
 CurrentEngineering & Contracting service provider through building ective .
and ecient operations in UAE and to consolidate Loewe Electromechanical .
and ecient operations in UAE and to consolidate Loewe Electromechanical .
Works as recognized quality centric brand in all our eldsof activities `} />
          </Grid>
        </Grid>
      </WrapperSection>
    </>
  )
}

export default Visions