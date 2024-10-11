import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleuser } from "../../constants/sampledata";
import UserItem from "../shared/UserItem";

const Addmemberdialog = ({ addmember, isloadingaddmember, chatid }) => {
  const [members, setmembers] = useState(sampleuser);
  const [selectedmembers, setselectedmembers] = useState([]);
  const selectmemberhandler = (id) => {
    setselectedmembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addmembersubmithandler = () => {
    console.log("submitted");
  };
  const closehandler = () => {
    setselectedmembers([]);
    setmembers([]);
  };
  return (
    <Dialog open onClose={closehandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}> Add Members </DialogTitle>
        <Stack>
          {members.length > 0 ? (
            members.map((user) => {
              return (
                <UserItem
                  key={user._id}
                  user={user}
                  userhandler={selectmemberhandler}
                  isadded={selectedmembers.includes(user._id)}
                />
              );
            })
          ) : (
            <Typography textAlign={"center"}>No friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button color="error" onClick={closehandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={addmembersubmithandler}
            disabled={isloadingaddmember}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default Addmemberdialog;
