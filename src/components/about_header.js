import { Stack, Typography } from "@mui/material";
import * as React from "react";
import Navbar from "../components/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "./nav_drawer";
export default function AboutHeader(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const aboutData = props.data;
  return (
    <div
      style={{
        background: "#121212",
        marginTop: -20,
        paddingBottom: 70,
        paddingTop: 25,
      }}
    >
      {isMobile ? <NavDrawer /> : <Navbar />}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}
      >
        {aboutData && aboutData.about_header !== "" ? (
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              color: "#FCFCFC",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: aboutData.about_header }} />
          </Typography>
        ) : (
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              color: "#FCFCFC",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            We are empowering entrepreneurs <br />
            to chase their dreams
          </Typography>
        )}
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        style={{
          marginTop: isMobile ? 50 : 100,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        {aboutData && aboutData.about_header_desc !== "" ? (
          <Typography
            variant="h6"
            sx={{
              color: "#FCFCFC",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              fontSize: isMobile ? "15px" : "22px",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: aboutData.about_header_desc }}
            />
          </Typography>
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#FCFCFC",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              fontSize: isMobile ? "15px" : "22px",
            }}
          >
            Different categories of entrepreneurs will move like the headlines
            which shows <br />
            at the bottom of every news channel
          </Typography>
        )}
      </Stack>
      <Stack
        direction={"row"}
        style={{
          marginTop: 70,
          marginLeft: isMobile ? 10 : 20,
          marginRight: isMobile ? 10 : 20,
        }}
        justifyContent={
          isMobile
            ? "space-between"
            : isTablet
            ? "space-between"
            : "space-evenly"
        }
      >
        <Typography
          variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
          sx={{
            color: "#FCFCFC",
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Collaborate
        </Typography>
        <Typography
          variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
          sx={{
            color: "#FCFCFC",
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Create
        </Typography>
        <Typography
          variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
          sx={{
            color: "#FCFCFC",
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Communicate
        </Typography>
      </Stack>
    </div>
  );
}
