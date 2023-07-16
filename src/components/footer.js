import { Stack, Typography } from "@mui/material";
import logo from "../assets/images/logo/logo.svg";
import playStore from "../assets/images/play-store.svg";
import { white } from "../helpers/colors";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div style={{ background: "#13151F", paddingBottom: "50px" }}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <img src={logo} alt="pherico logo" />
        <Stack style={{ width: "40%", marginTop: -70 }}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <a
              href=""
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
            </a>
            <a
              href=""
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
            </a>
            <a
              href="/about-us"
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
            </a>
            <a
              href="/career"
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
            </a>

            <a
              href=""
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
            </a>
          </Stack>
        </Stack>
        <img src={playStore} alt="pherico logo" style={{ marginTop: 30 }} />
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
        <Stack style={{ width: "40%", marginTop: 20 }}>
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
            <a
              href="https://www.linkedin.com/company/pherico/"
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
            </a>
            <a
              href="https://www.facebook.com/people/Phericolive/100088986303289/?mibextid=ZbWKwL"
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
            </a>
            <a
              href="https://www.instagram.com/pherico.live/"
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
            </a>
          </Stack>
        </Stack>
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
