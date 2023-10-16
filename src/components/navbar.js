import * as React from "react";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
import { dark2, primary, white } from "../helpers/colors";
import Chip from "@mui/material/Chip";
import logo from "../assets/images/logo/logoooooooooooooo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
export default function Navbar() {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const pathname = window.location.pathname;
  var styles = {
    middleMenu: {
      background: dark2,
      padding: isTablet ? "6px 20px" : "8px 30px",
      borderRadius: "30px",
      boxShadow:
        "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
    },
    link: {
      color: white,
      textDecoration: " none",
      underline: "none",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      "&:hover": {
        color: red,
      },
    },
  };
  return (
    <div>
      <Stack
        direction="row"
        spacing={{ sm: 4, md: 12 }}
        justifyContent={"space-evenly"}
        mt={2}
      >
        <a href="/">
          <img
            src={logo}
            height={40}
            width={isTablet ? 160 : 170}
            alt="logo"
            style={{ marginLeft: isTablet ? 10 : 0 }}
          />
        </a>
        <div>
          <Stack
            direction="row"
            spacing={isTablet ? 4 : 8}
            style={styles.middleMenu}
            alignItems={"center"}
          >
            <Link style={styles.link} to={"/about-us"}>
              <span
                style={{
                  color: pathname === "/about-us" ? primary : white,
                  whiteSpace: "nowrap",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: 14,
                }}
              >
                About us
              </span>
            </Link>
            <Link style={styles.link} to={"/career"}>
              <span
                style={{
                  color: pathname === "/career" ? primary : white,
                  fontFamily: "Poppins,sans-serif",
                  fontSize: 14,
                }}
              >
                Career
              </span>
            </Link>
            <Link to={"/blogs"} style={styles.link}>
              <span
                style={{
                  color:
                    pathname === "/blogs" || pathname === "/blog-details"
                      ? primary
                      : white,
                  fontFamily: "Poppins,sans-serif",
                  fontSize: 14,
                }}
              >
                Blogs
              </span>
            </Link>
          </Stack>
        </div>
        <Chip
          label={isTablet ? "Download app" : "Download the app"}
          sx={{
            height: "auto",
            color: "#FCFCFC",
            padding: "5px 15px",
            cursor: "pointer",
            borderRadius: 30,
            fontFamily: "Poppins,sans-serif",
            whiteSpace: "nowrap",
            boxShadow:
              "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
            background: "linear-gradient(180deg, #F9881F 0%, #FF3A44 100%)",
            "& .MuiChip-label": {
              display: "block",
              fontWeight: "bold",
              fontStyle: "normal",
              fontFamily: "Poppins,sans-serif",
              lineHeight: "1.5rem",
              fontSize: "0.8rem",
            },
          }}
        />
      </Stack>
    </div>
  );
}
