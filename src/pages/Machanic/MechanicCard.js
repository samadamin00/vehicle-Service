import React from 'react';
import { Grid } from '@mui/material';
const MechCard = ({ locationData, avatar, name, service, phoneNumber }) => {
    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className="ch">
                    <img src={avatar} alt="icon" />
                    <h4>{name}</h4>
                    <p style={{ color: `var(--dGray)` }}>{service}</p>
                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    <p>{locationData}</p>
                </div>
            </Grid>

        </>
    )
}

export default MechCard
