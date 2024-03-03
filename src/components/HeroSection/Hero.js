import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import clock from '../../assets/img/clock.svg'
import Container from '@mui/material/Container';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Hero.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Hero = () => {
    const options = [
        { value: 'east', label: 'East' },
        { value: 'south', label: 'South' },
        { value: 'west', label: 'West' },
        { value: 'central', label: 'Central' }
    ]
    let mechanic = useNavigate()
    let mechanicPage = () => {
        mechanic('/Mechanic')
    }
    return (
        <>
            <section className="heroS">
                <Container maxWidth="lg">
                    <Grid rowSpacing={6} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} className='nBackground' pt={20} pb={14} container >
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                            <div className="left">
                                <h6>EMERGENCY ROAD SERVICE PROVIDER</h6>
                                <h1>Leading towing service provider.</h1>
                                <p>A leading towing company and emergency road service provider. We operate new, clean and professional towing vehicles and equipment.</p>
                                <div className="group">
                                    <div style={{ width: '35rem', fontSize: "2rem", heigh: "5rem" }} className="searchBar">
                                        <Select options={options} />
                                    </div>
                                    <button onClick={() => mechanicPage()} className='btn btn-orange'>Search</button>
                                </div>
                                <div className="bottom">
                                    <span><img style={{ color: 'var(--green)' }} src={clock} alt="clock" /></span>
                                    <span>Available 24/7 for emergency road service</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center', alignItems: 'center'
                        }} item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="right-img">
                                <i class="fas fa-play"> </i>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Hero
