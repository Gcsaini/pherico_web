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
import Loader from "../components/loader";
import WorkTogether from "../components/work_together";
import { dark } from "../helpers/colors";
import BecomeSeller from "../components/become_seller";
import OurFeature from "../components/our_feature";
import Testimonials from "../components/testimonials";
export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isMobile ? <NavDrawer /> : <Navbar />}
          <HeaderTitle />
          <HeaderDesc />
          <OurFeature />
          <BecomeSeller />
          <AppRating />
          <Testimonials />
          <HomeBlogs />
          <WorkTogether />
          <Footer />
        </>
      )}
    </>
  );
}
