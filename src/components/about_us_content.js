import { Stack, Typography } from "@mui/material";
import bgImg from "../assets/images/bg/header_bg.png";
import Grid from "@mui/material/Grid";
import { black, blackText, secondary } from "../helpers/colors";
import missionImg from "../assets/images/about/mission.svg";
import visionImg from "../assets/images/about/vision.svg";
import goalImg from "../assets/images/about/goal.svg";
export default function AboutUsContent() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        style={{ marginTop: 70 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: secondary,
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Get to know us
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          style={{ width: "70%", marginTop: 2 }}
        >
          <div
            style={{
              height: 7,
              width: 200,
              background: "rgb(189, 189, 189)",
              borderRadius: 10,
            }}
          ></div>
          <Typography
            variant="h6"
            sx={{
              color: blackText,
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              lineHeight: "1.5rem",
              marginTop: 3,
            }}
          >
            We as an online e-commerce marketplace with the taste of social
            media. Pherico aims to provide hassle free business experience and
            to connect all entrepreneurs with their consumers Live and
            interactive manner through this platform. Our store monetization
            feature also empower entrepreneurs side by side. We are also
            conscious and careful to provide hassle free and enjoyable shopping
            experience with the taste of Clickies (short product demo in an
            entertaining way).
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        <Stack style={{ width: "80%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ marginTop: 1 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <img src={missionImg} alt="mission" height={100} />
                <Typography
                  variant="h5"
                  sx={{
                    color: black,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                   Mission
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  alignItems={"space-around"}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: blackText,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                      lineHeight: "1.5rem",
                    }}
                  >
                     Our aim to enable anyone to turn their passion into a
                    business and bring people together through commerce with the
                    taste social media and empower them.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <img src={visionImg} alt="mission" height={100} />
                <Typography
                  variant="h5"
                  sx={{
                    color: black,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Vision
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  alignItems={"space-around"}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: blackText,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                      lineHeight: "1.5rem",
                    }}
                  >
                     We’re on a mission to empower the next generation to
                    discover better ways to learn, earn, and network.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <img src={goalImg} alt="mission" height={100} />
                <Typography
                  variant="h5"
                  sx={{
                    color: black,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Goal
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  alignItems={"space-around"}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: blackText,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                      lineHeight: "1.5rem",
                    }}
                  >
                     We’re on a mission to empower the next generation to
                    discover better ways to learn, earn, and network.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </div>
  );
}
