import { Avatar, colors, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as Faceicon,
  AlternateEmail as Usernameicon,
  CalendarMonth as Calendericon,
} from "@mui/icons-material";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginTop: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"bio"} text={"jashan is the best"} />
      <ProfileCard
        heading={"username"}
        text={"@jashansingh"}
        Icon={<Usernameicon />}
      />
      <ProfileCard
        heading={"name"}
        text={"jashanpreet singh"}
        Icon={<Faceicon />}
      />
      <ProfileCard
        heading={"joined"}
        text={moment("2023-01-01T18:30:00.000Z").fromNow()}
        Icon={<Calendericon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography color="gray" variant={"caption"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default Profile;
