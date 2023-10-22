import { Stack, Typography } from "@mui/material";
import ctosahab from "../assets/images/home/Gopi2.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import { white, secondaryWhite } from "../helpers/colors";
export default function CTOMessage() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div
      style={{
        height: "90%",
        marginLeft: isMobile ? 15 : 0,
        marginRight: isMobile ? 15 : 0,
      }}
    >
      <Typography
        variant="h6"
        component={"p"}
        sx={{
          fontSize: 13,
          textAlign: isMobile ? "center" : "start",
          color: secondaryWhite,
          fontWeight: 500,
          fontStyle: "normal",
          lineHeight: isMobile ? "1.45" : isTablet ? "1.4" : "1.5rem",
        }}
      >
        Technology Beyond everyone’s expectations we have constructed a platform
        where the customer will get a complete Live-Product shopping experience
        from sellers across the country. We have created a marketplace, which is
        indeed not just a marketplace, rather than a compilation of E-commerce &
        social media, with features like live shopping, E-shop monetization,
        Direct interaction.
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={isMobile ? "center" : "start"}
        style={{ marginTop: 15 }}
      >
        <Avatar alt="Remy Sharp" src={ctosahab} />
        <Stack>
          <Typography
            variant="h6"
            sx={{
              marginLeft: 1.5,
              fontSize: 14,
              color: white,
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "1.7rem",
            }}
          >
            Gopi chand
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginLeft: 1.5,
              fontSize: 13,
              color: secondaryWhite,
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "1rem",
            }}
          >
            CTO
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}
