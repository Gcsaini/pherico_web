import { Stack } from "@mui/material";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "../components/nav_drawer";
export default function PrivacyPolicy() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const colorWhite = {
    color: "#fff",
    marginTop: 20,
  };
  return (
    <div
      style={{
        background: "#121212",
        marginTop: -20,
        paddingBottom: 70,
        paddingTop: 25,
      }}
    >
      {isMobile ? <NavDrawer /> : <Navbar />}
      <Stack
        justifyContent={"center"}
        direction={"row"}
        style={{ background: "#262626", marginTop: 30 }}
      >
        <Stack
          justifyContent={"center"}
          style={{ width: "90%", marginTop: 20 }}
        >
          <h2
            style={{ display: "flex", justifyContent: "center", color: "#fff" }}
          >
            Privacy and Policy
          </h2>

          <h3 style={colorWhite}>1. Introduction</h3>
          <p style={colorWhite}>
            Welcome to Pherico ("we," "us," or "our"). We respect your privacy
            and are committed to protecting your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your personal data when you visit or make use of our e-commerce
            website. By using our services, you consent to the practices
            described in this policy.
          </p>
          <h3 style={colorWhite}>2. Information We Collect</h3>
          <p style={colorWhite}>
            <b>2.1 Personal Information:</b> Name, Contact Information (email
            address, phone number, shipping address) Billing Information (credit
            card details, payment information).
            <br />
            <b>2.2 Non-Personal Information:</b> Browsing and usage data Cookies
            and tracking information.
          </p>
          <h3 style={colorWhite}>3. How We Use Your Information</h3>
          <p style={colorWhite}>
            We use your personal information for the following purposes:
          </p>
          <p style={colorWhite}>
            <b>3.1 Order Processing:</b> <br />
            To process and fulfill orders To provide order and shipping updates
            <br />
            <b>3.2 Customer Support:</b>
            <br />
            -To respond to your inquiries and requests
            <br />
            -To provide customer assistance and support
            <br />
            <b>3.3 Marketing:</b>
            <br />
            -To send promotional emails (you can opt-out at any time)
            <br />
            -To personalize your shopping experience <br />
            -To conduct market research and analysis
            <br />
            <b>3.4 Legal Compliance:</b>
            <br />
            To comply with legal requirements and regulations
          </p>
          <h3 style={colorWhite}>4. Information Sharing</h3>

          <p style={colorWhite}>We may share your personal information with:</p>
          <p style={colorWhite}>
            <b>4.1 Service Providers:</b> Third-party companies and individuals
            who help us with website maintenance, payment processing, and other
            services.
            <br />
            <b>4.2 Legal Requirements:</b> In compliance with legal obligations,
            we may disclose your information to law enforcement agencies or
            government authorities.
          </p>
          <h3 style={colorWhite}>5. Cookies and Tracking Technologies</h3>
          <p style={colorWhite}>
            We use cookies and similar technologies to enhance your browsing
            experience and collect information about your interactions with our
            website. You can manage your cookie preferences through your browser
            settings.
          </p>
          <h3 style={colorWhite}>6. Data Security</h3>
          <p style={colorWhite}>
            We employ industry-standard security measures to protect your
            personal data from unauthorized access, disclosure, alteration, or
            destruction.
          </p>
          <h3 style={colorWhite}>7. Your Rights</h3>
          <p style={colorWhite}>
            You have the following rights concerning your personal information:
          </p>
          <p style={colorWhite}>
            <b>7.1 Access and Correction: </b> You can access and update your
            personal information. <br /> <b>7.2 Data Deletion: </b> You can
            request the deletion of your personal data.
            <br />
            <b>7.3 Withdraw Consent: </b> You can withdraw your consent for data
            processing at any time.
            <br />
          </p>
          <h3 style={colorWhite}>8. Changes to this Privacy Policy</h3>
          <p style={colorWhite}>
            We reserve the right to make changes to this Privacy Policy. The
            date of the latest revision will be displayed at the top of this
            policy.
          </p>

          <h3 style={colorWhite}>9. Contact Us</h3>
          <p style={colorWhite}>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at pherico.live@gmail.com.
            <br />
            <br />
            <br />
            <br />
          </p>
        </Stack>
        <br />
      </Stack>
      <Footer />
    </div>
  );
}
