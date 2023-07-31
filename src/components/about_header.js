import { Stack, Typography } from "@mui/material";
import * as React from "react";
import Navbar from "../components/navbar";
export default function AboutHeader(props) {
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
      <Navbar />
      <Stack
        direction={"row"}
        justifyContent={"center"}
        style={{ marginTop: 100 }}
      >
        {aboutData && aboutData.about_header !== "" ? (
          <Typography
            variant="h3"
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
            variant="h3"
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
        style={{ marginTop: 100 }}
      >
        {" "}
        {aboutData && aboutData.about_header_desc !== "" ? (
          <Typography
            variant="h6"
            sx={{
              color: "#FCFCFC",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
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
        style={{ marginTop: 70 }}
        justifyContent={"space-evenly"}
      >
        <Typography
          variant="h4"
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
          variant="h4"
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
          variant="h4"
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
