import { Grid, Typography } from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Stack from "@mui/material/Stack";
import { secondaryWhite, white } from "../helpers/colors";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useInView } from "react-intersection-observer";
import FeatureView from "./feature_view";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import InsightsIcon from "@mui/icons-material/Insights";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const FadeInRightAnimation = keyframes`${slideInLeft}`;
const FadeInRightDiv = styled.div`
  animation: 3s ${FadeInRightAnimation};
`;
export default function OurFeature() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const iconStyle = {
    color: white,
    fontSize: 35,
    marginBottom: 12,
  };
  return (
    <div ref={ref}>
      {inView && (
        <FadeInRightDiv>
          <Stack
            style={{
              marginTop: isMobile || isTablet ? 80 : 100,
              alignItems: "center",
            }}
          >
            <Stack style={{ width: isMobile || isTablet ? "90%" : "80%" }}>
              <Stack direction={"row"} alignItems={"center"}>
                <GrainIcon sx={{ color: white }} />
                <Typography
                  variant="h6"
                  sx={{
                    marginLeft: 1.5,
                    fontSize: 13,
                    color: secondaryWhite,
                    fontWeight: 600,
                    fontStyle: "normal",
                    lineHeight: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  Introducting pherico
                </Typography>
              </Stack>
              <Typography
                variant="h4"
                sx={{
                  marginTop: 1,
                  marginBottom: 7,
                  color: white,
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "2.7rem",
                  textTransform: "uppercase",
                }}
              >
                Let's check
                <br />
                <b> Our Features</b>
              </Typography>

              <Grid
                container
                spacing={{ xs: 4, sm: 4, md: 6 }}
                columns={{ sm: 12, md: 12 }}
                justifyContent={"space-between"}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <FeatureView
                    name="Live shop & Clickies"
                    desc="Interact with your audience, answer questions on live, 
                    dedicated short video format where  sellers can promote the products in a trendy way."
                    icon={<LiveTvOutlinedIcon style={iconStyle} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FeatureView
                    name="Insights"
                    desc="Our automated in depth business insigths will help you to manage ur business, You can monitor your orders,views and total sales 
                    "
                    icon={<InsightsIcon style={iconStyle} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FeatureView
                    name="Delivery"
                    desc="You can choose your delivery partnet as per your conveince,one store with multiple location can ship products from multiple warehouses across india"
                    icon={<LocalShippingIcon style={iconStyle} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FeatureView
                    name="0% Commission"
                    desc="Your earning is yours, we are bringing a 0% Commission policy, where the sellers connecting with our platform won’t have to pay any commission per sale."
                    icon={<CurrencyRupeeIcon style={iconStyle} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FeatureView
                    name="Easy Store-front"
                    desc="Get your storefront in less than 5 minutes and list all of your products without worrying about any limit. Show and sale all products without any restrictions."
                    icon={<StoreIcon style={iconStyle} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FeatureView
                    name="24*7 customer support"
                    desc="We believe that you all make us! So we are always here for you. 
                    100% curated support to all the consumers & sellers 24*7 regarding any grievances/queries."
                    icon={<SupportAgentIcon style={iconStyle} />}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </FadeInRightDiv>
      )}
    </div>
  );
}
