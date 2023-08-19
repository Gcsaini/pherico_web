import { Grid, Typography } from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import Stack from "@mui/material/Stack";
import { secondaryWhite, white } from "../helpers/colors";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import FeatureView from "./feature_view";
export default function OurFeature() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const iconStyle = {
    color: white,
    fontSize: 35,
    marginBottom: 12,
  };
  return (
    <Stack
      style={{
        marginTop: isMobile || isTablet ? 80 : 150,
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
          Let's check <b>Our</b>
          <br />
          <b>Features</b>
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 6 }}
          columns={{ sm: 12, md: 12 }}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} sm={6} md={4}>
            <FeatureView
              name="Live Streaming"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis"
              icon={<LiveTvOutlinedIcon style={iconStyle} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureView
              name="Product listing"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis"
              icon={<WidgetsOutlinedIcon style={iconStyle} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureView
              name="Clickies"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis"
              icon={<AppShortcutOutlinedIcon style={iconStyle} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureView
              name="Clickies"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis"
              icon={<GrainIcon style={iconStyle} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureView
              name="Clickies"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis"
              icon={<GrainIcon style={iconStyle} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureView
              name="Clickies"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis"
              icon={<GrainIcon style={iconStyle} />}
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
