import { Typography } from "@mui/material";
import mobileImg from "../assets/images/mobile_3.png";
import ratingStar from "../assets/images/rating-star.png";
import ratingStarSvg from "../assets/images/rating_star.svg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { black, blackBg, blackText, white } from "../helpers/colors";
import PlayIconBlack from "./play_icon_black";
export default function AppRating() {
  return (
    <div
      style={{
        background: "#121212",
        marginTop: 100,
        paddingTop: "100px",
        paddingBottom: 150,
      }}
    >
      <Stack
        direction="row"
        spacing={{ sm: 8, md: 12 }}
        justifyContent={"center"}
        style={{ width: "90vw" }}
      >
        <img src={mobileImg} alt="mobile image" height={"60%"} width={"40%"} />
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Stack direction={"row"}>
            <Typography
              variant="h1"
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
                marginLeft: 3,
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
        </Stack>
      </Stack>
      <Stack alignItems={"center"} mt={12}>
        <Typography
          variant="h6"
          sx={{
            color: white,
            whiteSpace: "normal",
            fontFamily: "Poppins,sans-serif",
            lineHeight: "2rem",

            fontSize: 16,
            textAlign: "center",
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
    </div>
  );
}
