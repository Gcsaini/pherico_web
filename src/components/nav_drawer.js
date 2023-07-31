import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import { black, blackText } from "../helpers/colors";
import logo from "../assets/images/logo/logo.png";
import { Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open} sx={{ backgroundColor: black }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuOpenIcon sx={{ fontSize: 36 }} />
            </IconButton>
            <a href="/">
              <img
                src={logo}
                height={27}
                width={115}
                alt="logo"
                style={{ marginLeft: -15 }}
              />
            </a>
          </Toolbar>
          <Chip
            label="Download app"
            sx={{
              height: 35,
              color: "#FCFCFC",
              padding: "5px 6px",
              cursor: "pointer",
              borderRadius: 30,
              marginRight: 2,
              boxShadow:
                "0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
              background: "linear-gradient(180deg, #F9881F 0%, #FF3A44 100%)",
              "& .MuiChip-label": {
                display: "block",
                fontWeight: "bold",
                whiteSpace: "normal",
                fontStyle: "normal",
                fontFamily: "Poppins",
                lineHeight: "1.5rem",
                fontSize: "0.9rem",
              },
            }}
          />
        </Stack>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"home"} disablePadding>
            <Link to={"/"} style={{ textDecoration: "none", color: black }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: blackText }} />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key={"About us"} disablePadding>
            <Link
              to={"/about-us"}
              style={{ textDecoration: "none", color: black }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Diversity1Icon sx={{ color: blackText }} />
                </ListItemIcon>
                <ListItemText primary={"About us"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key={"Blogs"} disablePadding>
            <Link
              to={"/blogs"}
              style={{ textDecoration: "none", color: black }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BookIcon sx={{ color: blackText }} />
                </ListItemIcon>
                <ListItemText primary={"Blogs"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key={"Career"} disablePadding>
            <Link
              to={"/career"}
              style={{ textDecoration: "none", color: black }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <WorkIcon sx={{ color: blackText }} />
                </ListItemIcon>
                <ListItemText primary={"Career"} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
