import { Chip, Grid, Typography } from "@mui/material";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import Stack from "@mui/material/Stack";
import { dark2, secondaryWhite, white } from "../helpers/colors";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import db from "../firebase";
import BlogGridView from "./blog_grid_view";
export default function HomeBlogs() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [blogs, setBlogs] = React.useState([]);

  const fetchBlogs = async () => {
    const response = db.collection("blogs");
    const data = await response.get();
    setBlogs([]);
    data.docs.forEach((item) => {
      setBlogs((blog) => blog.concat(item.data()));
    });
  };
  React.useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs);
  return (
    <Stack
      style={{
        marginTop: isMobile ? 60 : 100,
        alignItems: "center",
      }}
    >
      <Stack
        style={{ width: isMobile ? "85%" : isTablet ? "90%" : "70%" }}
        alignItems={"center"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <DynamicFeedOutlinedIcon sx={{ color: white }} />
          <Typography
            variant="h6"
            sx={{
              marginLeft: 1.5,
              fontSize: 13,
              color: secondaryWhite,
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            Latest posts
          </Typography>
        </Stack>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            marginTop: isMobile ? 0.5 : 1.2,
            marginBottom: isMobile ? 1.5 : 2.6,
            color: white,
            fontWeight: 500,
            fontStyle: "normal",
            lineHeight: "2.7rem",
            textTransform: "uppercase",
          }}
        >
          Let's check <b>Our Post</b>
        </Typography>
        <Chip
          label={"BROWSE ALL"}
          sx={{
            color: secondaryWhite,
            height: 45,
            width: 180,
            marginLeft: 3,
            marginBottom: isMobile ? 2 : 4,
            cursor: "pointer",
            borderRadius: 23,
            wordSpacing: 4,
            boxShadow:
              "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
            background: dark2,
            "& .MuiChip-label": {
              display: "block",
              fontWeight: "bold",
              fontStyle: "normal",
              fontFamily: "Poppins,sans-serif",
              lineHeight: "1.5rem",
              fontSize: "0.8rem",
            },
          }}
        />
        {blogs &&
          blogs.map((item) => <BlogGridView data={item} key={item.id} />)}
      </Stack>
    </Stack>
  );
}
