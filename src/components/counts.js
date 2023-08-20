import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import topImg from "../assets/images/home/dummy.png";
import circleImg from "../assets/images/home/circle.png";
import { secondaryWhite, black } from "../helpers/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { rotateIn } from "react-animations";
const RotateAnimation = keyframes`${rotateIn}`;
const RotateDiv = styled.div`
  animation: 4s ${RotateAnimation};
`;
export default function Counts() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { ref, inView } = useInView({ threshold: 0 });
  const styles = {
    circleStyle: {
      backgroundImage: `url(${circleImg})`,
      backgroundSize: 120,
      color: secondaryWhite,
      height: 120,
      width: 120,
      textAlign: "center",
      paddingTop: 50,
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 20,
      marginRight: isMobile ? 10 : isTablet ? 20 : 0,
    },
    circleLabel: {
      fontSize: 14,
      color: secondaryWhite,
      fontWeight: 600,
      lineHeight: "1rem",
    },
  };
  return (
    <div ref={ref}>
      <Stack
        style={{
          paddingTop: isMobile ? 80 : 120,
          paddingBottom: 20,
          alignItems: "center",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 12 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={"space-evenly"}
            alignItems={"start"}
          >
            <Grid item xs={12} sm={6} md={6}>
              <div
                style={{
                  marginLeft: isMobile || isTablet ? 18 : 100,
                  marginTop: isMobile ? 10 : 40,
                  marginRight: isMobile || isTablet ? 18 : 0,
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={isMobile ? "center" : "start"}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 13,
                      color: secondaryWhite,
                      fontWeight: 600,
                      fontStyle: "normal",
                      lineHeight: "1rem",
                    }}
                  >
                    About us
                  </Typography>
                  <div
                    style={{
                      background: secondaryWhite,
                      padding: 20,
                      marginTop: 10,
                      marginBottom: 30,
                    }}
                  >
                    <Typography
                      variant={isMobile ? "h5" : "h4"}
                      sx={{
                        color: black,
                        fontWeight: 600,
                        fontSize: isMobile ? 22 : isTablet ? 26 : 30,
                        fontStyle: "normal",
                        lineHeight: "1rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Dummy Title
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 13,
                      textAlign: isMobile ? "center" : "start",
                      color: secondaryWhite,
                      fontWeight: 600,
                      fontStyle: "normal",
                      lineHeight: isMobile
                        ? "1.45"
                        : isTablet
                        ? "1.4"
                        : "1.5rem",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet.
                  </Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    style={{ marginTop: 50, width: "100%" }}
                  >
                    <Stack alignItems={"center"}>
                      {inView && (
                        <RotateDiv>
                          <div style={styles.circleStyle}>1000+</div>
                        </RotateDiv>
                      )}
                      <Typography variant="h6" style={styles.circleLabel}>
                        Customers
                      </Typography>
                    </Stack>
                    <Stack alignItems={"center"}>
                      {inView && (
                        <RotateDiv>
                          <div style={styles.circleStyle}>200+</div>
                        </RotateDiv>
                      )}
                      <Typography variant="h6" style={styles.circleLabel}>
                        Sellers
                      </Typography>
                    </Stack>
                    <Stack alignItems={"center"}>
                      {inView && (
                        <RotateDiv>
                          <div style={styles.circleStyle}>2500+</div>
                        </RotateDiv>
                      )}
                      <Typography variant="h6" style={styles.circleLabel}>
                        Products
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div
                style={{
                  marginTop: isMobile ? 30 : isTablet ? 30 : 0,
                  marginLeft: isMobile ? 30 : 0,
                  marginRight: isMobile ? 20 : isTablet ? 13 : 0,
                }}
              >
                <img
                  src={topImg}
                  alt="shopping"
                  style={{
                    width: isMobile ? "90%" : isTablet ? "100%" : "70%",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </div>
  );
}
