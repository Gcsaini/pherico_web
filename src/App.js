import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Career from "./pages/career";
import BlogDetails from "./pages/blog-details";
import Blogs from "./pages/blogs";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details/:blogId" element={<BlogDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
