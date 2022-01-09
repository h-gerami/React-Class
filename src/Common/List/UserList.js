import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const UserList = ({ listHeading, listDetails, userImg }) => {
  //   const { listHeading, listDetails, userImg } = props;
  //   const test = {
  //     name: "hossein",
  //     lastName: "Gerami",
  //   };
  //   console.log(test.name, " === >name");
  //   const { name } = test;
  //   console.log(name, "destructuring");
  //   console.log(listHeading, "list heading");
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src={userImg} />
      </ListItemAvatar>
      <ListItemText
        primary={listHeading}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h6"
              color="text.primary"
            >
              to Scott, Alex, Jennifer
            </Typography>
            {listDetails}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
export default UserList;
