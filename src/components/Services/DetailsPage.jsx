import React from 'react'
import WrapperSection from '../global/WrapperSection'
import { Grid } from '@mui/material';
import GridItems from '../global/GridItems'
import Description from '../global/Description';
import Card from './cards';
import Image from '../global/images';
import { useNameSection } from '../../hooks/useNameSection';
import LoadingPage from '../global/LoadingPage';
import i18next from 'i18next';


const DetailsPage = ({data}) => {
    let lng = i18next.language

    const { isLoading: isLoadingNameSection, nameSection } = useNameSection('sengle-service');

    const { sections } = nameSection?.data || {};

    const Service = {
        descriptionSection: sections?.find(section => section.name.includes('Details'))?.component?.[0]?.name,
        serviceSection: sections?.find(section => section.name.includes('Other - Services'))?.component?.[0]?.name,
    };

    if (isLoadingNameSection) return <LoadingPage />

    return (
        <>
            <WrapperSection title={data?.service_title} >
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item md={4} xs={12}>
                        <Image nameSection={Service} image={data?.data?.image}/>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Description
                            title={data?.data?.title}
                            description={data?.data?.description} />
                    </Grid>
                </Grid>
            </WrapperSection>
            <WrapperSection title={lng === 'en'? `Other Services`: 'خدمات أخرى'} >
                {data && <GridItems data={data?.other_services} slices={3}
                    render={(service) => <Grid item md={4} xs={12} key={service?.slug} ><Card nameSection={Service} service={service}/></Grid>} />}
            </WrapperSection>
        </>
    )
}

export default DetailsPage