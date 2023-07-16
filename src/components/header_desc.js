import { Typography } from "@mui/material";
import bgImg from "../assets/images/bg/header_bg.png";
import Stack from "@mui/material/Stack";
import { blackBg, greyText, white } from "../helpers/colors";
import Chip from "@mui/material/Chip";
import mobileImg from "../assets/images/mobile.png";
import PlayIcon from "./play_icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sliderImg2 from "../assets/images/slider/slider_2.svg";
import sliderImg3 from "../assets/images/slider/slider_3.svg";
import sliderImg1Svg from "../assets/images/slider/slide_1.svg";
export default function HeaderDesc() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack direction="row" justifyContent={"space-evenly"} mt={2}>
        <Typography
          variant="h6"
          style={{
            fontFamily: "Poppins, sans-serif",
            lineHeight: "30px",
            fontStyle: "normal",
            color: greyText,
            textAlign: "center",
          }}
        >
          A marketplace where shopping, selling & socialising <br /> seamlessly
          come together
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent={"space-evenly"} mt={4}>
        <Chip
          icon={<PlayIcon />}
          label="Download on Google Play"
          sx={{
            height: "auto",
            background: blackBg,
            padding: "6px 20px",
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
            borderRadius: 30,
            "& .MuiChip-label": {
              color: white,
              display: "block",
              fontWeight: 500,
              whiteSpace: "normal",
              fontStyle: "normal",
              fontFamily: "Poppins",
              lineHeight: "1.5rem",
              fontSize: "0.9rem",
            },
          }}
        />
      </Stack>
      <Stack direction="row" justifyContent={"space-evenly"} mt={4}>
        <img src={mobileImg} />
      </Stack>
      <div
        style={{
          background: "#121212",
          marginTop: -170,
          paddingTop: "260px",
          paddingBottom: 150,
        }}
      >
        <Stack
          direction="row"
          spacing={{ sm: 8, md: 12 }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Stack direction={"column"}>
            <Typography
              variant="h3"
              sx={{
                color: white,
                fontWeight: 900,
                whiteSpace: "normal",
                fontStyle: "normal",
                fontFamily: "Poppins,sans-serif",
                lineHeight: "3.7rem",
              }}
            >
              200+
              <br />
              Sellers
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: white,
                fontWeight: 600,
                whiteSpace: "normal",
                fontStyle: "normal",
                fontFamily: "Poppins,sans-serif",
                lineHeight: "3rem",
              }}
            >
              has already joined us
            </Typography>
            <Chip
              label="Join us"
              sx={{
                marginTop: 10,
                height: "auto",
                width: 120,
                color: "#FCFCFC",
                padding: "7px 15px",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                borderRadius: 30,
                boxShadow:
                  "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
                background: "linear-gradient(180deg, #F9881F 0%, #FF3A44 100%)",
                "& .MuiChip-label": {
                  display: "block",
                  fontWeight: "bold",
                  whiteSpace: "normal",
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  lineHeight: "1.5rem",
                  fontSize: "0.9rem",
                },
              }}
            />
          </Stack>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ height: 410, borderRadius: 20 }}
          >
            <SwiperSlide>
              <img src={sliderImg1Svg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg3} />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </div>
    </div>
  );
}
