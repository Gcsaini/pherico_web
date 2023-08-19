import { Avatar, Stack, Typography } from "@mui/material";
import { dark, hrLine, secondaryWhite, white } from "../helpers/colors";
import img from "../assets/images/teams/gopi.jpg";
export default function TestimonialView() {
  return (
    <Stack
      style={{
        background: dark,
        padding: "40px 30px",
        width: "100%",
        borderRadius: 5,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: 13,
          color: secondaryWhite,
          fontWeight: 600,
          textAlign: "left",
          fontStyle: "normal",
          lineHeight: "1.5rem",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse varius enim in eros
        elementum tristique. Duis
      </Typography>
      <div
        style={{
          marginTop: 30,
          marginBottom: 25,
          height: 1,
          background: hrLine,
          margin: "15px 0px",
        }}
      ></div>
      <Stack direction={"row"} alignItems={"center"}>
        <Avatar alt="author name" src={img} sx={{ height: 50, width: 50 }} />
        <Stack alignItems={"start"}>
          <Typography
            variant="h6"
            sx={{
              marginLeft: 1.5,
              fontSize: 14,
              color: white,
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "1.7rem",
            }}
          >
            Ujjal Sarkar
          </Typography>
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
            Seller
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
