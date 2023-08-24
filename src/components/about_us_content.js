import * as React from "react";
import { Stack, Typography } from "@mui/material";
import missionImg from "../assets/images/about/mission.png";
import goalImg from "../assets/images/about/goal.png";
import Grid from "@mui/material/Grid";
import { black, secondaryWhite, white } from "../helpers/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function AboutUsContent(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const aboutData = props.data;
  return (
    <Stack
      style={{
        marginTop: 80,
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
          know us
        </Typography>
        <div
          style={{
            background: secondaryWhite,
            padding: 20,
            marginTop: 10,
            marginBottom: isMobile ? 40 : 100,
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
            About us
          </Typography>
        </div>
      </Stack>
      <Stack
        style={{
          width: isMobile ? "95%" : isTablet ? "100%" : "100%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 0 }}
          rowSpacing={0}
          columns={{ sm: 12, md: 12 }}
          style={{ margin: 0, padding: 0 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{
              height: isMobile ? "50%" : isTablet ? "50vh" : "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={goalImg}
              alt="mission"
              style={{
                width: isMobile ? "90%" : isTablet ? "100%" : "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              direction={"column"}
              style={{
                marginLeft: isMobile ? "4%" : isTablet ? "6%" : 50,
                marginTop: isMobile ? 20 : 0,
              }}
            >
              <Typography
                variant={"h6"}
                sx={{
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontSize: isMobile ? 12 : isTablet ? 14 : 16,
                  fontStyle: "normal",
                  lineHeight: isTablet ? "1.3" : "2.7rem",
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant={isTablet ? "h5" : "h4"}
                sx={{
                  color: white,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: isMobile ? "1.4" : "1.3rem",
                  textTransform: "uppercase",
                }}
              >
                our mission
              </Typography>
              <Typography
                variant={"h6"}
                sx={{
                  marginTop: isMobile ? 0.5 : 2,
                  fontSize: isMobile || isTablet ? 15 : 20,
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: isMobile || isTablet ? "1.3" : "2rem",
                }}
              >
                {aboutData.mission}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 0 }}
          rowSpacing={0}
          columns={{ sm: 12, md: 12 }}
          flexDirection={isMobile ? "column-reverse" : "row"}
          style={{ margin: 0, padding: 0 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              direction={"column"}
              style={{
                marginLeft: isMobile ? "4%" : isTablet ? "5%" : 50,
                marginTop: isMobile ? 20 : 0,
              }}
            >
              <Typography
                variant={"h6"}
                sx={{
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: isMobile ? 12 : isTablet ? 14 : 16,
                  lineHeight: isTablet ? "1.3" : "2.7rem",
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant={isTablet ? "h5" : "h4"}
                sx={{
                  color: white,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: isTablet ? "1.3" : "2.7rem",
                  textTransform: "uppercase",
                }}
              >
                our vision
              </Typography>
              <Typography
                variant={"h6"}
                sx={{
                  marginTop: isMobile || isTablet ? 0.5 : 2,
                  fontSize: isMobile || isTablet ? 15 : 20,
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: isMobile || isTablet ? "1.3" : "2rem",
                }}
              >
                {aboutData.vision}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            mt={isMobile ? 6 : 0}
            style={{
              height: isMobile ? "50%" : isTablet ? "50vh" : "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={goalImg}
              alt="mission"
              style={{
                width: isMobile ? "90%" : "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 0 }}
          rowSpacing={0}
          columns={{ sm: 12, md: 12 }}
          style={{ margin: 0, padding: 0 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            mt={isMobile ? 6 : 0}
            style={{
              height: isMobile ? "50%" : isTablet ? "50vh" : "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={missionImg}
              alt="mission"
              style={{
                width: isMobile ? "90%" : isTablet ? "100%" : "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              direction={"column"}
              style={{
                marginLeft: isMobile ? "4%" : isTablet ? "6%" : 50,
                marginTop: isMobile ? 20 : 0,
              }}
            >
              <Typography
                variant={"h6"}
                sx={{
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: isMobile ? 12 : isTablet ? 14 : 16,
                  lineHeight: isTablet ? "1.3" : "2.7rem",
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant={isTablet ? "h5" : "h4"}
                sx={{
                  color: white,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: isTablet ? "1.3" : "2.7rem",
                  textTransform: "uppercase",
                }}
              >
                our goal
              </Typography>
              <Typography
                variant={"h6"}
                sx={{
                  marginTop: isMobile || isTablet ? 0.5 : 2,
                  fontSize: isMobile || isTablet ? 15 : 20,
                  color: secondaryWhite,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: isMobile || isTablet ? "1.3" : "2rem",
                }}
              >
                {aboutData.goal}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
