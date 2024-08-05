import React from 'react'
import WrapperSection from '../../../global/WrapperSection'
import { Grid } from '@mui/material'
import Image from './Image' 
import Description from '../../../global/Description';
import i18next from 'i18next';

const Intro = ({data}) => {
    const lng = i18next.language
    const btnText = lng === 'en' ? 'See More' : 'المزيد'
    const { main_title, description, about_section_image, btn_text = btnText, btn_link } = data;

    return (
        <>
            <WrapperSection>
                <Grid container spacing={2} alignItems={'center'} >
                    <Grid item md={6} xs={12}>
                        <Image img={about_section_image} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Description
                            title={main_title}
                            description={description}
                            text={btn_text}
                            path={`/${btn_link}` || '/about'}
                        />
                    </Grid>
                </Grid>
            </WrapperSection>
        </>
    )
}

export default Intro