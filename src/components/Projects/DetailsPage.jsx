import React from 'react'
import WrapperSection from '../global/WrapperSection'
import { Grid } from '@mui/material';
import Description from '../global/Description';
import { projects } from '../../constants/projects'
import GridItems from '../global/GridItems'
import Card from './cards';
import Image from '../global/images';
import { useNameSection } from '../../hooks/useNameSection';
import LoadingPage from '../global/LoadingPage';
import Slider from '../global/Slider';

const DetailsPage = ({ data }) => {

    const { isLoading: isLoadingNameSection, nameSection } = useNameSection('sengle-project');

    // التحقق من أن البيانات متوفرة قبل محاولة الوصول إلى `sections`
    const { sections } = nameSection?.data || {};

    const Project = {
        descriptionSection: sections?.find(section => section.name.includes('Details'))?.component?.[0]?.name,
        projectSection: sections?.find(section => section.name.includes('Other - Project'))?.component?.[0]?.name,
    };

    if (isLoadingNameSection) return <LoadingPage />

    return (
        <>
            <WrapperSection title={data?.project_title} >
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <Slider>
                            {data?.data?.images?.map(res =>
                                <Image nameSection={Project} image={res?.image} />
                            )}
                        </Slider>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Description
                            title={data?.data?.name}
                            description={data?.data?.description} />
                    </Grid>
                </Grid>
            </WrapperSection>
            <WrapperSection title={`Other projects`} >
                {projects && <GridItems data={data?.other_projects} slices={3}
                    render={(project) => <Grid item md={4} xs={12} key={project?.id} ><Card nameSection={Project} project={project} /></Grid>} />}
            </WrapperSection>
        </>
    )
}

export default DetailsPage