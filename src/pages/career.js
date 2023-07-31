import { Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import teamsImg from "../assets/images/career/teams.svg";
import CareerBenefit from "../components/career_benefits";
import Openings from "../components/openings";
import Footer from "../components/footer";
import * as React from "react";
export default function Career() {
  return (
    <div>
      <div
        style={{
          background: "#121212",
          marginTop: -20,
          paddingBottom: 70,
          paddingTop: 25,
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 12 }}
            columns={{ sm: 8, md: 12 }}
            style={{ marginTop: 20, width: "90%" }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="h3"
                sx={{
                  color: "#FCFCFC",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                  marginTop: 10,
                }}
              >
                Discover Your Career Potential do what you love to do.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img src={teamsImg} alt="teams" height={420} />
            </Grid>
          </Grid>
        </div>
      </div>
      <CareerBenefit />
      <Openings />
      <Footer />
    </div>
  );
}
