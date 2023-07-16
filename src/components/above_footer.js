import { Stack, Typography } from "@mui/material";
import termsBg from "../assets/images/bg/term_bg.svg";
import feePlanBg from "../assets/images/bg/fee_plan.svg";
import supportBg from "../assets/images/bg/support_bg.svg";
import { black, primary, secondary, white } from "../helpers/colors";
import { purple } from "@mui/material/colors";

export default function AboveFooter() {
  return (
    <div style={{ padding: "80px 50px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <div
          style={{
            backgroundImage: `url(${termsBg})`,
            height: 130,
            width: "33%",
            backgroundSize: "100% 130px",
            textAlign: "center",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ height: 130, width: "60%" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: white,
                fontWeight: 500,
                whiteSpace: "normal",
                fontStyle: "normal",
                marginLeft: 10,
                textAlign: "left",
                fontFamily: "Poppins,sans-serif",
                lineHeight: "1.1rem",
                fontSize: 14,
              }}
            >
              New age banking demands &nbsp;
              <span style={{ color: primary }}>
                transparent terms and conditions
              </span>
            </Typography>
          </Stack>
        </div>
        <div
          style={{
            backgroundImage: `url(${feePlanBg})`,
            height: 130,
            width: "33%",
            backgroundSize: "100% 130px",
            textAlign: "center",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ height: 130, width: "60%" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: white,
                fontWeight: 500,
                whiteSpace: "normal",
                fontStyle: "normal",
                marginLeft: 5,
                textAlign: "left",
                fontFamily: "Poppins,sans-serif",
                lineHeight: "1.2rem",
                fontSize: 14,
              }}
            >
              Affordable plans
              <br />
              <span style={{ color: primary }}>fees and charges.</span>
            </Typography>
          </Stack>
        </div>
        <div
          style={{
            backgroundImage: `url(${supportBg})`,
            height: 130,
            width: "33%",
            backgroundSize: "100% 130px",
            textAlign: "center",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ height: 130, width: "60%" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#9C34C2",
                fontWeight: 500,
                whiteSpace: "normal",
                fontStyle: "normal",
                marginLeft: 12,
                textAlign: "left",
                fontFamily: "Poppins,sans-serif",
                lineHeight: "1.1rem",
                fontSize: 14,
              }}
            >
              Write to us at &nbsp;
              <span style={{ color: black, fontFamily: "Poppins, sans-serif" }}>
                support@pherico.com
              </span>
            </Typography>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
