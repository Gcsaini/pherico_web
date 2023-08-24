import { Grid, Stack, Typography } from "@mui/material";
import { hrLine, secondaryWhite, white } from "../helpers/colors";
import HighlightOutlinedIcon from "@mui/icons-material/HighlightOutlined";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function BlogGridView(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const data = props.data;
  return (
    <div
      style={{
        border: `1px solid ${hrLine}`,
        marginTop: 30,
        height: isMobile ? "auto" : 240,
      }}
    >
      <Grid
        container
        spacing={{ xs: 0, sm: 0, md: 6 }}
        columns={{ sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <img
            src={data.image1}
            alt="blog title"
            width={"100%"}
            height={isMobile ? "80%" : 238}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Stack
            justifyContent={"center"}
            style={{
              padding: isMobile ? "20px" : isTablet ? "20px" : "27px 0px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginLeft: 0.3,
                fontSize: 12,
                marginTop: isMobile ? -6 : 0,
                color: secondaryWhite,
                fontWeight: 600,
                fontStyle: "normal",
                lineHeight: "1rem",
              }}
            >
              {new Date(parseInt(data.updatedAt)).toDateString()}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: 1.5,
                fontSize: 19,
                color: white,
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "1rem",
              }}
            >
              {data.title.length > 55
                ? data.title.substr(0, 55) + "..."
                : data.title.substr(0, 55)}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: 12,
                marginTop: 2,
                color: secondaryWhite,
                fontWeight: 500,
                lineHeight: "1.3rem",
                maxLines: 3,
              }}
            >
              {data.desc1.substr(0, isTablet ? 140 : 207)}...
            </Typography>
            <Stack direction={"row"} mt={3}>
              <HighlightOutlinedIcon sx={{ color: white, height: 18 }} />
              <a
                href={`/blog-details/${data.id.trim()}`}
                style={{
                  color: secondaryWhite,
                  textTransform: "uppercase",
                  fontSize: 14,
                  paddingLeft: 2,
                  textDecorationColor: secondaryWhite,
                }}
              >
                Read Article
              </a>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
