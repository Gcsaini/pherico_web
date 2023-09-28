import { Grid, Stack, Typography } from "@mui/material";
import {
  red,
  secondary,
  white,
  green,
  secondaryWhite,
  hrLine,
  dark,
} from "../helpers/colors";
import handWaveImg from "../assets/images/about/hand-wave.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import emailjs from "@emailjs/browser";
import {
  EmailJsPublicId,
  EmailJsServiceId,
  MailTemplateID,
  validateEmail,
} from "../helpers/config";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ContactSection() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoding, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (firstName.length < 3) {
      setError("Enter valid first name");
      return;
    } else if (lastName.length < 3) {
      setError("Enter valid last name");
      return;
    } else if (phoneNumber.length !== 10) {
      setError("Enter valid phone number");
      return;
    } else if (isNaN(phoneNumber)) {
      setError("Enter valid phone number");
      return;
    } else if (!validateEmail(mail)) {
      setError("Invalid Email");
      return;
    } else if (message.length < 5) {
      setError("Enter message");
      return;
    } else {
      setLoading(true);
      setError("");

      emailjs
        .send(
          EmailJsServiceId,
          MailTemplateID,
          {
            name: firstName + " " + lastName,
            phone: phoneNumber,
            email: mail,
            message: message,
          },
          EmailJsPublicId
        )
        .then(
          (result) => {
            setSuccess("Message has been sent");
          },
          (error) => {
            setError("Something went wrong!");
          }
        );
      setLoading(false);
    }
  };

  const inputStyle = {
    color: white,
    borderRadius: 0.5,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: secondaryWhite,
    },
    "&:hover > .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
    "&:focused > .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  };

  return (
    <div
      style={{
        background: "#121212",
        marginTop: 70,
        paddingBottom: isMobile || isTablet ? 50 : 100,
        paddingTop: isMobile || isTablet ? 50 : 100,
      }}
    >
      <Stack
        style={{
          padding: isMobile
            ? "10px 20px"
            : isTablet
            ? "0px 40px"
            : "20px 100px",
        }}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Grid container spacing={{ xs: 2, md: 12 }} columns={{ sm: 8, md: 12 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Stack>
              <Typography
                variant="h4"
                sx={{
                  color: white,
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                }}
              >
                We love to here you,
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"left"}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: white,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Get in touch
                </Typography>
                <img src={handWaveImg} alt="hand wave" height={45} />
              </Stack>
              <Stack direction={"row"} spacing={2} mt={isTablet ? 6 : 4}>
                <LocationOnIcon sx={{ color: white, fontSize: 40 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: secondaryWhite,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: 17,
                  }}
                >
                  FX-12 Mediaplex Film City, Sector-16 Noida,
                  <br /> UP
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} style={{ marginTop: 30 }}>
                <LocalPhoneIcon sx={{ color: white, fontSize: 40 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: secondaryWhite,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: 17,
                  }}
                >
                  8755512976
                  <br />
                  9681285123
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} style={{ marginTop: 30 }}>
                <EmailIcon sx={{ color: white, fontSize: 40 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: secondaryWhite,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: 17,
                  }}
                >
                  pherico.live@gmail.com
                  <br />
                  support@pherico.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            style={{ marginTop: isMobile || isTablet ? 50 : 0 }}
          >
            <Stack direction={"row"} spacing={2}>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter first name"
                  size="small"
                  sx={inputStyle}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter last name"
                  size="small"
                  sx={inputStyle}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
            </Stack>
            <Stack direction={"row"} spacing={2} style={{ marginTop: 20 }}>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter your phone"
                  size="small"
                  sx={inputStyle}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter your mail"
                  size="small"
                  sx={inputStyle}
                  onChange={(e) => setMail(e.target.value)}
                />
              </FormControl>
            </Stack>

            <FormControl fullWidth style={{ marginTop: 20 }}>
              <OutlinedInput
                placeholder="Your message"
                size="small"
                sx={inputStyle}
                multiline={true}
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Stack direction={"row"} alignItems={"center"}>
              <button
                style={{
                  background: dark,
                  padding: "12px 30px",
                  color: white,
                  marginTop: 20,
                  borderRadius: 6,
                  outline: "none",
                  fontFamily: "Poppins, sans-serif",
                  border: `1px solid ${secondaryWhite}`,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onClick={sendEmail}
              >
                {isLoding ? "Sending..." : "Submit"}
              </button>

              <Typography
                variant="h6"
                sx={{
                  color: red,
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  lineHeight: "1.5rem",
                  fontSize: 17,
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                {error}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: green,
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  lineHeight: "1.5rem",
                  fontSize: 17,
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                {success}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
