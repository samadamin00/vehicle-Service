import React from "react";
import { Container, Grid } from "@mui/material";
import style from "./Facilities.module.css";

const Facilities = () => {
  return (
    <>
      <section className="facilities">
        <Container maxWidth="lg">
          <Grid container pt={5} pb={5}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={style.contact}>
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                <h4>(555) 111-4442</h4>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={style.contact}>
                <span>
                  <i class="fa-regular fa-clock"></i>
                </span>
                <h4>Arriving in 30 min</h4>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={`${style.contact} ${style.none}`}>
                <span
                  style={{ backgroundColor: "var(--white)", color: "black" }}
                >
                  <i class="fa-regular fa-circle-check"></i>
                </span>
                <h4>No hidden fees</h4>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Facilities;
