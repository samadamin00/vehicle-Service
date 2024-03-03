import { Container, Grid } from "@mui/material";
import React from "react";
import ServiceOne from "../../components/Services/ServiceOne";
import ServiceTwo from "../../components/Services/ServiceTwo";
import price from "../../assets/img/price.png";
import time from "../../assets/img/time.png";
import staff from "../../assets/img/staff.png";
import service from "../../assets/img/service.jpg";
import style from "./About.module.css";
const About = () => {
  return (
    <>
      <section className={style.about}>
        <Container maxWidth={"lg"}>
          <Grid sx={{ zIndex: "1", position: "relative" }} container>
            <Grid pt={20} xs={12} sm={12} md={12} lg={12} xl={12}>
              <h6 className={style.heading}>ABOUT US</h6>
              <h1 className={style.motivate}>
                We are Provide Excellence Service
              </h1>
              <img className={style.fullWidth} src={service} alt="" />
            </Grid>
            <Grid pt={20} xs={12} sm={12} md={12} lg={12} xl={12}>
              <ServiceOne
                head="WHY US"
                des="We  provide high quality services"
                paragraph="We are a well-equipped towing service available to help with towing a car 24/7 we provide a fast, affordable, friendly, and reliable car towing service."
              />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              <ServiceTwo
                center="center"
                color="dGray"
                img1={price}
                head="Affordable prices"
                p="We operate new, clean and professional towing vehicles and equipment."
                img2={time}
                img3={staff}
                head2="Fast and efficient"
                head3="Professional staff"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default About;
