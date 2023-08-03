import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid, Stack, Typography } from "@mui/material";
import { white } from "../helpers/colors";
import founderImg from "../assets/images/about/founder.jpg";
import quoteImg from "../assets/images/about/quote.png";
import quoteDownImg from "../assets/images/about/quote_down.svg";
import * as React from "react";
export default function FoundersMessage(props) {
  const aboutData = props.data;
  return (
    <div
      style={{
        background: "#121212",
        marginTop: 100,
        paddingBottom: 70,
        paddingTop: 20,
      }}
    >
      <Stack
        style={{ padding: isMobile || isTablet ? "20px" : "20px 100px" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            color: white,
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            marginBottom: 5,
          }}
        >
          Some lines from our founders
        </Typography>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <Grid
              container
              spacing={{ xs: 2, sm: 2, md: 6 }}
              columns={{ sm: 12, md: 12 }}
              style={{ marginTop: isMobile ? 0 : 1 }}
            >
              <Grid item xs={12} sm={5} md={4}>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <img
                    src={founderImg}
                    alt="founder"
                    height={330}
                    style={{
                      position: isMobile ? "relative" : "initial",
                      left: "30%",
                      width: isMobile ? "" : "75%",
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={7} md={6}>
                <>
                  <Stack alignItems={"start"}>
                    <Stack
                      direction={"row"}
                      alignItems={"start"}
                      justifyContent={"start"}
                    >
                      <img
                        src={quoteDownImg}
                        alt="quotes"
                        height={isMobile ? 40 : 60}
                      />
                    </Stack>
                    {aboutData && aboutData.founder1 !== "" ? (
                      <Stack>
                        <Typography
                          variant="h6"
                          sx={{
                            color: white,
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                            textAlign: isMobile ? "center" : "left",
                            lineHeight: isMobile ? "1.4rem" : "1.5rem",
                            fontSize: isMobile ? "16px" : "20px",
                            marginTop: 1,
                          }}
                        >
                          {aboutData.founder1}
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography
                        variant="h6"
                        sx={{
                          color: white,
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                          textAlign: "left",
                          lineHeight: isMobile ? "1.4rem" : "1.5rem",
                          fontSize: isMobile ? "16px" : "20px",
                          marginTop: 1,
                        }}
                      >
                        We’re on a mission to empower the next generation to
                        discover better ways to learn, earn, and network. We’re
                        on a mission to empower the next generation to discover
                        better ways to learn, earn, and network.
                      </Typography>
                    )}
                  </Stack>
                  <Stack alignItems={"end"} justifyContent={"center"}>
                    <div style={{ width: isMobile ? 45 : 60, marginTop: 1 }}>
                      <img
                        src={quoteImg}
                        alt="quotes"
                        height={isMobile ? 40 : 60}
                        width={"50px !important"}
                      />
                    </div>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        color: white,
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                        textAlign: isMobile ? "center" : "left",
                        lineHeight: "1.3rem",
                        fontSize: 17,
                      }}
                    >
                      Gopi chand
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: white,
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                        textAlign: isMobile ? "center" : "left",
                        lineHeight: "1.5rem",
                        marginBottom: isMobile ? 5 : 0,
                        fontSize: 17,
                      }}
                    >
                      Founder
                    </Typography>
                  </Stack>
                </>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              columns={{ sm: 8, md: 12 }}
              style={{ marginTop: 1 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <div>
                  <img src={founderImg} alt="founder" height={330} />
                </div>
              </Grid>
              <Grid item xs={10} sm={8} md={6}>
                <Stack
                  direction={"column"}
                  justifyContent={"start"}
                  alignItems={"start"}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"start"}
                    justifyContent={"start"}
                  >
                    <img src={quoteDownImg} alt="quotes" height={70} />
                  </Stack>
                  {aboutData && aboutData.founder2 !== "" ? (
                    <Typography
                      variant="h6"
                      sx={{
                        color: white,
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "left",
                        lineHeight: "1.5rem",
                        marginTop: 3,
                      }}
                    >
                      {aboutData.founder2}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h6"
                      sx={{
                        color: white,
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "left",
                        lineHeight: "1.5rem",
                        marginTop: 3,
                      }}
                    >
                      We’re on a mission to empower the next generation to
                      discover better ways to learn, earn, and network. We’re on
                      a mission to empower the next generation to discover
                      better ways to learn, earn, and network.
                    </Typography>
                  )}
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "left",
                      lineHeight: "1.3rem",
                      marginTop: 7,
                      fontSize: 17,
                    }}
                  >
                    Ujjal Sarkar
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "left",
                      lineHeight: "1.5rem",
                      fontSize: 17,
                    }}
                  >
                    Founder
                  </Typography>
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "65%",
                      width: "40%",
                    }}
                  >
                    <img src={quoteImg} alt="quotes" height={70} />
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </div>
        </Carousel>
      </Stack>
    </div>
  );
}
