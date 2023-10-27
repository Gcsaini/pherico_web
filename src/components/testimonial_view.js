import { Avatar, Stack, Typography } from "@mui/material";
import { dark, hrLine, secondaryWhite, white } from "../helpers/colors";
import pooja from "../assets/images/testimonials/pooja.jpg";
import bro from "../assets/images/testimonials/bro.jpg";
import madam from "../assets/images/testimonials/madam.jpg";
import kapil from "../assets/images/testimonials/kapil.jpg";
export default function TestimonialView(props) {
  const name = props.name;
  const message = props.msg;
  const index = props.imageIndex;
  const images = [pooja, bro, madam, kapil];
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
        {message}
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
        <Avatar
          alt="author name"
          src={images[index]}
          sx={{ height: 50, width: 50 }}
        />
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
            {name}
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
            Viewers
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
