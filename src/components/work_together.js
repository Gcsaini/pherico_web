import { Grid, Typography } from "@mui/material";
import mobileImg from "../assets/images/mobile_4.png";
import ratingStarSvg from "../assets/images/rating_star.svg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { black, blackText, dark, hrLine, white } from "../helpers/colors";
import PlayIconBlack from "./play_icon_black";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function WorkTogether() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div
      style={{
        background: dark,
        marginTop: 100,
        padding: isMobile ? "100px 20px" : "100px 90px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 6, sm: 6, md: 6 }}
        columns={{ sm: 12, md: 12 }}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Stack spacing={isMobile ? 2 : 4}>
            <Typography
              variant={"h4"}
              sx={{
                color: white,
                fontWeight: 600,
                whiteSpace: "normal",
                fontStyle: "normal",
                fontFamily: "Poppins,sans-serif",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Let's Work
            </Typography>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{
                color: white,
                fontWeight: 800,
                whiteSpace: "normal",
                fontStyle: "normal",
                fontFamily: "Poppins,sans-serif",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Together
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div
            style={{
              height: 1,
              background: hrLine,
              position: "relative",
              top: 64,
            }}
          ></div>
          <Stack alignItems={"end"}>
            <div
              style={{
                height: 130,
                width: 130,
                borderRadius: 65,
                background: white,
                color: black,
                zIndex: 1,
                marginRight: 40,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <spann style={{ fontSize: 16, fontWeight: 600, zIndex: 1 }}>
                Join us
              </spann>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
