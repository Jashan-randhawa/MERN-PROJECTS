import React, { Suspense, useState } from "react";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Search = React.lazy(() => import("../specific/Search"));
const Notificationdialog = React.lazy(() => import("../specific/Notification"));
const Newgroupdialog = React.lazy(() => import("../dialogs/Newgroups"));

const Header = () => {
  const navigate = useNavigate;
  const [ismobile, setismobile] = useState(false);
  const [issearch, setissearch] = useState(false);
  const [isnewgroup, setisnewgroup] = useState(false);
  const [isnotification, setisnotification] = useState(false);

  const handlemobile = () => {
    setismobile((prev) => !prev);
  };
  const opensearchdialog = () => {
    setissearch((prev) => !prev);
  };
  const opennewgroup = () => {
    setisnewgroup((prev) => !prev);
  };
  const opennotification = () => {
    setisnotification((prev) => !prev);
  };
  const navigatetogroup = () => {
    navigate("/groups");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "#ea7070" }} height={"4rem"}>
        <AppBar position=" static" />
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            APP
          </Typography>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton color="inherit" onClick={handlemobile}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Tooltip title="search">
              <IconButton
                color="inherit"
                size="large"
                onClick={opensearchdialog}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="new group">
              <IconButton color="inherit" size="large" onClick={opennewgroup}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="manage groups">
              <IconButton
                color="inherit"
                size="large"
                onClick={navigatetogroup}
              >
                <GroupIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="notification">
              <IconButton
                color="inherit"
                size="large"
                onClick={opennotification}
              >
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="logout">
              <IconButton color="inherit" size="large">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Box>
      {issearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search></Search>
        </Suspense>
      )}

      {isnotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notificationdialog></Notificationdialog>
        </Suspense>
      )}

      {isnewgroup && (
        <Suspense fallback={<Backdrop open />}>
          <Newgroupdialog></Newgroupdialog>
        </Suspense>
      )}
    </>
  );
};

export default Header;
