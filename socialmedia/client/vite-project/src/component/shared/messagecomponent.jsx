import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import fileformat from "../../lib/Features";
import Renderattachment from "./Renderattachment";

const Messagecomponent = ({ message, user }) => {
  const { sender, content, createdat, attachment = [] } = message;
  const timeago = moment(createdat).fromNow();
  const samesender = sender._id === user._id;
  return (
    <div
      style={{
        alignSelf: samesender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!samesender && (
        <Typography color="#2694ab" fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachment.length > 0 &&
        attachment.map((attachment, index) => {
          const url = attachment.url;
          const file = fileformat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {Renderattachment(file, url)}
              </a>
            </Box>
          );
        })}
      <Typography variant="caption" color={"textSecondary"}>
        {timeago}
      </Typography>
    </div>
  );
};

export default memo(Messagecomponent);
