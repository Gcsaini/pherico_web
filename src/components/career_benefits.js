import { Grid, Stack, Typography } from "@mui/material";
import { black } from "../helpers/colors";
import wellnessImg from "../assets/images/career/wellness.svg";
import compImg from "../assets/images/career/compensation.svg";
import rechargeImg from "../assets/images/career/recharge.svg";
import flexibilityImg from "../assets/images/career/flexibility.svg";
import * as React from "react";

export default function CareerBenefit() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack style={{ width: "80%" }}>
        <Typography
          variant="h6"
          sx={{
            color: black,
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
            color: black,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
          }}
        >
          Live your best life
        </Typography>
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ sm: 8, md: 12 }}
          style={{ marginTop: 20 }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={wellnessImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: "#242424",
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
                  color: black,
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Health, dental, vision, and life insurance plans. We also cover
                some of the cost for your dependents as well.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={compImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: "#242424",

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
                  color: black,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Health, dental, vision, and life insurance plans. We also cover
                some of the cost for your dependents as well.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={rechargeImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: "#242424",

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
                  color: black,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Health, dental, vision, and life insurance plans. We also cover
                some of the cost for your dependents as well.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack justifyContent={"center"} alignItems={"start"}>
              <img src={flexibilityImg} alt="wellness" height={40} />
              <Typography
                variant="h5"
                sx={{
                  color: "#242424",

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
                  color: black,

                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  marginTop: 1,
                  fontSize: 17,
                  lineHeight: "1.2rem",
                }}
              >
                Health, dental, vision, and life insurance plans. We also cover
                some of the cost for your dependents as well.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
