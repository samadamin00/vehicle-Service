import React from 'react'
import { Container, Grid } from '@mui/material';
import contentTwo from '../../assets/img/contentTwo.png';
import absolute from '../../assets/img/absolute.png';
import { useNavigate } from 'react-router-dom';
import './Why2.css'
const Why2 = () => {
    let mechanicPage = useNavigate()
    let navigate = () => {
        mechanicPage('/Mechanic')
    }
    return (
        <>
            <section className='backgroundOne'>
                <Container maxWidth={'lg'}>
                    <Grid sx={{ zIndex: '1', position: 'relative' }} container pt={11}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="imgContainer">
                                <div className="relative">
                                    <img src={contentTwo} alt="work" />
                                </div>
                                <div className="absolute">
                                    <img src={absolute} alt="100%" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="secondary">
                                < h5 > WHY US</h5>
                                <h2>Emergency towing service</h2>
                                <p>Towing a car can be difficult to attempt on your own if you do not have the right equipment or a powerful enough Towing Vehicle, so do not risk further damage to your car by trying to tow it yourself.</p>
                                <button onClick={() => navigate()} class="btn btn-orange">Call us now</button>
                            </div>
                        </Grid>
                    </Grid >
                </Container >
            </section >
        </>
    )
}

export default Why2
