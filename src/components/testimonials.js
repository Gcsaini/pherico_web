import { darkBg, secondaryWhite, white } from "../helpers/colors";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialView from "./testimonial_view";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Testimonials() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Stack
      style={{
        paddingTop: isMobile ? 50 : 100,
        marginTop: isMobile ? 50 : 100,
        paddingBottom: 80,
        alignItems: "center",
        background: darkBg,
      }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        style={{ width: isMobile ? "90%" : isTablet ? "85%" : "75%" }}
      >
        <Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Diversity2OutlinedIcon sx={{ color: white }} />
            <Typography
              variant="h6"
              sx={{
                marginLeft: 1.5,
                fontSize: 13,
                color: secondaryWhite,
                fontWeight: 600,
                fontStyle: "normal",
                lineHeight: "1rem",
                textTransform: "uppercase",
              }}
            >
              testimonials
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            sx={{
              marginTop: 1,
              marginBottom: isMobile || isTablet ? 4 : 7,
              color: white,
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "2.7rem",
              textTransform: "uppercase",
            }}
          >
            What People <b>are Saying</b>
          </Typography>
        </Stack>
        <Swiper
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 5,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          direction={"horizontal"}
          mousewheel={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.50": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation, Autoplay, Mousewheel]}
        >
          <SwiperSlide style={{ borderRadius: 0 }}>
            <TestimonialView />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialView />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialView />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialView />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialView />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialView />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Stack>
  );
}
