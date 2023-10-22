import { Stack, Typography } from "@mui/material";
import logo from "../assets/images/logo/logowhitetext.png";
import playStore from "../assets/images/play-store.svg";
import { dark, white } from "../helpers/colors";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
export default function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div
      style={{
        background: dark,
        paddingBottom: "50px",
        paddingTop: 40,
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
        <img src={logo} alt="pherico logo" height={50} width={240} />
        <Stack
          style={{
            width: isMobile ? "100%" : isTablet ? "90%" : "40%",
            marginTop: 20,
          }}
        >
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Link
              to={"/terms-and-conditions"}
              style={{
                fontFamily: "Poppins,sans-serif",
                lineHeight: "30px",
                fontStyle: "normal",
                color: white,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
            <Link
              to={"/privacy"}
              style={{
                fontFamily: "Poppins,sans-serif",
                lineHeight: "30px",
                fontStyle: "normal",
                color: white,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Privacy
            </Link>
            <Link
              to={"/about-us"}
              variant="h6"
              style={{
                fontFamily: "Poppins,sans-serif",
                lineHeight: "30px",
                fontStyle: "normal",
                color: white,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              to={"/career"}
              style={{
                fontFamily: "Poppins,sans-serif",
                lineHeight: "30px",
                fontStyle: "normal",
                color: white,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Careers
            </Link>

            <Link
              to={"/blogs"}
              style={{
                fontFamily: "Poppins,sans-serif",
                lineHeight: "30px",
                fontStyle: "normal",
                color: white,
                fontWeight: 500,
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              Blogs
            </Link>
          </Stack>
        </Stack>
        <img
          src={playStore}
          alt="pherico logo"
          style={{ marginTop: isMobile || isTablet ? 50 : 30 }}
        />
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins,sans-serif",
            lineHeight: "30px",
            fontStyle: "normal",
            color: white,
            marginTop: 20,
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          @pherico.live
        </Typography>
        {!isMobile && (
          <Stack
            style={{
              width: isTablet ? "90%" : "40%",
              marginTop: isTablet ? 40 : 20,
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <TwitterIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                <Typography
                  variant="h6"
                  style={{
                    cursor: "pointer",
                    fontFamily: "Poppins,sans-serif",
                    lineHeight: "30px",
                    fontStyle: "normal",
                    color: "#ccc",
                    marginLeft: 5,
                    fontWeight: 500,
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Twitter
                </Typography>
              </Stack>
              <Link
                to={"https://www.linkedin.com/company/pherico/"}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <LinkedInIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                  <Typography
                    variant="h6"
                    style={{
                      cursor: "pointer",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "30px",
                      fontStyle: "normal",
                      color: "#ccc",
                      marginLeft: 5,
                      fontWeight: 500,
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    LinkedIn
                  </Typography>
                </Stack>
              </Link>
              <Link
                to={
                  "https://www.facebook.com/people/Phericolive/100088986303289/?mibextid=ZbWKwL"
                }
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <FacebookIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                  <Typography
                    variant="h6"
                    style={{
                      cursor: "pointer",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "30px",
                      fontStyle: "normal",
                      color: "#ccc",
                      marginLeft: 5,
                      fontWeight: 500,
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Facebook
                  </Typography>
                </Stack>
              </Link>
              <Link
                to={"https://www.instagram.com/pherico.live/"}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <InstagramIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                  <Typography
                    variant="h6"
                    style={{
                      cursor: "pointer",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "30px",
                      fontStyle: "normal",
                      color: "#ccc",
                      marginLeft: 5,
                      fontWeight: 500,
                      fontSize: 15,

                      textAlign: "center",
                    }}
                  >
                    Instagram
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        )}
        {isMobile && (
          <Stack style={{ width: "95%", marginTop: 40 }}>
            <Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Link
                  to={
                    "https://www.facebook.com/people/Phericolive/100088986303289/?mibextid=ZbWKwL"
                  }
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <FacebookIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                    <Typography
                      variant="h6"
                      style={{
                        cursor: "pointer",
                        fontFamily: "Poppins,sans-serif",
                        lineHeight: "30px",
                        fontStyle: "normal",
                        color: "#ccc",
                        marginLeft: 5,
                        fontWeight: 500,
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Facebook
                    </Typography>
                  </Stack>
                </Link>
                <Link
                  to={"https://www.instagram.com/pherico.live/"}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <InstagramIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                    <Typography
                      variant="h6"
                      style={{
                        cursor: "pointer",
                        fontFamily: "Poppins,sans-serif",
                        lineHeight: "30px",
                        fontStyle: "normal",
                        color: "#ccc",
                        marginLeft: 5,
                        fontWeight: 500,
                        fontSize: 15,

                        textAlign: "center",
                      }}
                    >
                      Instagram
                    </Typography>
                  </Stack>
                </Link>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                style={{ marginTop: 20 }}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <TwitterIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                  <Typography
                    variant="h6"
                    style={{
                      cursor: "pointer",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "30px",
                      fontStyle: "normal",
                      color: "#ccc",
                      marginLeft: 5,
                      fontWeight: 500,
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Twitter
                  </Typography>
                </Stack>
                <Link
                  to={"https://www.linkedin.com/company/pherico/"}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <LinkedInIcon sx={{ color: "#ccc", cursor: "pointer" }} />
                    <Typography
                      variant="h6"
                      style={{
                        cursor: "pointer",
                        fontFamily: "Poppins,sans-serif",
                        lineHeight: "30px",
                        fontStyle: "normal",
                        color: "#ccc",
                        marginLeft: 5,
                        fontWeight: 500,
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      LinkedIn
                    </Typography>
                  </Stack>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        )}
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins,sans-serif",
            lineHeight: "30px",
            fontStyle: "normal",
            color: white,
            marginTop: 40,
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          © 2023 Pherico Pvt Ltd. All Rights Reserved
        </Typography>
      </Stack>
    </div>
  );
}
