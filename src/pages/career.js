import { Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import teamsImg from "../assets/images/career/CAREER.jpg";
import CareerBenefit from "../components/career_benefits";
import Openings from "../components/openings";
import Footer from "../components/footer";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "../components/nav_drawer";
export default function Career() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div>
      <div
        style={{
          marginTop: -20,
          paddingBottom: 70,
          paddingTop: 25,
        }}
      >
        {isMobile ? <NavDrawer /> : <Navbar />}
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
            columns={{ sm: 12, md: 12 }}
            style={{ marginTop: 20, width: "90%" }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant={isMobile ? "h4" : isTablet ? "h4" : "h3"}
                sx={{
                  color: "#FCFCFC",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: isMobile ? "center" : "left",
                  fontWeight: 600,
                  marginTop: isMobile ? 5 : 10,
                }}
              >
                Discover Your Career Potential do what you love to do.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img
                src={teamsImg}
                alt="teams"
                height={isMobile ? 420 : isTablet ? 340 : 420}
              />
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
