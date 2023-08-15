import * as React from "react";
import { Grid, Typography } from "@mui/material";
import bgImg from "../assets/images/bg/header_bg.png";
import Stack from "@mui/material/Stack";
import {
  blackBg,
  greyText,
  primary,
  white,
  secondary,
  red,
  green,
  blackText,
  black,
} from "../helpers/colors";
import Chip from "@mui/material/Chip";
import mobileImg from "../assets/images/mobile.png";
import PlayIcon from "./play_icon";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sliderImg2 from "../assets/images/slider/slider_2.svg";
import sliderImg3 from "../assets/images/slider/slider_3.svg";
import sliderImg1Svg from "../assets/images/slider/slide_1.svg";
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
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"space-evenly"}
        mt={isMobile ? 6 : 2}
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins, sans-serif",
            lineHeight: "30px",
            fontStyle: "normal",
            color: greyText,
            textAlign: "center",
          }}
        >
          A marketplace where shopping, selling & socialising <br /> seamlessly
          come together
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent={"space-evenly"} mt={4}>
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
        mt={isMobile ? 12 : 8}
      >
        <img src={mobileImg} alt="mobile" height={isMobile ? 450 : "auto"} />
      </Stack>
      <div
        style={{
          background: "#121212",
          marginTop: -170,
          paddingTop: "260px",
          paddingBottom: 150,
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 12 }}
          columns={{ sm: 12, md: 12 }}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                marginLeft: isMobile ? 1 : isTablet ? 40 : 100,
                marginTop: isMobile ? 10 : 50,
              }}
            >
              <Stack direction={"column"}>
                <Typography
                  variant="h3"
                  sx={{
                    color: white,
                    fontWeight: 900,
                    whiteSpace: "normal",
                    fontStyle: "normal",
                    fontFamily: "Poppins,sans-serif",
                    lineHeight: "3.7rem",
                  }}
                >
                  200+
                  <br />
                  Sellers
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: white,
                    fontWeight: 600,
                    whiteSpace: "normal",
                    fontStyle: "normal",
                    fontFamily: "Poppins,sans-serif",
                    lineHeight: "3rem",
                  }}
                >
                  has already joined us
                </Typography>
                <Chip
                  label="Join us"
                  sx={{
                    marginTop: isMobile ? 5 : 10,
                    height: "auto",
                    width: 120,
                    color: "#FCFCFC",
                    padding: "7px 15px",
                    fontFamily: "Poppins, sans-serif",
                    cursor: "pointer",
                    borderRadius: 30,
                    boxShadow:
                      "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
                    background:
                      "linear-gradient(180deg, #F9881F 0%, #FF3A44 100%)",
                    "& .MuiChip-label": {
                      display: "block",
                      fontWeight: "bold",
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins",
                      lineHeight: "1.5rem",
                      fontSize: "0.9rem",
                    },
                  }}
                  onClick={() => handleOpen()}
                />
              </Stack>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div style={{ marginTop: isMobile ? 100 : isTablet ? 30 : 0 }}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                  height: isMobile ? 250 : isTablet ? 320 : 410,
                  borderRadius: 20,
                  width: isMobile ? 350 : isTablet ? 290 : 450,
                }}
              >
                <SwiperSlide>
                  <img src={sliderImg1Svg} alt="slider one" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sliderImg2} alt="slider 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sliderImg3} alt="slider 2" />
                </SwiperSlide>
              </Swiper>
            </div>
          </Grid>
        </Grid>
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
    </div>
  );
}
