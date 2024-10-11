import React from "react";
import Applayout from "../component/layout/Applayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"rgba(247,247,247,1)"} height={"100%"}>
      <Typography p={"2rem"} textAlign={"center"} variant="h5">
        Select a Friend to chat
      </Typography>
    </Box>
  );
};

export default Applayout()(Home);
