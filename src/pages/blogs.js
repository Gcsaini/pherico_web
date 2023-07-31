import { Grid, Typography, Stack } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BlogGridView from "../components/blog_grid_view";
import blogHeaderImg from "../assets/images/blogs/blog_header_2.jpg";
import * as React from "react";
import db from "../firebase";
export default function Blogs() {
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
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 12 }}
            columns={{ sm: 8, md: 12 }}
            style={{ marginTop: 20, width: "90%" }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: "#FCFCFC",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  fontWeight: 600,
                  marginTop: 10,
                  lineHeight: "3.5rem",
                }}
              >
                Exploring the world through insightful articles and
                thought-provoking perspectives
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img src={blogHeaderImg} alt="blogs" height={420} />
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        style={{
          marginTop: 80,
          marginBottom: 80,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Stack style={{ width: "80%" }}>
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
            columns={{ sm: 8, md: 12 }}
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
