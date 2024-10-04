import { AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
export const Avtarcard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((index, i) => {
            return (
              <Avatar
                alt={"Avatar"}
                key={Math.random() * 100}
                src={index}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + i}rem`,
                    sm: `${i}rem`,
                  },
                }}
              />
            );
          })}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};
