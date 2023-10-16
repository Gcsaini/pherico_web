import { Grid, Typography } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import liveWatch from "../assets/images/home/live 2.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  black,
  darkBg,
  hrLine,
  secondaryWhite,
  white,
} from "../helpers/colors";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function BecomeSeller() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const checkPointStyle = {
    marginLeft: 10,
    fontSize: 14,
    color: secondaryWhite,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: "1.3rem",
  };
  return (
    <Stack
      style={{
        marginTop: isMobile || isTablet ? 80 : 120,
        alignItems: "center",
      }}
    >
      <Stack alignItems={"center"}>
        <Typography
          variant="h6"
          sx={{
            marginLeft: 1.5,
            fontSize: 13,
            color: secondaryWhite,
            fontWeight: 600,
            fontStyle: "normal",
            lineHeight: "1rem",
          }}
        >
          BECOME A SELLER
        </Typography>
        <div
          style={{
            background: secondaryWhite,
            padding: 20,
            marginTop: 10,
            marginBottom: 30,
            marginLeft: 10,
            marginRight: 10,
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
            let's grow together
          </Typography>
        </div>
      </Stack>
      <Stack
        style={{
          width: isMobile ? "95%" : isTablet ? "90%" : "85%",
          background: darkBg,
          padding: isMobile ? "20px 16px" : isTablet ? "30px 0px" : "4% 0%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 12 }}
          columns={{ sm: 12, md: 12 }}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                marginLeft: isMobile ? 1 : isTablet ? 20 : 80,
                marginRight: isMobile ? 1 : isTablet ? 20 : 80,
                marginTop: 10,
              }}
            >
              <Stack direction={"column"}>
                <Typography
                  variant={"h5"}
                  sx={{
                    color: white,
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: isTablet ? "1.3" : "2.1rem",
                    textTransform: "uppercase",
                  }}
                >
                  100+ sellers are already interested to join us
                  <br />
                </Typography>
                <div
                  style={{
                    height: 1,
                    background: hrLine,
                    margin: "15px 0px",
                  }}
                ></div>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 14,
                    color: secondaryWhite,
                    fontWeight: 600,
                    fontStyle: "normal",
                    lineHeight: "1.5rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis
                </Typography>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  style={{
                    marginLeft: 20,
                    marginTop: isTablet ? 10 : 20,
                  }}
                >
                  <CheckOutlinedIcon sx={{ color: white, fontSize: 20 }} />
                  <Typography variant="h6" style={checkPointStyle}>
                    Dashboard
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  style={{
                    marginLeft: 20,
                    marginTop: isTablet ? 2 : 10,
                  }}
                >
                  <CheckOutlinedIcon sx={{ color: white, fontSize: 20 }} />
                  <Typography variant="h6" style={checkPointStyle}>
                    Zero delivery hustle
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  style={{ marginLeft: 20, marginTop: isTablet ? 2 : 10 }}
                >
                  <CheckOutlinedIcon sx={{ color: white, fontSize: 20 }} />
                  <Typography variant="h6" style={checkPointStyle}>
                    Insights
                  </Typography>
                </Stack>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  style={{ marginLeft: 20, marginTop: isTablet ? 2 : 10 }}
                >
                  <CheckOutlinedIcon sx={{ color: white, fontSize: 20 }} />
                  <Typography variant="h6" style={checkPointStyle}>
                    Monetize
                  </Typography>
                </Stack>
                <Chip
                  label={"JOIN US AS SELLER"}
                  sx={{
                    color: black,
                    height: 45,
                    width: 180,
                    marginLeft: 3,
                    marginTop: 3,
                    cursor: "pointer",
                    borderRadius: 3,
                    wordSpacing: 4,
                    boxShadow:
                      "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
                    background: "#E4DCD3",
                    "& .MuiChip-label": {
                      display: "block",
                      fontWeight: "bold",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "1.5rem",
                      fontSize: "0.8rem",
                    },
                  }}
                />
              </Stack>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                marginTop: isMobile ? 70 : isTablet ? 30 : 0,
                marginLeft: isMobile ? 20 : isTablet ? 10 : 0,
              }}
            >
              <img
                src={liveWatch}
                alt="live watching"
                style={{
                  width: isMobile ? "90%" : isTablet ? "94%" : "75%",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
