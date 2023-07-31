import { Stack, Typography } from "@mui/material";
import { black, greyText, secondary } from "../helpers/colors";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import { useNavigate } from "react-router-dom";
export default function BlogGridView(props) {
  const data = props.data;
  const navigate = useNavigate();
  const redirectToBlog = (blogId) => {
    navigate(`/blog-details/${blogId}`);
  };
  return (
    <Stack
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: 10,
      }}
    >
      <img
        src={data.image1}
        alt={data.title}
        height={210}
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
      <Stack style={{ padding: 15 }}>
        {/* <Link
          to={`/blog-details/${data.id.trim()}`}
          style={{ textDecoration: "none" }}
        > */}
        <Typography
          variant="h6"
          sx={{
            color: black,
            fontWeight: 500,
            whiteSpace: "normal",
            fontStyle: "normal",
            fontFamily: "Poppins,sans-serif",
            lineHeight: 1,
            maxLines: 2,
            cursor: "pointer",
          }}
          onClick={() => redirectToBlog(data.id.trim())}
        >
          {data.title.length > 55
            ? data.title.substr(0, 55) + "..."
            : data.title.substr(0, 55)}
        </Typography>
        {/* </Link> */}
        <Typography
          variant="h6"
          sx={{
            color: greyText,
            fontWeight: 500,
            whiteSpace: "normal",
            fontStyle: "normal",
            fontFamily: "Poppins,sans-serif",
            fontSize: 16,
            lineHeight: "1.4rem",
            maxLines: 3,
            marginTop: 1,
          }}
        >
          {data.desc1.substr(0, 107)}...
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} mt={2}>
          <Stack direction={"row"}>
            <Avatar alt="author name" src={data.authorProfile} />
            <Typography
              variant="h6"
              sx={{
                color: secondary,
                fontWeight: 500,
                whiteSpace: "normal",
                fontStyle: "normal",
                fontFamily: "Poppins,sans-serif",
                fontSize: 16,
                lineHeight: "1.4rem",
                maxLines: 3,
                marginLeft: 1,
                marginTop: 1,
              }}
            >
              {data.author}
            </Typography>
          </Stack>
          <Typography
            variant="h6"
            sx={{
              color: greyText,
              fontWeight: 500,
              whiteSpace: "normal",
              fontStyle: "normal",
              fontFamily: "Poppins,sans-serif",
              fontSize: 16,
              lineHeight: "1.4rem",
              maxLines: 3,
              marginTop: 1,
            }}
          >
            {new Date(parseInt(data.updatedAt)).toDateString()}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
