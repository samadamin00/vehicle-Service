import React from 'react';
import { Grid } from '@mui/material'
const ServiceOne = ({ head, des, paragraph }) => {
    return (
        <>
            <Grid pb={4} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="servicesContent">
                    <h5>{head}</h5>
                    <h2>{des}</h2>
                    <p>{paragraph}</p>
                </div>
            </Grid>
        </>
    )
}
export default ServiceOne
