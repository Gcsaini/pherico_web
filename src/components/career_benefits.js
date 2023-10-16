import { Grid, Stack, Typography } from "@mui/material";
import { black, darkBg, secondaryWhite, white } from "../helpers/colors";
import wellnessImg from "../assets/images/career/heart-add.svg";
import compImg from "../assets/images/career/dollar-symbol.svg";
import rechargeImg from "../assets/images/career/battery-charge.svg";
import flexibilityImg from "../assets/images/career/time.svg";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function CareerBenefit() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        background: darkBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack style={{ width: isMobile ? "90%" : "80%" }}>
        <Typography
          variant="h6"
          sx={{
            color: secondaryWhite,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            marginTop: 3,
          }}
        >
          Benefits of Pherico
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: white,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
          }}
        >
          Live your best life
        </Typography>
        <Grid
          container
          spacing={{ xs: 8, md: 4 }}
          columns={{ sm: 8, md: 12 }}
          style={{ marginTop: 20 }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={wellnessImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: white,
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                }}
              >
                Wellness
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                We provide insurance plans and also cover some of the cost of
                your dependents
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={compImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: white,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                Compensation
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: secondaryWhite,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Incentive based on your work, provides stipend when you are
                working from home
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={rechargeImg} alt="wellness" height={40} width={80} />
              <Typography
                variant="h5"
                sx={{
                  color: white,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                Recharge
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: secondaryWhite,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Flexibie time of work, office trips and also provide paid
                leaves,
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={flexibilityImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: white,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                Flexibility
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: secondaryWhite,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Remote work culture and a working environment where you have the
                liberty of your time and schedule.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
