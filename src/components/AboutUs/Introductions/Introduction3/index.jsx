import React from 'react'
import WrapperSection from '../../../global/WrapperSection'
import { Grid } from '@mui/material'
import Image from './Image'
import aboutImage from './../../../../assets/about/about.png';
import Description from '../../../global/Description';

const Intro = () => {
  return (
    <>
      <WrapperSection>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Image img={aboutImage} />
          </Grid>
          <Grid item md={7} xs={12}>
            <Description
              title={`We have 25+ years of experience.`}
              description={`Now you can start trading Bitcoin, Ethereum and many cryptocurrencies fast, easily and safely from where ever you are. With great margin trading leverage and short sell options available with quick deposit & withdrawal capability, you can start trading with us in seconds.
                    Cryptocurrencies have become established investment commodities among major financial institutions, and have even been adopted by countries such as Australia and Japan.
                    Quick Deposits Withdrawals`}/>
          </Grid>
        </Grid>
      </WrapperSection>
    </>
  )
}

export default Intro