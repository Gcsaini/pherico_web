import AboutHeader from "../components/about_header";
import AboutUsContent from "../components/about_us_content";
import FoundersMessage from "../components/founder_message";
import OurTeam from "../components/our_team";
import Footer from "../components/footer";
import ContactSection from "../components/contact_section";
import FaqSection from "../components/faq";

export default function AboutUs() {
  return (
    <>
      <AboutHeader />
      <AboutUsContent />
      <FoundersMessage />
      <OurTeam />
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  );
}
