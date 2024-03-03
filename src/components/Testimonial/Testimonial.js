import React from 'react';
import { Container, Grid } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import './Testimonial.css'
const Testimonial = () => {
  return (
    <section className='testimonial'>
      <Container maxWidth={'lg'}>
        <Grid container pt={15} pb={20}>
          <Grid pb={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="testimonialContent">
              <h6>TESTIMONIALS</h6>
              <h2>What people say about us</h2>
              <p>We are a well-equipped towing service available to help with towing a car 24/7 we provide a fast, affordable, friendly, and reliable car towing service.</p>
            </div>
          </Grid>
          <Grid container columnSpacing={5} rowSpacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="sec">
                <div className="ch">
                  <div className="star">
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarHalfIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                  </div>
                  <p>When I called roadside assistance, Mike from Towa arrived. He was extremely nice and recovered my car as if it were his own when he put it on the tow truck.”</p>
                  <h5>- Justin F</h5>
                  <span style={{ display: 'flex', justifyContent: 'flex-start' }}>2 weeks ago</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="sec">
                <div className="ch">
                  <div className="star">
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarHalfIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                  </div>
                  <p>When I called roadside assistance, Mike from Towa arrived. He was extremely nice and recovered my car as if it were his own when he put it on the tow truck.”</p>
                  <h5>- Mike J</h5>
                  <span style={{ display: 'flex', justifyContent: 'flex-start' }}>1 month ago</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="sec">
                <div className="ch">
                  <div className="star">
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                    <StarHalfIcon sx={{ color: "var(--orange)", fontSize: 25 }} />
                  </div>
                  <p>When I called roadside assistance, Mike from Towa arrived. He was extremely nice and recovered my car as if it were his own when he put it on the tow truck.”</p>
                  <h5>- Adan H</h5>
                  <span style={{ display: 'flex', justifyContent: 'flex-start' }}>2 months ago</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid >
      </Container >
    </section >
  )
}

export default Testimonial
