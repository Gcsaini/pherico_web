import Typography from "@mui/material/Typography";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { blackText, secondary } from "../helpers/colors";
import { useTypingText } from "../helpers/text_writer";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
const SlideInUpAnimation = keyframes`${slideInUp}`;
const SlideInUpDiv = styled.div`
  animation: 3s ${SlideInUpAnimation};
`;
export default function HeaderTitle() {
  const { word } = useTypingText(["Shop", "Sell", "& Scroll"], 130);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <SlideInUpDiv>
      <Stack
        direction="row"
        spacing={{ sm: 8, md: 12 }}
        justifyContent={"space-evenly"}
        style={{ marginTop: isMobile ? 70 : isTablet ? 50 : 0 }}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            lineHeight: isMobile ? "40px" : isTablet ? "50px" : "78px",
            color: blackText,
            textAlign: "center",
          }}
          mt={4}
        >
          India’s 1st
          <span style={{ color: secondary }}> E-commerce social</span> media,
          where you can
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
    </SlideInUpDiv>
  );
}
