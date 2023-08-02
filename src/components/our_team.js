import { Stack, Typography, Grid } from "@mui/material";
import { black, white } from "../helpers/colors";
import founderImg from "../assets/images/about/gopi.jpg";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
export default function OurTeam() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Stack
      style={{
        padding: isMobile || isTablet ? "0px 20px" : "0px 60px",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div
        style={{
          paddingBottom: isMobile ? 10 : 70,
          width: isMobile ? "100%" : "80%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: black,
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
            whiteSpace: "nowrap",
            margin: isMobile ? 5 : 8,
          }}
        >
          Our Team
        </Typography>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          columns={{ sm: 12, md: 12 }}
          justifyContent={"center"}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3.5,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "300" : "240"}
                  width={"100%"}
                  image={founderImg}
                  alt="team1"
                />
                <CardContent
                  sx={{
                    background: black,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 17,
                      marginTop: -1.5,
                    }}
                  >
                    Gopi chand
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CTO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3.5,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "300" : "240"}
                  image={founderImg}
                  alt="green iguana"
                />
                <CardContent
                  sx={{
                    background: black,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 17,
                      marginTop: -1.5,
                    }}
                  >
                    Gopi chand
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CTO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3.5,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "300" : "240"}
                  image={founderImg}
                  alt="green iguana"
                />
                <CardContent
                  sx={{
                    background: black,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 17,
                      marginTop: -1.5,
                    }}
                  >
                    Gopi chand
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CTO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3.5,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "300" : "240"}
                  image={founderImg}
                  alt="green iguana"
                />
                <CardContent
                  sx={{
                    background: black,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 17,
                      marginTop: -1.5,
                    }}
                  >
                    Gopi chand
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CTO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3.5,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "300" : "240"}
                  image={founderImg}
                  alt="green iguana"
                />
                <CardContent
                  sx={{
                    background: black,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 17,
                      marginTop: -1.5,
                    }}
                  >
                    Ujjal
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CTO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3.5,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? "300" : "240"}
                  image={founderImg}
                  alt="green iguana"
                />
                <CardContent
                  sx={{
                    background: black,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 17,
                      marginTop: -1.5,
                    }}
                  >
                    Gopi chand
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: white,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CTO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
}
