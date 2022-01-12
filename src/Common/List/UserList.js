import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Apple, Watch } from "@mui/icons-material";
const UserList = (props) => {
  console.log(props, "UserList Props");
  const { listHeading, listDetails, userImg, isApple } = props;
  //   const test = {
  //     name: "hossein",
  //     lastName: "Gerami",
  //   };
  //   console.log(test.name, " === >name");
  //   const { name } = test;
  //   console.log(name, "destructuring");
  //   console.log(listHeading, "list heading");
  console.log(isApple, "isApple");
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        {/* <Avatar alt="Travis Howard" src={userImg} /> */}
        {isApple ? <Apple /> : <Watch />}
        {isApple && <p>asdsd</p>}
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
UserList.defaultProps = {
  listHeading: "Hello :)",
};
export default UserList;
