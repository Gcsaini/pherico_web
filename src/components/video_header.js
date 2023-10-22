import { Grid, Stack, Typography } from "@mui/material";
import videobg from "../assets/video/bg_video.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "./nav_drawer";
import Navbar from "../components/navbar";
import sideImg from "../assets/images/about/aboutus.jpg.png";
export default function VideoHeader() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const gradientBg = {
    height: "80px",
    width: "100%",
    background: "rgba(0,0,0,1)",
    position: "absolute",
    filter: "blur(24px)",
    top: 5,
    webkitFilter: "blur(8px)",
  };

  return (
    <Stack>
      <video
        autoPlay
        loop
        muted
        style={{
          minWidth: "100%",
          width: "100%",
          height: "100%",
          position: "absolute",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src={videobg} type="video/mp4" />
      </video>
      <Stack
        style={{
          height: "100vh",
          background: "rgba(0, 0, 0, 0.8)",
          position: "relative",
          top: 0,
          zIndex: 99,
        }}
      >
        {isMobile ? <NavDrawer /> : <Navbar />}
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 6 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                style={{
                  marginLeft: isMobile || isTablet ? 30 : 80,
                  marginRight: 20,
                  marginTop: isMobile ? 50 : 0,
                }}
              >
                <Typography
                  variant={isTablet ? "h5" : "h4"}
                  sx={{
                    color: "#FCFCFC",
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  We are empowering entrepreneurs to chase their dreams
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                style={{
                  marginTop: isMobile ? 30 : 20,
                  marginLeft: isMobile || isTablet ? 30 : 80,
                  marginRight: isTablet ? 5 : 30,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FCFCFC",
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: isMobile ? "15px" : "18px",
                  }}
                >
                  We provide live commerce social media with quick storefront to
                  create your brand and communicate with your customers
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div
                style={{
                  height: isMobile ? "0" : "91vh",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <img
                  src={sideImg}
                  alt="about us pherico"
                  style={{
                    width: isMobile ? "0%" : isTablet ? "100%" : "80%",
                    height: isMobile ? "0%" : isTablet ? "70%" : "85%",
                    marginLeft: isMobile || isTablet ? 0 : 10,

                    visibility: isMobile ? "hidden" : "",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={gradientBg}></div>
      </Stack>
    </Stack>
  );
}
