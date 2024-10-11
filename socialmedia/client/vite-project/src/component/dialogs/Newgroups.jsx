import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleuser } from "../../constants/sampledata";
import UserItem from "../shared/UserItem";

const Newgroups = () => {
  const [members, setmembers] = useState(sampleuser);
  const [selectedmembers, setselectedmembers] = useState([]);
  const groupname = useInputValidation("");
  const submithandler = () => {};
  const closehandler = () => {};

  const selectmemberhandler = (id) => {
    setmembers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, isadded: !user.isadded } : user
      )
    );

    setselectedmembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  return (
    <Dialog open onClose={closehandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupname.value}
          onChange={groupname.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => {
            return (
              <UserItem
                user={user}
                key={user._id}
                userhandler={selectmemberhandler}
                isadded={selectedmembers.includes(user._id)}
              />
            );
          })}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" size="large" color="error">
            Cancel
          </Button>
          <Button size="large" variant="contained" onClick={submithandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default Newgroups;
