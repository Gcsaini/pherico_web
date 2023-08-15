import { Grid, Stack, Typography } from "@mui/material";
import termsBg from "../assets/images/bg/terms-bg.png";
import feePlanBg from "../assets/images/bg/fee-plan.png";
import supportBg from "../assets/images/bg/support-bg.png";
import { black, primary, white } from "../helpers/colors";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function AboveFooter() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div
      style={{
        marginTop: 80,
        marginBottom: 20,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Stack
        style={{ width: isMobile ? "80%" : isTablet ? "90%" : "80%" }}
        alignItems={"center"}
      >
        {isMobile || !isTablet ? (
          <Grid
            container
            spacing={{ xs: 2, sm: 4, md: 4 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={isMobile ? "center" : "space-evenly"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundImage: `url(${termsBg})`,
                  height: 130,
                  backgroundSize: "100% 130px",
                  textAlign: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{ height: 130, width: "80%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginLeft: isMobile ? 3 : 5,
                      textAlign: "left",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.1rem",
                      fontSize: 14,
                    }}
                  >
                    New age banking demands &amp;
                    <span style={{ color: primary }}>
                      &nbsp;transparent terms and conditions
                    </span>
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundImage: `url(${supportBg})`,
                  height: 130,
                  backgroundSize: "100% 130px",
                  textAlign: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{ height: 130, width: isMobile ? "80%" : "70%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#9C34C2",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginLeft: isMobile ? 3 : 5,
                      textAlign: "left",
                      marginTop: isMobile ? 0 : 2,
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.1rem",
                      fontSize: 14,
                    }}
                  >
                    Write to us to enquire about our policy and terms
                    <br />
                    <span
                      style={{
                        color: black,
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      support@pherico.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundImage: `url(${feePlanBg})`,
                  height: 130,
                  backgroundSize: "100% 130px",
                  textAlign: "center",
                  marginTop: isMobile ? 13 : 0,
                  marginBottom: isMobile ? 13 : 0,
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{ height: 130, width: "80%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginLeft: isMobile ? 3 : 5,
                      textAlign: "left",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.1rem",
                      fontSize: 14,
                    }}
                  >
                    New age banking demands &amp;
                    <span style={{ color: primary }}>
                      &nbsp;transparent terms and conditions
                    </span>
                  </Typography>
                </Stack>
              </div>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            spacing={{ xs: 0, sm: 4, md: 4 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={isMobile ? "center" : "space-evenly"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundImage: `url(${termsBg})`,
                  height: 130,
                  backgroundSize: "100% 130px",
                  textAlign: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{ height: 130, width: "80%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginLeft: 2.5,
                      textAlign: "left",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.1rem",
                      fontSize: 14,
                    }}
                  >
                    New age banking demands &amp;
                    <span style={{ color: primary }}>
                      &nbsp;transparent terms and conditions
                    </span>
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundImage: `url(${supportBg})`,
                  height: 130,
                  backgroundSize: "100% 130px",
                  textAlign: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{ height: 130, width: "80%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#9C34C2",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      textAlign: "left",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.1rem",
                      fontSize: 14,
                    }}
                  >
                    Write to us at
                    <br />
                    <span
                      style={{
                        color: black,
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      support@pherico.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </Typography>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundImage: `url(${feePlanBg})`,
                  height: 130,
                  backgroundSize: "100% 130px",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{ height: 130, width: "80%" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginLeft: 2.5,
                      textAlign: "left",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.1rem",
                      fontSize: 14,
                    }}
                  >
                    New age banking demands &amp;
                    <span style={{ color: primary }}>
                      &nbsp;transparent terms and conditions
                    </span>
                  </Typography>
                </Stack>
              </div>
            </Grid>
          </Grid>
        )}
      </Stack>
    </div>
  );
}
