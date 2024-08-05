import WrapperSection from '../global/WrapperSection'
import GridItems from '../global/GridItems'
import { Grid } from '@mui/material'
// import { services } from '../../constants/services'
import Btn from '../global/Buttons/Btn'
import Card from './cards'
import { useHome } from '../../hooks/useHome'
import LoadingPage from '../global/LoadingPage'

const Services = ({ nameSection }) => {
    const { home, isLoading } = useHome()
    if (isLoading) return <LoadingPage />
    const { data } = home
    return (
        <>
            <WrapperSection title={data?.serviceTitle} >
                {data && <GridItems data={data?.services} slices={3}
                    render={(service) => <Grid item md={4} xs={12} key={service?.slug} ><Card nameSection={nameSection} service={service}/></Grid>} />}
                <Btn path={'services'} />
            </WrapperSection>
        </>
    )
}

export default Services