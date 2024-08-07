import { Box } from '@mui/material'
import React from 'react'
import Card from './Card'
import i18next from 'i18next'

const NPBlog = ({ data }) => {
    let lng = i18next.language

    return (
        <>
            <Box sx={{
                display: 'flex', alignItems: 'center', gap: 2,
                justifyContent: data?.prev_blog?.id && data?.next_blog?.id
                    ? 'space-between'
                    : data?.prev_blog?.id
                        ? 'flex-start'
                        : 'flex-end',
                flexDirection: { md: lng === 'en' ? 'row' : 'row-reverse', xs: 'column-reverse' },
            }} >
                {
                    data?.prev_blog?.id &&
                    <Card N_P={lng === 'en' ? 'Previous Article' : 'المقالة السابقة'} data={data?.prev_blog} dir={'row-reverse'} />
                }
                {
                    data?.next_blog?.id &&
                    <Card N_P={lng === 'en' ? 'Next Article' : 'المقالة التالية'} data={data?.next_blog} dir={'row'} />
                }
            </Box>
        </>
    )
}

export default NPBlog