import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import { Calculate, Padding } from "@mui/icons-material";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title title="Social Media App" />
        <Header />

        <Grid container height={" calc(100vh - 4rem) "}>
          <Grid
            item
            xs={4}
            md={3}
            sx={{ display: { xs: "none", md: "block" } }}
            height={"100%"}
          >
            first
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              Padding: "2rem",
              bgcolor: "rgba(0, 0, 0, 0.5)",
            }}
            height={"100%"}
          >
            first
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
