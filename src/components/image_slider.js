import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import liveImg from "../assets/images/slider/live_shopping_experience.jpg";
import commsionImg from "../assets/images/slider/zero_comision.jpg";
import shoppingImg from "../assets/images/slider/request.jpg";
import earnImg from "../assets/images/slider/sell_earn.jpg";
import clickiesImg from "../assets/images/slider/clikies.jpg";
import { Stack, Typography } from "@mui/material";
import { grey, red, secondaryWhite, white } from "../helpers/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ImageSlider() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const styles = {
    slide1: {
      height: isMobile ? 440 : isTablet ? 405 : 640,
      width: "100%",
      backgroundSize: "100%",

      backgroundImage: `linear-gradient(rgba(244, 244, 244, 0), rgba(179, 179, 179, 0.1), rgba(98, 98, 98, 0.2), rgb(43,39,39)), url(${liveImg})`,
    },
    slide2: {
      height: isMobile ? 440 : isTablet ? 405 : 640,
      width: "100%",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `linear-gradient(rgba(244, 244, 244, 0), rgba(179, 179, 179, 0.1), rgba(98, 98, 98, 0.2), rgb(43,39,39)), url(${commsionImg})`,
    },
    slide3: {
      height: isMobile ? 440 : isTablet ? 405 : 640,
      width: "100%",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `linear-gradient(rgba(244, 244, 244, 0), rgba(179, 179, 179, 0.1), rgba(98, 98, 98, 0.2), rgb(43,39,39)), url(${shoppingImg})`,
    },
    slide4: {
      height: isMobile ? 440 : isTablet ? 405 : 640,
      width: "100%",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `linear-gradient(rgba(244, 244, 244, 0), rgba(179, 179, 179, 0.1), rgba(98, 98, 98, 0.2), rgb(43,39,39)), url(${earnImg})`,
    },
    slide5: {
      height: isMobile ? 440 : isTablet ? 405 : 640,
      width: "100%",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `linear-gradient(rgba(244, 244, 244, 0), rgba(179, 179, 179, 0.1), rgba(98, 98, 98, 0.2), rgb(43,39,39)), url(${clickiesImg})`,
    },
    overlay: {
      height: isTablet ? "96%" : "94%",
      marginLeft: isTablet ? 10 : 20,
      marginRight: isTablet ? 10 : 20,
    },
    imgCaptioTitle: {
      color: white,
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "1.5rem",
    },
    imgCaptioDesc: {
      marginTop: isTablet ? 8 : 1,
      color: secondaryWhite,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: isTablet ? "1rem" : "1.2rem",
    },
    imgStyle: {
      width: "100%",
      height: "90%",
      objectFit: "cover",
      "&:hover": {
        transform: "scale(1)",
      },
    },
  };
  return (
    <>
      {isMobile && isTablet && (
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography
            variant="h1"
            sx={{
              marginTop: 10,
              fontSize: 62,
              color: "#131313",
              fontWeight: 800,
              fontStyle: "normal",
              textAlign: "center",
              lineHeight: "4rem",
              textTransform: "uppercase",
              WebkitTextStrokeWidth: 1,
              WebkitTextStrokeColor: secondaryWhite,
            }}
          >
            WHY <br />
            PHERICO
          </Typography>
          <Typography
            variant="h1"
            sx={{
              marginTop: 2,
              fontSize: 22,
              color: "#fff",
              fontWeight: 500,
              fontStyle: "normal",
              textAlign: "center",
              lineHeight: "2rem",
            }}
          >
            We help shoppers find brands through
            <br /> engaging live and creative videos.
          </Typography>
        </Stack>
      )}

      <Swiper
        style={{
          width: isMobile || isTablet ? "96%" : "100%",
          height: "90%",
          borderRadius: 5,
          marginTop: isMobile || isTablet ? 70 : 100,
        }}
        loop={false}
        loopPreventsSliding={true}
        direction={"horizontal"}
        pagination={isMobile || isTablet ? true : false}
        autoplay={isMobile || isTablet ? true : false}
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 2,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.50": {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={
          isMobile || isTablet
            ? [Mousewheel, Pagination, Autoplay]
            : [Mousewheel]
        }
      >
        {!isMobile && !isTablet && (
          <SwiperSlide>
            <Stack justifyContent={"center"}>
              <Typography
                variant="h1"
                sx={{
                  marginTop: 17,
                  fontSize: 92,
                  color: "#131313",
                  fontWeight: 800,
                  fontStyle: "normal",
                  lineHeight: "8rem",
                  textTransform: "uppercase",
                  WebkitTextStrokeWidth: 1,
                  WebkitTextStrokeColor: secondaryWhite,
                }}
              >
                WHY PHERICO
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  marginTop: 2,
                  fontSize: 22,
                  color: grey,
                  fontWeight: 500,
                  fontStyle: "normal",
                  textAlign: "center",
                  lineHeight: "2rem",
                }}
              >
                We help shoppers find brands through
                <br /> engaging live and creative videos.
              </Typography>
            </Stack>
          </SwiperSlide>
        )}
        <SwiperSlide>
          <div style={styles.slide1}>
            <Stack
              justifyContent={"end"}
              alignItems={"start"}
              style={styles.overlay}
            >
              <Typography variant="h5" style={styles.imgCaptioTitle}>
                Experience <span style={{ color: red }}>Live</span> Shopping
              </Typography>
              <Typography variant="h6" style={styles.imgCaptioDesc}>
                Get the experience of live shopping, Ensure the best product
                quality from our side
              </Typography>
            </Stack>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.slide5}>
            <Stack
              justifyContent={"end"}
              alignItems={"start"}
              style={styles.overlay}
            >
              <Typography variant="h5" style={styles.imgCaptioTitle}>
                Clikies - Shop with reels
              </Typography>
              <Typography variant="h6" style={styles.imgCaptioDesc}>
                Dedicated short video format where the sellers can promote the
                products in a trendy way.
              </Typography>
            </Stack>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.slide4}>
            <Stack
              justifyContent={"end"}
              alignItems={"start"}
              style={styles.overlay}
            >
              <Typography variant="h5" style={styles.imgCaptioTitle}>
                Sell, Earn, Grow
              </Typography>
              <Typography variant="h6" style={styles.imgCaptioDesc}>
                Experience the thrill of shopping from live sellers. performance
                and comfort for every mode of use. The system utilises a
              </Typography>
            </Stack>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.slide2}>
            <Stack
              justifyContent={"end"}
              alignItems={"start"}
              style={styles.overlay}
            >
              <Typography variant="h5" style={styles.imgCaptioTitle}>
                0% Commission
              </Typography>
              <Typography variant="h6" style={styles.imgCaptioDesc}>
                Your earning is yours, we are bringing a 0% Commission
                policy,won’t have to pay any commission per sale
              </Typography>
            </Stack>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={styles.slide3}>
            <Stack
              justifyContent={"end"}
              alignItems={"start"}
              style={styles.overlay}
            >
              <Typography variant="h5" style={styles.imgCaptioTitle}>
                Request want you want
              </Typography>
              <Typography variant="h6" style={styles.imgCaptioDesc}>
                Before every live, you can request choice-able products to be
                demonstrated by sellers, who will showcase them for you.
              </Typography>
            </Stack>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
