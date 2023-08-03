import { black, grey, grey_black } from "../helpers/colors";
import { Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import db from "../firebase";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function FaqSection() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [sellerFaq, setSellerFaq] = React.useState([]);
  const [buyerFaq, setBuyerFaq] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = db.collection("faq");
    const data = await response.get();

    data.docs.forEach((item) => {
      if (item.data().seller) {
        setSellerFaq((seller) => seller.concat(item.data()));
      } else {
        setBuyerFaq((buyer) => buyer.concat(item.data()));
      }
    });
  };
  const acordianStyle = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    border: "none",
    boxShadow: "none",
    borderBottom: `1px solid ${grey}`,
    marginBottom: 2,
    "&:last-child": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTop: "none",
      borderBottom: `1px solid ${grey}`,
    },
    "&:before": {
      height: 0,
    },
  };

  return (
    <Stack
      style={{ padding: isMobile || isTablet ? "0px 20px" : "0px 100px" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div
        style={{
          width: isMobile || isTablet ? "100%" : "80%",
        }}
      >
        <Stack
          style={{ padding: isMobile || isTablet ? "0px 20px" : "20px 100px" }}
          justifyContent={"center"}
          alignItems={isMobile ? "center" : "start"}
        >
          <Typography
            variant="h4"
            sx={{
              color: black,
              fontWeight: 800,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              margin: 8,
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Stack>
      </div>
      <Grid
        container
        spacing={{ xs: 4, md: 12 }}
        columns={{ sm: 12, md: 12 }}
        style={{ marginBottom: 50 }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <div>
            <Typography
              variant="h6"
              sx={{
                color: grey_black,
                fontWeight: 800,
                fontFamily: "Poppins, sans-serif",
                marginBottom: 2,
              }}
            >
              Buyer
            </Typography>
            {buyerFaq &&
              buyerFaq.map((item) => (
                <Accordion sx={acordianStyle}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.ans}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div>
            <Typography
              variant="h6"
              sx={{
                color: grey_black,
                fontWeight: 800,
                fontFamily: "Poppins, sans-serif",
                marginBottom: 2,
              }}
            >
              Seller
            </Typography>
            {sellerFaq &&
              sellerFaq.map((item) => (
                <Accordion sx={acordianStyle}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.ans}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
}
