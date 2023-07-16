import AboveFooter from "../components/above_footer";
import AppRating from "../components/app_rating";
import Footer from "../components/footer";
import HeaderDesc from "../components/header_desc";
import HeaderTitle from "../components/header_title";
import Navbar from "../components/navbar";
import ScrollEffectContent from "../components/scroll_effect_content";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderTitle />
      <HeaderDesc />
      <ScrollEffectContent />
      <AppRating />
      <AboveFooter />
      <Footer />
    </>
  );
}
