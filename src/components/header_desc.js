import * as React from "react";
import { Grid, Typography } from "@mui/material";
import bgImg from "../assets/images/bg/header_bg.png";
import Stack from "@mui/material/Stack";
import SquareIcon from "@mui/icons-material/Square";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import topImg from "../assets/images/home/home-top.png";
import { Link } from "react-router-dom";
import {
  blackBg,
  primary,
  white,
  secondary,
  red,
  green,
  blackText,
  black,
  darkBg,
  secondaryWhite,
  dark2,
} from "../helpers/colors";
import Chip from "@mui/material/Chip";
import mobileImg from "../assets/images/mobile.png";
import PlayIcon from "./play_icon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import handWaveImg from "../assets/images/about/hand-wave.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import emailjs from "@emailjs/browser";
import {
  EmailJsPublicId,
  EmailJsServiceId,
  MailTemplateIDSeller,
  validateEmail,
} from "../helpers/config";
import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
const SlideInUpAnimation = keyframes`${slideInUp}`;
const SlideInUpDiv = styled.div`
  animation: 2s ${SlideInUpAnimation};
`;
export default function HeaderDesc() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const inputStyle = {
    color: black,
    borderRadius: 2.5,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: blackText,
      border: 1.5,
    },
    "&:hover > .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
    "&:focused > .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  };
  const handleClose = () => setOpen(false);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    overflow: "auto",
    height: isMobile ? "75%" : "65%",
    scrollbarWidth: "thin" /* "auto" or "thin" */,
    scrollbarColor: `${primary} grey`,
    transform: "translate(-50%, -50%)",
    width: isMobile ? 400 : isTablet ? 590 : 1000,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: isMobile ? 2 : 8,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError("Enter valid name");
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
      setSuccess("Sending...");
      setError("");

      emailjs
        .send(
          EmailJsServiceId,
          MailTemplateIDSeller,
          {
            name: name,
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
            setSuccess("");
            setError(error.text);
          }
        );
    }
  };
  return (
    <>
      <Stack
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          marginTop: isMobile ? 90 : 20,
        }}
      >
        <SlideInUpDiv>
          <Stack
            direction="row"
            justifyContent={"space-evenly"}
            mt={isMobile ? -8 : 6}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins, sans-serif",
                lineHeight: "30px",
                fontStyle: "normal",
                color: "#cdcdcd",
                textAlign: "center",
              }}
            >
              A marketplace where shopping, selling & socialising <br />{" "}
              seamlessly come together
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-evenly"}
            mt={isMobile ? 4 : 6}
          >
            <Chip
              icon={<PlayIcon />}
              label="Download on Google Play"
              sx={{
                height: "auto",
                background: blackBg,
                padding: "6px 20px",
                cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
                borderRadius: 30,
                "& .MuiChip-label": {
                  color: white,
                  display: "block",
                  fontWeight: 500,
                  whiteSpace: "normal",
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  lineHeight: "1.5rem",
                  fontSize: "0.9rem",
                },
              }}
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent={"space-evenly"}
            mt={isMobile ? 10 : 8}
          >
            <img
              src={mobileImg}
              alt="mobile"
              height={isMobile ? 450 : "auto"}
            />
          </Stack>
        </SlideInUpDiv>
      </Stack>
      <div
        style={{
          marginTop: isMobile ? -220 : -300,
        }}
      >
        <Stack
          style={{
            paddingTop: isMobile ? 280 : 400,
            paddingBottom: 80,
            alignItems: "center",
            background: darkBg,
          }}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              container
              spacing={{ xs: 4, sm: 4, md: 12 }}
              columns={{ sm: 12, md: 12 }}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Grid item xs={12} sm={6} md={6}>
                <div
                  style={{
                    marginLeft: isMobile || isTablet ? 18 : 100,
                    marginTop: isMobile ? 10 : 0,
                    marginRight: isMobile || isTablet ? 18 : 0,
                  }}
                >
                  <Stack
                    direction={"column"}
                    alignItems={isMobile ? "center" : "start"}
                  >
                    {isMobile || isTablet ? (
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "center",
                          color: white,
                          fontWeight: 500,
                          fontStyle: "normal",
                          lineHeight: "2.7rem",
                          textTransform: "uppercase",
                        }}
                      >
                        India’s First
                        <br />
                        Shopping social meadia
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        sx={{
                          color: white,
                          fontWeight: 500,
                          fontStyle: "normal",
                          lineHeight: "2.7rem",
                          textTransform: "uppercase",
                        }}
                      >
                        India’s First
                        <br />
                        Shopping
                        <br />
                        social meadia
                      </Typography>
                    )}
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: 2,
                        fontSize: 13,
                        color: secondaryWhite,
                        fontWeight: 600,
                        fontStyle: "normal",
                        lineHeight: isMobile || isTablet ? "1.3" : "1.5rem",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      a marketplace for both
                      {isMobile ? "" : <br />} sellers &amp; buyers
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: 2,
                        fontSize: 13,
                        textAlign: isMobile ? "center" : "start",
                        color: secondaryWhite,
                        fontWeight: 500,
                        fontStyle: "normal",
                        lineHeight: isMobile
                          ? "1.45"
                          : isTablet
                          ? "1.4"
                          : "1.5rem",
                      }}
                    >
                      Beyond everyone’s expectations we have constructed a
                      platform where the customer will get a complete
                      Live-Product shopping experience from sellers across the
                      country. We have created a marketplace, which is indeed
                      not just a marketplace, rather than a compilation of
                      E-commerce & social media, with features like live
                      shopping, E-shop monetization, Direct interaction.
                    </Typography>
                    <Stack direction={"row"} alignItems={"center"}>
                      <SquareIcon sx={{ color: white, fontSize: 16 }} />
                      <Stack>
                        <Typography
                          variant="h6"
                          sx={{
                            marginTop: 2,
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
                          CEO
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      mt={isMobile || isTablet ? 3 : 5}
                      ml={-1}
                    >
                      <div
                        style={{
                          background: dark2,
                          height: 50,
                          width: 50,
                          borderRadius: 25,
                          padding: 11,
                        }}
                      >
                        <NavigateNextOutlinedIcon
                          sx={{ color: white, fontSize: 26 }}
                        />
                      </div>
                      <Link to={"/about-us"} style={{ textDecoration: "none" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            marginLeft: 1.5,
                            fontSize: 13,
                            color: secondaryWhite,
                            fontWeight: 600,
                            fontStyle: "normal",
                            textDecoration: "none",
                          }}
                        >
                          Read more about us
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div
                  style={{
                    marginTop: isMobile ? 30 : isTablet ? 30 : 0,
                    marginLeft: isMobile ? 30 : 0,
                    marginRight: isMobile ? 20 : isTablet ? 13 : 0,
                  }}
                >
                  <img
                    src={topImg}
                    alt="shopping"
                    style={{
                      width: isMobile ? "90%" : isTablet ? "100%" : "85%",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Grid
              container
              spacing={{ xs: 2, md: 12 }}
              columns={{ sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Stack>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{
                      color: blackText,
                      fontWeight: 800,
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
                      variant={isMobile ? "h5" : "h4"}
                      sx={{
                        color: blackText,
                        fontWeight: 800,
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "left",
                      }}
                    >
                      Get in touch
                    </Typography>
                    <img
                      src={handWaveImg}
                      alt="hand wave"
                      height={isMobile ? 35 : 45}
                    />
                  </Stack>

                  <Stack
                    direction={"row"}
                    spacing={2}
                    style={{ marginTop: 30 }}
                  >
                    <LocalPhoneIcon sx={{ color: blackText, fontSize: 40 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: blackText,
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
                  <Stack
                    direction={"row"}
                    spacing={2}
                    style={{ marginTop: isMobile ? 20 : 30 }}
                  >
                    <EmailIcon sx={{ color: blackText, fontSize: 40 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: blackText,
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
                style={{ marginTop: isMobile || isTablet ? 20 : 0 }}
              >
                <FormControl fullWidth>
                  <OutlinedInput
                    placeholder="Enter full name"
                    size="small"
                    sx={inputStyle}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
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
                      background: secondary,
                      padding: "12px 30px",
                      color: white,
                      marginTop: 20,
                      borderRadius: 24,
                      outline: "none",
                      fontFamily: "Poppins, sans-serif",
                      border: "none",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    onClick={sendEmail}
                  >
                    {"Submit"}
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
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
