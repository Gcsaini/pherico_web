import bgImg from "../assets/images/bg/header_bg.png";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { black, secondary } from "../helpers/colors";
import { Typography } from "@mui/material";
import liveImg from "../assets/images/live.svg";
import choiseImg from "../assets/images/choice.svg";
import zeroCommisionImg from "../assets/images/no-charge.svg";
import clickiesImg from "../assets/images/clickies.svg";
import extraImg from "../assets/images/extra.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ScrollEffectContent() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        marginTop: 100,
      }}
    >
      <main>
        <ul id="cards">
          <li className="card" id="card_1">
            <div
              className="card__content"
              style={{ marginTop: isMobile || isTablet ? "70px" : "0px" }}
            >
              <div>
                <Stack>
                  <Typography
                    variant={isMobile ? "h6" : "h4"}
                    sx={{
                      color: black,
                      fontWeight: 600,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: isMobile ? "1.5rem" : "2.5rem",
                    }}
                  >
                    Don’t just buy Experience it
                    <span
                      style={{
                        color: secondary,
                      }}
                    >
                      &nbsp;live!
                    </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#817B7B",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginTop: 2,
                      fontSize: isMobile ? 15 : 16,
                      fontFamily: "Roboto,sans-serif",
                      lineHeight: isMobile ? "17px" : "20px",
                    }}
                  >
                    Experience the thrill of shopping from live sellers.
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={liveImg} alt="description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_2">
            <div
              className="card__content"
              style={{ marginTop: isMobile || isTablet ? "70px" : "0px" }}
            >
              <div>
                <Stack>
                  <Typography
                    variant={isMobile ? "h6" : "h4"}
                    sx={{
                      color: black,
                      fontWeight: 600,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: isMobile ? "1.5rem" : "2.5rem",
                    }}
                  >
                    Zero Commission Maximum Freedom
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#817B7B",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginTop: 2,
                      fontSize: isMobile ? 15 : 16,
                      fontFamily: "Roboto,sans-serif",
                      lineHeight: isMobile ? "17px" : "20px",
                    }}
                  >
                    Keep 100% of your sales to yourself.
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={zeroCommisionImg} alt=" description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_3">
            <div
              className="card__content"
              style={{ marginTop: isMobile || isTablet ? "70px" : "0px" }}
            >
              <div>
                <Stack>
                  <Typography
                    variant={isMobile ? "h6" : "h4"}
                    sx={{
                      color: black,
                      fontWeight: 600,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: isMobile ? "1.5rem" : "2.5rem",
                    }}
                  >
                    Extra Revenue at Your Fingertips
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#817B7B",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginTop: 2,
                      fontSize: isMobile ? 15 : 16,
                      fontFamily: "Roboto,sans-serif",
                      lineHeight: isMobile ? "17px" : "20px",
                    }}
                  >
                    Don’t just stop at profits, opportunity to earn extra with
                    us!
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={extraImg} alt=" description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_4">
            <div
              className="card__content"
              style={{ marginTop: isMobile || isTablet ? "70px" : "0px" }}
            >
              <div>
                <Stack>
                  <Typography
                    variant={isMobile ? "h6" : "h4"}
                    sx={{
                      color: black,
                      fontWeight: 600,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: isMobile ? "1.5rem" : "2.5rem",
                    }}
                  >
                    Prioritising your choices
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#817B7B",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginTop: 2,
                      fontSize: isMobile ? 15 : 16,
                      fontFamily: "Roboto,sans-serif",
                      lineHeight: isMobile ? "17px" : "20px",
                    }}
                  >
                    Request what you like from a huge range of products.
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={choiseImg} alt=" description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_5">
            <div
              className="card__content"
              style={{ marginTop: isMobile || isTablet ? "70px" : "0px" }}
            >
              <div>
                <Stack>
                  <Typography
                    variant={isMobile ? "h6" : "h4"}
                    sx={{
                      color: black,
                      fontWeight: 600,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: isMobile ? "1.5rem" : "2.5rem",
                    }}
                  >
                    Introducing Clickies
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#817B7B",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      marginTop: 2,
                      fontSize: isMobile ? 15 : 16,
                      fontFamily: "Roboto,sans-serif",
                      lineHeight: isMobile ? "17px" : "20px",
                    }}
                  >
                    Don’t just stop at profits, opportunity to earn extra with
                    us!
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={clickiesImg} alt=" description" />
              </figure>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}
