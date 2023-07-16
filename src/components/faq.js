import { black, white } from "../helpers/colors";
import { Grid, Stack, Typography } from "@mui/material";
import Faq from "react-faq-component";
const sellerFaq = {
  title: "FAQ (Seller)",
  rows: [
    {
      title: "What is Pherico",
      content: `Pherico is an online e-commerce marketplace with the test of social media.`,
    },
    {
      title: "How to open your virtual store in Pherico?",
      content:
        "Go to your account > switch to seller > Put your Store name & logo or photo > add your personal info with adhar number > select category of your product > select how you receive money.",
    },
    {
      title: "How to list your product?",
      content: `Just open the pehrico app and go to your seller account and click on products and there is a button to add product, click on that and fill all necessary details and submit.`,
    },
    {
      title: "How to go Live?",
      content: `Just open the pehrico app and go to your seller account and  click on floating button to go live.`,
    },
    {
      title:
        "What percent of commission Pherico charge on per product? Is there any subscription fees?",
      content: `Seller don’t have to pay any commission (Zero commission). A store subscription fees may be applicable.`,
    },
  ],
};
const buyerFaq = {
  title: "FAQ (Buyer)",
  rows: [
    {
      title: "What is Pherico",
      content: `Pherico is an online e-commerce marketplace with the test of social media.`,
    },
    {
      title: "How to open your virtual store in Pherico?",
      content:
        "Go to your account > switch to seller > Put your Store name & logo or photo > add your personal info with adhar number > select category of your product > select how you receive money.",
    },
    {
      title: "How to list your product?",
      content: `Just open the pehrico app and go to your seller account and click on products and there is a button to add product, click on that and fill all necessary details and submit.`,
    },
    {
      title: "How to go Live?",
      content: `Just open the pehrico app and go to your seller account and  click on floating button to go live.`,
    },
    {
      title:
        "What percent of commission Pherico charge on per product? Is there any subscription fees?",
      content: `Seller don’t have to pay any commission (Zero commission). A store subscription fees may be applicable.`,
    },
  ],
};
const styles = {
  // bgColor: 'white',
  titleTextColor: black,
  rowTitleColor: "#000000",
  rowContentColor: "#404040",
  // arrowColor: "red",
};
export default function FaqSection() {
  return (
    <div
      style={{
        marginTop: 50,
        paddingBottom: 70,
      }}
    >
      <Stack
        style={{ padding: "20px 100px" }}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <div>
          <Faq data={sellerFaq} styles={styles} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Faq data={buyerFaq} styles={styles} />
        </div>
      </Stack>
    </div>
  );
}
