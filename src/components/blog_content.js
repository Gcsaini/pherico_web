import { Stack, Typography } from "@mui/material";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function BlogContent(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const data = props.data;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: isMobile ? 40 : 70,
      }}
    >
      <Stack style={{ width: isMobile ? "90%" : "80%" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#36344D",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            fontSize: isMobile ? 17 : 18,
          }}
        >
          {data.desc1}
        </Typography>
        <img
          src={data.image1}
          alt={data.title}
          height={"50%"}
          style={{ marginTop: 50 }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#36344D",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            fontSize: isMobile ? 17 : 18,
            marginTop: isMobile ? 6 : 8,
          }}
        >
          {data.desc2}
        </Typography>
        {data.image2 !== "" && (
          <img
            src={data.image2}
            alt={data.title}
            height={"50%"}
            style={{ marginTop: 50 }}
          />
        )}
      </Stack>
    </div>
  );
}
