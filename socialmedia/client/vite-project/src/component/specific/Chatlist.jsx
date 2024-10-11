import { Stack } from "@mui/material";
import React from "react";
import Chatitem from "../shared/Chatitem";

const Chatlist = ({
  w = "100%",
  chats = [],
  chatid,
  onlineuser = [],
  newmessagesalert = [
    {
      chatid: "",
      count: 0,
    },
  ],
  handledeletechat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupchat, members } = data;
        const newmessagealert = newmessagesalert.find((chatid) => chatid, _id);
        const isonline = members?.some((member) => {
          onlineuser.includes(_id);
        });
        return (
          <Chatitem
            index={index}
            newmessagealert={newmessagealert}
            isonline={isonline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupchat={groupchat}
            samesender={chatid === _id}
            handledeletechat={handledeletechat}
          />
        );
      })}
    </Stack>
  );
};

export default Chatlist;
