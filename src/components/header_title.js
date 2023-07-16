import Typography from "@mui/material/Typography";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { blackText, secondary } from "../helpers/colors";
import { useTypingText } from "../helpers/text_writer";
export default function HeaderTitle() {
  const { word } = useTypingText(["Shop", "Sell", "& Scroll"], 130);
  return (
    <>
      <Stack
        direction="row"
        spacing={{ sm: 8, md: 12 }}
        justifyContent={"space-evenly"}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            lineHeight: "78px",
            color: blackText,
          }}
          mt={4}
        >
          India’s 1st
          <span style={{ color: secondary }}> E-commerce social</span> media,
          where you
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent={"space-evenly"}>
        <Typography
          variant="h4"
          style={{ fontWeight: 600, fontFamily: "Poppins, sans-serif" }}
        >
          {word}
        </Typography>
      </Stack>
    </>
  );
}
