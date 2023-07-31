import * as React from "react";
import BlogGridView from "./blog_grid_view";
import { Grid, Stack, Typography } from "@mui/material";
import db from "../firebase";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function HomeBlogs() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [blogs, setBlogs] = React.useState([]);

  const fetchBlogs = async () => {
    const response = db.collection("blogs");
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs((blog) => blog.concat(item.data()));
    });
  };
  React.useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div
        style={{
          marginTop: 80,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Stack style={{ width: isTablet ? "90%" : "80%" }}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              Blogs
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#817B7B",
                fontWeight: 500,
                whiteSpace: "normal",
                fontStyle: "normal",
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Roboto,sans-serif",
                marginBottom: 5,
                marginTop: 1.5,
                lineHeight: isMobile ? "18px" : "20px",
              }}
            >
              Explore insightful articles and engaging content on various
              topics, curated to inspire, inform, and entertain.
            </Typography>
          </Stack>
          <Grid
            container
            spacing={{ xs: 4, sm: 6, md: 4 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={"space-evenly"}
          >
            {blogs &&
              blogs.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <BlogGridView data={item} />
                </Grid>
              ))}
          </Grid>
        </Stack>
      </div>
    </>
  );
}
