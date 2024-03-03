import React from 'react'
import { Container, Grid } from '@mui/material';
import ContactImg from '../../assets/img/Contact form.png';
import style from './Contact.module.css';
const Contact = () => {
  return (
    <>
      <section className={style.Contact}>
        <Container maxWidth={'lg'}>
          <Grid sx={{ zIndex: '1', position: 'relative' }} container>
            <Grid pt={20} xs={12} sm={12} md={12} lg={12} xl={12}>
              <h6 className={style.top}>CONTACT US</h6>
              <h1 className={style.heading}>Contact information</h1>
            </Grid>
            <Grid pb={8} container>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                <div className={style.information}>
                  <h3>Write us a message</h3>
                  <div className={style.inp}>
                    <label>Your Name</label><br />
                    <input type="text" />
                  </div>
                  <div className={style.inp}>
                    <label>Your Email</label><br />
                    <input type="email" />
                  </div>
                  <div className={style.inp}>
                    <label>Your Message</label><br />
                    <textarea rows={15} type="message" ></textarea>
                  </div>
                  <button type="submit" className='btn btn-orange'>Submit</button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className={style.img}>
                  <img src={ContactImg} alt="car" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Contact
