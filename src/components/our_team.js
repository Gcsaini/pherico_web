import { Stack, Typography, Grid } from "@mui/material";
import { dark, darkBg, hrLine, secondaryWhite, white } from "../helpers/colors";
import amit from "../assets/images/teams/amit_new.png";
import arijit from "../assets/images/teams/arijit_new.png";
import ujjal from "../assets/images/teams/ujjal_new.png";
import gopi from "../assets/images/teams/gopi_new.png";
import koyena from "../assets/images/teams/koyena_new.png";
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
        background: darkBg,
        marginTop: 100,
        padding: isMobile || isTablet ? "0px 20px" : "0px 60px",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div
        style={{
          paddingBottom: isMobile ? 10 : 50,
          width: isMobile ? "100%" : "80%",
        }}
      >
        <Stack alignItems={"center"}>
          <div
            style={{
              background: secondaryWhite,
              padding: 20,
              marginTop: 70,
              marginBottom: 70,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: dark,
                fontWeight: 600,
                fontSize: isMobile ? 22 : isTablet ? 26 : 30,
                fontStyle: "normal",
                lineHeight: "1rem",
                textTransform: "uppercase",
              }}
            >
              Our Team
            </Typography>
          </div>
        </Stack>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          columns={{ sm: 12, md: 12 }}
          justifyContent={"center"}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? 340 : 280}
                  width={"100%"}
                  image={ujjal}
                  alt="ujjal"
                  sx={{
                    objectFit: "fill",
                    transformOrigin: " 65% 75%",
                    transition: " transform 1s filter 0.5s ease-out",
                    filter: "brightness(100%)",
                  }}
                />
                <CardContent
                  sx={{
                    background: dark,
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
                    Ujjal Sarkar
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: secondaryWhite,
                      fontWeight: 500,
                      lineHeight: "0.5rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    Co-founder & CEO
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? 340 : 280}
                  image={gopi}
                  alt="Gopi chand"
                  sx={{ objectFit: "fill" }}
                />
                <CardContent
                  sx={{
                    background: dark,
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
                borderRadius: 0,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? 340 : 280}
                  image={koyena}
                  alt="Koyena roy"
                  sx={{ objectFit: "fill" }}
                />
                <CardContent
                  sx={{
                    background: dark,
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
                    koyena Roy
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
                    HR
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? 340 : 280}
                  image={amit}
                  alt=" Amit Kr.Bera"
                  sx={{ objectFit: "fill" }}
                />
                <CardContent
                  sx={{
                    background: dark,
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
                    Amit Kr.Bera
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
                    Marketting Head
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: "none",
                border: `1px solid ${hrLine}`,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={isMobile ? 340 : 280}
                  image={arijit}
                  alt="Arijit Biswas"
                  sx={{ objectFit: "fill" }}
                />
                <CardContent
                  sx={{
                    background: dark,
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
                    Arijit Biswas
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
                    Product Designer
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
