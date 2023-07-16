import bgImg from "../assets/images/bg/header_bg.png";
import Stack from "@mui/material/Stack";
import { black, grey, greyText, secondary } from "../helpers/colors";
import { Typography } from "@mui/material";
import img1 from "../assets/images/slider/slider_1.png";
import React from "react";
import liveImg from "../assets/images/live.svg";
import choiseImg from "../assets/images/choice.svg";
import zeroCommisionImg from "../assets/images/no-charge.svg";
import clickiesImg from "../assets/images/clickies.svg";
import extraImg from "../assets/images/extra.svg";
export default function ScrollEffectContent() {
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
          <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <Stack>
                  <Typography
                    variant="h4"
                    sx={{
                      color: black,
                      fontWeight: 900,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "2.5rem",
                    }}
                  >
                    Don’t just buy Experience it
                    <span
                      style={{
                        color: secondary,
                      }}
                    >
                      live!
                    </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#817B7B",
                      fontWeight: 500,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontSize: 16,
                      fontFamily: "Roboto,sans-serif",
                    }}
                  >
                    Experience the thrill of shopping from live sellers.
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={liveImg} alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_2">
            <div class="card__content">
              <div>
                <Stack>
                  <Typography
                    variant="h4"
                    sx={{
                      color: black,
                      fontWeight: 900,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "2.5rem",
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
                      fontSize: 16,
                      fontFamily: "Roboto,sans-serif",
                    }}
                  >
                    Keep 100% of your sales to yourself.
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={zeroCommisionImg} alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_3">
            <div class="card__content">
              <div>
                <Stack>
                  <Typography
                    variant="h4"
                    sx={{
                      color: black,
                      fontWeight: 900,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "2.5rem",
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
                      fontSize: 16,
                      fontFamily: "Roboto,sans-serif",
                    }}
                  >
                    Don’t just stop at profits, opportunity to earn extra with
                    us!
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={extraImg} alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_4">
            <div class="card__content">
              <div>
                <Stack>
                  <Typography
                    variant="h4"
                    sx={{
                      color: black,
                      fontWeight: 900,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "2.5rem",
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
                      fontSize: 16,
                      fontFamily: "Roboto,sans-serif",
                    }}
                  >
                    Request what you like from a huge range of products.
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={choiseImg} alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_5">
            <div class="card__content">
              <div>
                <Stack>
                  <Typography
                    variant="h4"
                    sx={{
                      color: black,
                      fontWeight: 900,
                      whiteSpace: "normal",
                      fontStyle: "normal",
                      fontFamily: "Poppins,sans-serif",
                      lineHeight: "2.5rem",
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
                      fontSize: 16,
                      fontFamily: "Roboto,sans-serif",
                    }}
                  >
                    Don’t just stop at profits, opportunity to earn extra with
                    us!
                  </Typography>
                </Stack>
              </div>
              <figure>
                <img src={clickiesImg} alt="Image description" />
              </figure>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}
