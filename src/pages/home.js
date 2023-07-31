import AboveFooter from "../components/above_footer";
import AppRating from "../components/app_rating";
import Footer from "../components/footer";
import HeaderDesc from "../components/header_desc";
import HeaderTitle from "../components/header_title";
import Navbar from "../components/navbar";
import * as React from "react";
import ScrollEffectContent from "../components/scroll_effect_content";
import HomeBlogs from "../components/home_blogs";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "../components/nav_drawer";
export default function Home() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? <NavDrawer /> : <Navbar />}
      <HeaderTitle />
      <HeaderDesc />
      <ScrollEffectContent />
      <AppRating />
      <HomeBlogs />
      <AboveFooter />
      <Footer />
    </>
  );
}
