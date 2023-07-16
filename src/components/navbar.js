import * as React from "react";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
import { blackBg, secondary, white } from "../helpers/colors";
import Chip from "@mui/material/Chip";
import logo from "../assets/images/logo/logo.png";
var styles = {
  middleMenu: {
    background: blackBg,
    padding: "6px 30px",
    borderRadius: "30px",
    boxShadow:
      "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
  },
  link: {
    color: white,
    textDecoration: " none",
    underline: "none",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    "&:hover": {
      color: red,
    },
  },
};
export default function Navbar() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={{ sm: 8, md: 12 }}
        justifyContent={"space-evenly"}
        mt={2}
      >
        <a href="/">
          <img src={logo} height={30} width={130} />
        </a>
        <div>
          <Stack
            direction="row"
            spacing={8}
            style={styles.middleMenu}
            alignItems={"center"}
          >
            <a style={styles.link} href="/about-us">
              About us
            </a>
            <a style={styles.link} href="/career">
              Career
            </a>
            <a href="" style={styles.link}>
              Blogs
            </a>
          </Stack>
        </div>
        <Chip
          label="Download the app"
          sx={{
            height: "auto",
            color: "#FCFCFC",
            padding: "5px 15px",
            cursor: "pointer",
            borderRadius: 30,
            boxShadow:
              "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
            background: "linear-gradient(180deg, #F9881F 0%, #FF3A44 100%)",
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
        />
      </Stack>
    </div>
  );
}
