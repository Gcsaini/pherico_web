import { Grid, Stack, Typography } from "@mui/material";
import { primary, secondary, white } from "../helpers/colors";
import handWaveImg from "../assets/images/about/hand-wave.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
export default function ContactSection() {
  const inputStyle = {
    color: white,
    borderRadius: 2.5,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: white,
    },
    "&:hover > .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
    "&:focused > .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  };
  return (
    <div
      style={{
        background: "#121212",
        marginTop: 100,
        paddingBottom: 70,
        paddingTop: 30,
      }}
    >
      <Stack
        style={{ padding: "20px 100px" }}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Typography
          variant="h4"
          sx={{
            color: white,
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
            textAlign: "left",
            marginTop: 5,
          }}
        >
          We love to here you,
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="h4"
            sx={{
              color: white,
              fontWeight: 800,
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
            }}
          >
            Get in touch
          </Typography>
          <img src={handWaveImg} alt="hand wave image" height={45} />
        </Stack>
        <Grid
          container
          spacing={{ xs: 2, md: 12 }}
          columns={{ sm: 8, md: 12 }}
          style={{ marginTop: 10 }}
        >
          <Grid item xs={12} sm={4} md={6}>
            <Stack>
              <Stack direction={"row"} spacing={2}>
                <LocationOnIcon sx={{ color: white, fontSize: 40 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: white,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: 17,
                  }}
                >
                  FX-12 Mediaplex Film City, Sector-16 Noida,
                  <br /> UP
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} style={{ marginTop: 30 }}>
                <LocalPhoneIcon sx={{ color: white, fontSize: 40 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: white,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: 17,
                  }}
                >
                  8755512976
                  <br />
                  9681285123
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} style={{ marginTop: 30 }}>
                <EmailIcon sx={{ color: white, fontSize: 40 }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: white,
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.5rem",
                    fontSize: 17,
                  }}
                >
                  pherico.live@gmail.com
                  <br />
                  support@pherico.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Stack direction={"row"} spacing={2}>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter first name"
                  size="small"
                  sx={inputStyle}
                />
              </FormControl>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter last name"
                  size="small"
                  sx={inputStyle}
                />
              </FormControl>
            </Stack>
            <Stack direction={"row"} spacing={2} style={{ marginTop: 20 }}>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter your phone"
                  size="small"
                  sx={inputStyle}
                />
              </FormControl>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder="Enter your mail"
                  size="small"
                  sx={inputStyle}
                />
              </FormControl>
            </Stack>

            <FormControl fullWidth style={{ marginTop: 20 }}>
              <OutlinedInput
                placeholder="Your message"
                size="small"
                sx={inputStyle}
                multiline={true}
                rows={4}
              />
            </FormControl>
            <button
              style={{
                background: secondary,
                padding: "12px 30px",
                color: white,
                marginTop: 20,
                borderRadius: 24,
                outline: "none",
                fontFamily: "Poppins, sans-serif",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Contact us
            </button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
