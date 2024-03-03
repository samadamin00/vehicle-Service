import React from 'react'
import { Container, Grid } from '@mui/material';
import tow from '../../assets/img/tow.png'
import bike from '../../assets/img/bike.png'
import road from '../../assets/img/road.png'
import serviceCard1 from '../../assets/img/Service1.png'
import serviceCard2 from '../../assets/img/Service2.png'
import './AllServices.css'
import ServiceOne from './ServiceOne';
import ServiceTwo from './ServiceTwo';
const Services = () => {
    return (
        <section className='backgroundTwo'>
            <Container maxWidth={'lg'}>
                <Grid sx={{ zIndex: '1', position: 'relative' }} container pt={15}>
                    <ServiceOne head='OUR SERVICES' des="We transport your vehicle safely and efficiently" paragraph="We are a well-equipped towing service available to help with towing a car 24/7 we provide a fast, affordable, friendly, and reliable car towing service." />
                    <Grid rowSpacing={ 5} columnSpacing={5} container>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="serCard1">
                                <img src={serviceCard1} alt="car" />
                                <h4>Emergency towing service</h4>
                                <p>We are a well-equipped towing service available to help with towing a car 24/7 we provide a fast, affordable, friendly, and reliable car towing service.24/7 we provide a fast, affordable,  </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="serCard1 change">
                                <span>LIMITED OFFER</span>
                                <img src={serviceCard2} alt="percentage" />
                                <h3>25% off emergency road service</h3>
                                <p>Favorable offer for new clients. Spend less time on web hosting and more time on your business.24/7 we provide a fast, affordable</p>
                            </div>
                        </Grid>
                    </Grid>
                    <ServiceTwo img1={tow} head="Car towing service" p="We operate new, clean and professional towing vehicles and equipment." img2={bike} img3={road} head2="Motorcycle towing" head3="Long distance towing" />
                </Grid>
            </Container>
        </section>
    )
}

export default Services
