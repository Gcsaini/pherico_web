import { Stack, Typography } from "@mui/material";
import * as React from "react";
export default function BlogContent(props) {
  const data = props.data;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: 70,
      }}
    >
      <Stack style={{ width: "80%" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#36344D",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
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
            marginTop: 8,
          }}
        >
          {data.desc2}
        </Typography>
        {data.image2 !== "" ?? (
          <img
            src={data.image1}
            alt={data.title}
            height={"50%"}
            style={{ marginTop: 50 }}
          />
        )}
      </Stack>
    </div>
  );
}
