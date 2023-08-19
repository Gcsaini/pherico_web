import { Typography } from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";
import Stack from "@mui/material/Stack";
import { hrLine, secondaryWhite, white } from "../helpers/colors";
import * as React from "react";
export default function FeatureView(props) {
  return (
    <Stack direction={"column"}>
      {props.icon}
      <Typography
        variant="h5"
        sx={{
          color: white,
          fontWeight: 500,
          fontStyle: "normal",
          lineHeight: "2.7rem",
          textTransform: "uppercase",
        }}
      >
        {props.name}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontSize: 13,
          color: secondaryWhite,
          fontWeight: 600,
          fontStyle: "normal",
          lineHeight: "1.5rem",
        }}
      >
        {props.desc}
      </Typography>
      <div
        style={{
          marginTop: 20,
          height: 1,
          background: hrLine,
          margin: "15px 0px",
        }}
      ></div>
    </Stack>
  );
}
