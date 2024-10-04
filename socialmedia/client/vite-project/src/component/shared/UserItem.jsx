import {
  Avatar,
  IconButton,
  listClasses,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { React, memo } from "react";
import { Add as AddIcon } from "@mui/icons-material";

const UserItem = ({ user, userhandler, handlerisloading }) => {
  const { name, avatar, _id } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant={"body1"}
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "1",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>
        <IconButton
          onClick={() => userhandler(_id)}
          disabled={handlerisloading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
