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

          <p style={{ color: "#fff", marginTop: 20 }}>
            These Terms and Conditions ("Agreement") govern your use of the
            website (the "Website") operated by [Your Company Name] ("we,"
            "our," or "us"). By accessing or using this Website, you agree to
            comply with and be bound by these Terms and Conditions. If you do
            not agree with these Terms and Conditions, please do not use this
            Website.
          </p>
          <h3 style={colorWhite}>1. Acceptance of Terms</h3>
          <p style={colorWhite}>
            By using this Website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
          <h3 style={colorWhite}>2. Use of the Website</h3>
          <p style={colorWhite}>
            2.1. You agree to use this Website for lawful purposes only and in
            accordance with these Terms and Conditions.
            <br />
            2.2. You must be at least 12 years old to use this Website.
          </p>
          <h3 style={colorWhite}>3.User Registration</h3>
          <p style={colorWhite}>
            3.1. Some features of this Website may require you to register an
            account. You are responsible for maintaining the confidentiality of
            your account information and for all activities that occur under
            your account.
            <br />
            3.2. We reserve the right to suspend or terminate your account at
            our discretion if we believe you have violated these Terms and
            Conditions.
          </p>
          <h3 style={colorWhite}>4. Intellectual Property</h3>
          <p style={colorWhite}>
            4.1. All content on this Website, including but not limited to text,
            images, graphics, logos, and software, is our intellectual property
            and is protected by copyright and other applicable laws.
            <br />
            4.2. You may not reproduce, distribute, modify, or create derivative
            works from any content on this Website without our prior written
            consent.
          </p>
          <h3 style={colorWhite}>5. Product Information</h3>
          <p style={colorWhite}>
            5.1. We make every effort to ensure that the product information on
            our Website is accurate and up to date. However, we do not guarantee
            the accuracy, completeness, or reliability of this information.
            <br />
            5.2. Prices and availability of products are subject to change
            without notice.
          </p>
          <h3 style={colorWhite}>6. Orders and Payments</h3>
          <p style={colorWhite}>
            6.1. When you place an order on our Website, you agree to pay the
            specified price, including any applicable taxes and shipping fees.
            <br />
            6.2. We reserve the right to cancel any order for any reason, and in
            such cases, we will refund any payment made.
          </p>
          <h3 style={colorWhite}>7. Shipping and Delivery</h3>
          <p style={colorWhite}>
            Shipping and delivery times are estimates and may vary based on
            various factors. We are not responsible for any delays or issues
            with shipping.
          </p>
          <h3 style={colorWhite}>8. Returns and Refunds</h3>
          <p style={colorWhite}>
            Our return and refund policy is available on our Website and governs
            the process for returning products and requesting refunds.
          </p>
          <h3 style={colorWhite}>9. Privacy</h3>
          <p style={colorWhite}>
            Our Privacy Policy, available on our Website, explains how we
            collect, use, and protect your personal information. By using this
            Website, you agree to our Privacy Policy.
          </p>
          <h3 style={colorWhite}>10. Security</h3>
          <p style={colorWhite}>
            . We take reasonable measures to protect your data, but we do not
            guarantee the security of your personal information.
          </p>
          <h3 style={colorWhite}>11. Limitation of Liability</h3>
          <p style={colorWhite}>
            . We are not liable for any direct, indirect, incidental, special,
            or consequential damages arising out of or in connection with your
            use of this Website or the products and services offered on this
            Website.
          </p>
          <h3 style={colorWhite}>12. Indemnification</h3>
          <p style={colorWhite}>
            You agree to indemnify and hold us harmless from any claims, losses,
            or damages arising out of your use of this Website or your violation
            of these Terms and Conditions.
          </p>
          <h3 style={colorWhite}>13. Governing Law</h3>
          <p style={colorWhite}>
            This Agreement is governed by the laws of India, and any disputes
            shall be subject to the exclusive jurisdiction of the courts located
            in [City/State], India.
          </p>
          <h3 style={colorWhite}>14. Changes to Terms and Conditions</h3>
          <p style={colorWhite}>
            . We reserve the right to modify or update these Terms and
            Conditions at any time. Changes will be effective immediately upon
            posting on the Website. It is your responsibility to review these
            Terms and Conditions periodically.
          </p>
          <h3 style={colorWhite}>15. Contact Information</h3>
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
