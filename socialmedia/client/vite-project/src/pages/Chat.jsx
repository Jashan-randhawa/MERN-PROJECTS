import React, { Fragment, useRef } from "react";
import Applayout from "../component/layout/Applayout";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { Inputbox } from "../component/style/Sylecomponent";
import FileMenu from "../component/dialogs/FileMenu";
import { samplemessage } from "../constants/sampledata";
import Messagecomponent from "../component/shared/messagecomponent";

const user = {
  _id: "wqdqef",
  name: "Sahil",
};

const Chat = () => {
  const containerref = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerref}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(247,247,247,1)"}
        height={"90%"}
        sx={{
          overflowx: "hidden",
          overflowY: "auto",
        }}
      >
        {samplemessage.map((message) => {
          return <Messagecomponent message={message} user={user} />;
        })}
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          position={"relative"}
          alignItems={"center"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "5px",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <Inputbox placeholder="Enter Message here..." />
          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              bgcolor: "#ea7070",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  );
};

export default Applayout()(Chat);
