import React from 'react'
import { Grid } from '@mui/material';
const ServiceTwo = ({ img1, head, p, img2, img3, head2, head3, color }) => {
    return (
        <>
            <Grid container rowSpacing={5} columnSpacing={5} className="bot" pt={5} pb={10} >
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="ch">
                        <img src={img1} alt="icon" />
                        <h4>{head}</h4>
                        <p style={{ color: `var(--${color})` }}>{p}</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="ch">
                        <img src={img2} alt="" />
                        <h4>{head2}</h4>
                        <p style={{ color: `var(--${color})` }}>{p}</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="ch">
                        <img src={img3} alt="" />
                        <h4>{head3}</h4>
                        <p style={{ color: `var(--${color})` }}>{p}</p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default ServiceTwo
