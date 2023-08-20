import { Grid, Typography } from "@mui/material";
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
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { shake } from "react-animations";
const SwingAnimation = keyframes`${shake}`;
const SwingDiv = styled.div`
  animation: 3s ${SwingAnimation};
`;
export default function WorkTogether() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return isMobile ? (
    ""
  ) : (
    <div ref={ref}>
      <div
        style={{
          background: darkBg,
          marginTop: 100,
          padding: isTablet ? "20px" : "40px 90px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 6, sm: 6, md: 6 }}
          columns={{ sm: 12, md: 12 }}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={isMobile ? 2 : 3}>
              <Typography
                variant={isTablet ? "h5" : "h4"}
                sx={{
                  color: secondaryWhite,
                  fontWeight: 600,
                  whiteSpace: "normal",
                  fontStyle: "normal",
                  fontFamily: "Poppins,sans-serif",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Have any
              </Typography>
              <Typography
                variant={isTablet ? "h4" : "h2"}
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
                Query?
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                height: 1,
                background: hrLine,
                position: "relative",
                top: isTablet ? 54 : 64,
              }}
            ></div>
            {inView && (
              <SwingDiv>
                <Stack alignItems={"end"}>
                  <div
                    style={{
                      height: isTablet ? 100 : 130,
                      width: isTablet ? 100 : 130,
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
                      Contact us
                    </spann>
                  </div>
                </Stack>
              </SwingDiv>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
