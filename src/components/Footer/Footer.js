import React from 'react';
import { Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
  const mechanic = useNavigate();

  const navigate = () => {
    mechanic('/Mechanic');
  };

  return (
    <section className='facilities'>
      <Container maxWidth={'lg'}>
        <Grid
          pt={5}
          pb={3}
          alignItems={{ xs: 'center', sm: 'center' }}
          direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
          container
        >
          <Grid sx={{ textAlign: 'center' }} item xs={12} sm={12} md={7} lg={7} xl={7}>
            <h2>Do you need towing service?</h2>
            <p style={{ color: 'rgba(2,7,16,65%)' }}>We hope you won't need it, but we are ready to help.</p>
          </Grid>
          <Grid
            sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', justifyCntent: 'center' }}
            item xs={12} sm={12} md={5} lg={5} xl={5}
          >
            <div className={style.button}>
              <button onClick={navigate} className='btn btn-black'>Call us now</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
