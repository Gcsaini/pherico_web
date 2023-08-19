import { Typography } from "@mui/material";
import mobileImg from "../assets/images/mobile_4.png";
import ratingStarSvg from "../assets/images/rating_star.svg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  black,
  blackText,
  dark2,
  darkBg,
  secondaryWhite,
  white,
} from "../helpers/colors";
import PlayIconBlack from "./play_icon_black";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function AppRating() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Stack
      style={{
        marginTop: 100,
        alignItems: "center",
      }}
    >
      <Stack
        style={{
          width: isMobile ? "95%" : "90%",
          background: darkBg,
          padding: isMobile ? "20px 10px" : "50px 10px",
        }}
      >
        <Stack
          direction="row"
          spacing={{ sm: 8, md: 12 }}
          justifyContent={"center"}
        >
          <img
            src={mobileImg}
            alt="mobile"
            height={isMobile ? "200px" : isTablet ? "280px" : "17%"}
            width={"24%"}
          />
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Stack direction={"row"} mt={isMobile ? 2 : 0}>
              <Typography
                variant={"h1"}
                sx={{
                  color: white,
                  fontWeight: 500,
                  whiteSpace: "normal",
                  fontStyle: "normal",
                  fontFamily: "Poppins,sans-serif",
                  lineHeight: 1,
                }}
              >
                4.7
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: white,
                  fontWeight: 500,
                  whiteSpace: "normal",
                  fontStyle: "normal",
                  fontFamily: "Poppins,sans-serif",
                  lineHeight: "3rem",
                  marginLeft: isMobile ? 1 : 3,
                }}
              >
                play
                <br /> store
              </Typography>
            </Stack>
            <img
              src={ratingStarSvg}
              alt="rating star"
              height={50}
              width={150}
              style={{ marginTop: 12 }}
            />
            {!isMobile && (
              <Chip
                icon={<PlayIconBlack sx={{ color: black }} />}
                label="Download the app"
                sx={{
                  height: "auto",
                  background: white,
                  padding: "6px 20px",
                  cursor: "pointer",
                  marginTop: 3,
                  borderRadius: 30,
                  "& .MuiChip-label": {
                    color: blackText,
                    display: "block",
                    fontWeight: 500,
                    whiteSpace: "normal",
                    fontStyle: "normal",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "1.5rem",
                    fontSize: "0.9rem",
                  },
                }}
              />
            )}
          </Stack>
        </Stack>

        <Stack alignItems={"center"}>
          {isMobile && (
            <Chip
              icon={<PlayIconBlack sx={{ color: black }} />}
              label="Download the app"
              sx={{
                height: "auto",
                background: white,
                padding: "6px 20px",
                cursor: "pointer",
                marginTop: 5,
                borderRadius: 30,
                "& .MuiChip-label": {
                  color: blackText,
                  display: "block",
                  fontWeight: 500,
                  whiteSpace: "normal",
                  fontStyle: "normal",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "1.5rem",
                  fontSize: "0.9rem",
                },
              }}
            />
          )}
          <Typography
            variant="h6"
            sx={{
              color: secondaryWhite,
              whiteSpace: "normal",
              fontFamily: "Poppins,sans-serif",
              lineHeight: isMobile || isTablet ? "1.5rem" : "2rem",
              fontSize: 16,
              marginLeft: isMobile ? 2 : isTablet ? 10 : 0,
              marginRight: isMobile ? 2 : isTablet ? 10 : 0,
              textAlign: "center",
              marginTop: isMobile || isTablet ? 5 : 0,
            }}
          >
            "in love! such a seamless user experience, smooth as freshly waxed
            pair of legs! very intuitive and easy
            <br /> to use application. good job people, good job."
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: white,
              whiteSpace: "normal",
              fontFamily: "Poppins,sans-serif",
              lineHeight: "2rem",
              marginTop: 3,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Gcsaini
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
