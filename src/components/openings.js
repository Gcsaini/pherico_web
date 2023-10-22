import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Stack, Typography } from "@mui/material";
import {
  black,
  dark2,
  darkBg,
  greyText,
  primary,
  secondaryWhite,
  white,
} from "../helpers/colors";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import useMediaQuery from "@mui/material/useMediaQuery";
const jobDesc = [
  [
    {
      desc: "We are looking for a passionate UI/UX Designer with high expertise in Photoshop, Adobe XD, Figma and Illustrator.",
    },
    {
      desc: "Develop UI mock-ups and prototypes that clearly illustrate how sites or mobile apps function and look like ",
    },
    {
      desc: "Gather and evaluate user requirements in collaboration with developers and client ",
    },
    {
      desc: "Illustrate design ideas using storyboards, process flows and sitemaps ",
    },
    {
      desc: "Developing and conceptualizing a comprehensive UI/UX design strategy for the brand ",
    },
    {
      desc: "A portfolio of professional UI/UX design work for both web and mobile platforms. ",
    },
    {
      desc: "Multi-tasking and time-management skills, with the ability to prioritize tasks. ",
    },
  ],
  [
    {
      desc: " Bachelor's degree in computer science, information science, or similar.",
    },
    {
      desc: "Minimum 1 yr of experience as a Flutter developer.",
    },
    {
      desc: " Knowledge of common mobile project architectures, their pros and cons depending on project size.",
    },
    {
      desc: "Knowledge of modern authorization mechanisms, such as JSON Web Token and Firebase.",
    },
    {
      desc: "Design and develop high-volume, low-latency applications for mission-critical systems and delivering high-availability and performance.",
    },
    {
      desc: "Investigate alternatives and technologies and present them for architectural review, in order to support continuous improvement.",
    },
    {
      desc: "Required to attend the morning/ client/ conference calls.",
    },
    {
      desc: "Candidates must update their skills on regular basis.",
    },
    {
      desc: "Hands on experience with popular React.Js workflows (such as Redux or Flux).",
    },
  ],
  [
    {
      desc: "Acording to corporate coding standards.",
    },
    {
      desc: "Translating designs and wireframes into high-quality code.",
    },
    {
      desc: "Responsible for the quality of code and application.",
    },
    {
      desc: "Troubleshooting interface software and debugging application codes.",
    },
    {
      desc: "Ability to understand business requirements & translate them into technical requirements.",
    },
    {
      desc: "Coordinate with other team members to ensure that all TMs are working in sync",
    },
    {
      desc: "Required to attend the morning/ client/ conference calls.",
    },
    {
      desc: "Candidates must update their skills on regular basis.",
    },
    {
      desc: "Hands on experience with popular React.Js workflows (such as Redux or Flux).",
    },
  ],
];

export default function Openings() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const handleOpen = (ind) => {
    setIndex(ind);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    overflow: "auto",
    height: "80%",
    scrollbarWidth: "thin" /* "auto" or "thin" */,
    scrollbarColor: `${primary} grey`,
    transform: "translate(-50%, -50%)",
    width: isMobile ? 400 : isTablet ? 590 : 800,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    zIndex: 9,
  };
  return (
    <div
      style={{
        background: darkBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 80,
      }}
    >
      <Stack style={{ width: isMobile ? "90%" : "80%", marginTop: 50 }}>
        <Typography
          variant="h6"
          sx={{
            color: secondaryWhite,

            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            fontSize: 15,
            marginTop: 3,
          }}
        >
          Our openings
        </Typography>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            color: white,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            fontWeight: 600,
          }}
        >
          Let's do something amazing
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            color: white,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            fontWeight: 600,
            marginTop: 2,
            marginBottom: 1,
          }}
        >
          Design<span style={{ color: "#1694EE" }}>&nbsp;(1)</span>
        </Typography>
        <div
          style={{
            background: "rgb(230, 230, 230)",
            padding: "10px 15px",
            borderRadius: 12,
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  color: black,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: isMobile ? 15 : 16,
                }}
              >
                UI/UX Designer
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: black,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Remote-India
              </Typography>
            </Stack>
            <button
              style={{
                background: black,
                padding: "10px 30px",
                color: white,
                height: 40,
                borderRadius: 25,
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(0)}
            >
              View position
            </button>
          </Stack>
        </div>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            color: white,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            fontWeight: 600,
            marginTop: 5,
          }}
        >
          Development(2)
        </Typography>
        <div
          style={{
            background: "rgb(230, 230, 230)",
            padding: "10px 15px",
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  color: black,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: isMobile ? 15 : 16,
                }}
              >
                Flutter Developer
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: black,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Remote-India
              </Typography>
            </Stack>
            <button
              style={{
                background: black,
                padding: "10px 30px",
                color: white,
                height: 40,
                borderRadius: 25,
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(1)}
            >
              View position
            </button>
          </Stack>
        </div>
        <div
          style={{
            background: "rgb(230, 230, 230)",
            padding: "10px 15px",
            borderRadius: 12,
            marginTop: 14,
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  color: black,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: isMobile ? 15 : 16,
                }}
              >
                React Developer
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: black,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontSize: 16,
                }}
              >
                Remote-India
              </Typography>
            </Stack>
            <button
              style={{
                background: black,
                padding: "10px 30px",
                color: white,
                height: 40,
                borderRadius: 25,
                outline: "none",
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => handleOpen(0)}
            >
              View position
            </button>
          </Stack>
        </div>
      </Stack>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Job Description
            </Typography>
            <Stack style={{ marginLeft: 30, marginTop: 10, marginBottom: 10 }}>
              <ol
                id="transition-modal-description"
                sx={{ listStyleType: "decimal" }}
              >
                {jobDesc[index].map((item) => (
                  <li>{item.desc}</li>
                ))}
              </ol>
            </Stack>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              How to Apply
            </Typography>
            <Stack style={{ marginLeft: 14 }}>
              Send your resume at hr@pherico.com
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
