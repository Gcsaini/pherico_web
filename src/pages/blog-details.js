import BlogContent from "../components/blog_content";
import BlogDetailsHeader from "../components/blog_details_header";
import Footer from "../components/footer";
import * as React from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function BlogDetails() {
  const { blogId } = useParams();
  const [blog, setBlog] = React.useState({});

  const fetchBlog = async () => {
    const response = db.collection("blogs");
    await response
      .doc(blogId)
      .get()
      .then((doc) => {
        setBlog(doc.data());
      });
  };

  React.useEffect(() => {
    fetchBlog();
  }, [blogId]);
  return (
    <>
      {blog === {} || blog === null ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <BlogDetailsHeader data={blog} />
          <BlogContent data={blog} />
          <Footer />
        </>
      )}
    </>
  );
}
