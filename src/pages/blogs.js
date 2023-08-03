import { Grid, Typography, Stack } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BlogGridView from "../components/blog_grid_view";
import blogHeaderImg from "../assets/images/blogs/blogs.png";
import * as React from "react";
import db from "../firebase";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavDrawer from "../components/nav_drawer";
export default function Blogs() {
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
    <div>
      <div
        style={{
          background: "#121212",
          marginTop: -20,
          paddingBottom: 70,
          paddingTop: 25,
        }}
      >
        {isMobile ? <NavDrawer /> : <Navbar />}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, sm: 0, md: 12 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ marginTop: 20, width: "90%" }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  color: "#FCFCFC",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: isMobile || isTablet ? "center" : "left",
                  fontWeight: 600,
                  marginTop: 10,
                  lineHeight: isMobile || isTablet ? "2.5rem" : "3.5rem",
                }}
              >
                Exploring the world through insightful articles and
                thought-provoking perspectives
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src={blogHeaderImg}
                alt="blogs"
                height={isMobile ? 280 : 420}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        style={{
          marginTop: isMobile ? 40 : 80,
          marginBottom: 80,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Stack style={{ width: isMobile || isTablet ? "90%" : "80%" }}>
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
                lineHeight: "1.2rem",
                textAlign: "center",
                fontFamily: "Roboto,sans-serif",
                marginBottom: 5,
              }}
            >
              Explore insightful articles and engaging content on various
              topics, curated to inspire, inform, and entertain.
            </Typography>
          </Stack>
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            columns={{ sm: 12, md: 12 }}
            justifyContent={"space-evenly"}
          >
            {blogs &&
              blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4}>
                  <BlogGridView data={blog} />
                </Grid>
              ))}
          </Grid>
        </Stack>
      </div>
      <Footer />
    </div>
  );
}
