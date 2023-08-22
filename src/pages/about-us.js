import AboutHeader from "../components/about_header";
import AboutUsContent from "../components/about_us_content";
import FoundersMessage from "../components/founder_message";
import OurTeam from "../components/our_team";
import Footer from "../components/footer";
import ContactSection from "../components/contact_section";
import FaqSection from "../components/faq";
import * as React from "react";
import db from "../firebase";

export default function AboutUs() {
  const [aboutData, setAboutData] = React.useState([]);
  const fetchData = async () => {
    const response = db.collection("about");
    const data = await response.get();
    data.docs.forEach((item) => {
      setAboutData(item.data());
    });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <AboutHeader data={aboutData} />
      <AboutUsContent data={aboutData} />
      {/* <FoundersMessage data={aboutData} /> */}
      <OurTeam />
      <ContactSection />
      <FaqSection />
      <Footer />
    </>
  );
}
