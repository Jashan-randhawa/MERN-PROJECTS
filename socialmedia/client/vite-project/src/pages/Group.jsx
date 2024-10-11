import {
  Add as AddIcon,
  BorderAllOutlined,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { samplechats, sampleuser } from "../constants/sampledata";
import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../component/style/Sylecomponent";
import { Avtarcard } from "../component/shared/avtarcard";
import UserItem from "../component/shared/UserItem";
const Confirmdeletedialog = lazy(() =>
  import("../component/dialogs/Confirmdeletedialog")
);
const Addmemberdialog = lazy(() =>
  import("../component/dialogs/Addmemberdialog")
);
const isaddmember = false;
const Group = () => {
  const [ismobilemenuopen, setismobilemenuopen] = useState(false);
  const [groupname, setgroupname] = useState("");
  const [groupnameupdatedvalue, setgroupnameupdatedvalue] = useState("");
  const navigate = useNavigate();
  const [confirmdeletedialog, setconfirmdeletedialog] = useState(false);
  const confirmdeletehandler = () => {
    setconfirmdeletedialog(true);
    console.log("deleted");
  };
  const closeconfirmdeletehandler = () => {
    setconfirmdeletedialog(false);
    console.log("deleted");
  };
  const openaddmember = () => {
    console.log("added");
  };
  const handlemobileclose = () => {
    setismobilemenuopen(false);
  };
  const deletehandler = () => {
    console.log("deleted");
  };
  const navigateback = () => {
    navigate("/");
  };
  const handlemobile = () => {
    setismobilemenuopen((prev) => !prev);
  };
  const chatid = useSearchParams()[0].get("group");
  const UpdateGroupName = () => {
    setisedit(false);
    console.log(groupnameupdatedvalue);
  };
  const removememberhandler = () => {
    console.log("removed");
  };
  const selectmemberhandler = () => {
    console.log("selected");
  };
  useEffect(() => {
    if (chatid) {
      setgroupname(`Group Name ${chatid}`);
      setgroupnameupdatedvalue(`Group Name ${chatid}`);
    }
    return () => {
      setgroupname("");
      setgroupnameupdatedvalue("");
      setisedit(false);
    };
  }, [chatid]);
  const [isedit, setisedit] = useState(false);
  const Buttongroup = (
    <>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        marginTop={"2rem"}
        sx={{
          direction: {
            xs: "column",
            sm: "column-reverse",
          },
          padding: {
            xs: "0rem",
            sm: "1rem",
            md: "1rem 4rem",
          },
        }}
      >
        <Button
          size="large"
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={confirmdeletehandler}
        >
          Delete Group
        </Button>
        <Button
          size="large"
          startIcon={<AddIcon />}
          variant="contained"
          onClick={openaddmember}
        >
          Add Members
        </Button>
      </Stack>
    </>
  );
  const Groupname = (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"1rem"}
        padding={"1rem"}
      >
        {isedit ? (
          <>
            <TextField
              value={groupnameupdatedvalue}
              onChange={(e) => setgroupnameupdatedvalue(e.target.value)}
            />
            <IconButton onClick={UpdateGroupName}>
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupname}</Typography>
            <IconButton onClick={() => setisedit(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );
  const Iconbtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            top: "2rem",
            right: "2rem",
          },
        }}
      >
        <IconButton onClick={handlemobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            "&:hover": {
              bgcolor: "black",
            },
          }}
          onClick={() => {
            navigateback();
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={" calc(100vh - 4rem) "}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        <Grouplist mygroups={samplechats} chatid={chatid} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {Iconbtns}
        {groupname && (
          <>
            {Groupname}
            <Typography
              sx={{ margin: "2rem", alignSelf: "flex-start", variant: "body1" }}
            >
              Members
            </Typography>
            <Stack
              sx={{
                maxWidth: "45rem",
                width: "100%",
                boxSizing: "border-box",
                padding: {
                  xs: "0",
                  sm: "1rem",
                  md: "1rem 4rem",
                },
                spacing: "1rem",
                bgcolor: "bisque",
                height: "50vh",
                overflow: "auto",
              }}
            >
              {sampleuser.map((user) => {
                return (
                  <UserItem
                    key={user._id}
                    user={user}
                    isadded
                    handler={removememberhandler}
                    userhandler={selectmemberhandler}
                    styling={{
                      border: "1px solid black",
                      boxshadow: "0 0 0.5rem rgba(0,0,0,0.8)",
                      padding: "1rem 2rem",
                      borderRadius: "1rem",
                    }}
                  />
                );
              })}
            </Stack>
            {Buttongroup}
          </>
        )}
      </Grid>
      {isaddmember && (
        <>
          <Suspense fallback={<Backdrop open />}>
            <Addmemberdialog />
          </Suspense>
        </>
      )}
      {confirmdeletedialog && (
        <>
          <Suspense fallback={<Backdrop open />}>
            <Confirmdeletedialog
              open={confirmdeletedialog}
              handleClose={closeconfirmdeletehandler}
              handleDelete={deletehandler}
            />
          </Suspense>
        </>
      )}
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={ismobilemenuopen}
        onClose={handlemobileclose}
      >
        <Grouplist w="50vw" mygroups={samplechats} chatid={chatid} />
      </Drawer>
    </Grid>
  );
};

const Grouplist = ({ w = "100%", mygroups = [], chatid }) => {
  return (
    <Stack width={w} sx={{ backgroundColor: "bisque", height: "100vh" }}>
      {mygroups.length > 0 ? (
        mygroups.map((group) => {
          return (
            <GroupListItem group={group} chatid={chatid} key={group._id} />
          );
        })
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatid }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatid === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack
        direction={"row"}
        p={"1rem"}
        alignItems={"center"}
        spacing={"1rem"}
      >
        <Avtarcard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;
