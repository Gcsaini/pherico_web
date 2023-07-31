import { Stack, Typography } from "@mui/material";
import Navbar from "./navbar";
import Avatar from "@mui/material/Avatar";
import { white } from "../helpers/colors";
import * as React from "react";
export default function BlogDetailsHeader(props) {
  const data = props.data;
  return (
    <div
      style={{
        background: "#121212",
        marginTop: -20,
        paddingBottom: 70,
        paddingTop: 25,
      }}
    >
      <Navbar />
      <Stack
        direction={"row"}
        justifyContent={"center"}
        style={{ marginTop: 120 }}
      >
        <div style={{ width: "70%" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#FCFCFC",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            {data.title}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            style={{ marginTop: 100 }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Avatar src={data.authorProfile} sx={{ background: white }} />
              <Typography
                variant="h6"
                sx={{
                  color: "#FCFCFC",
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  marginLeft: 2,
                }}
              >
                {data.author}
              </Typography>
            </Stack>
            <Typography
              variant="h6"
              sx={{
                color: "#FCFCFC",
                fontWeight: 500,
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              {new Date(parseInt(data.updatedAt)).toDateString()}
            </Typography>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
