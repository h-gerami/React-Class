import React, { Component } from "react";
import List from "@mui/material/List";
import hosseinPic from "../src/assets/images/hossein.jpg";
import UserList from "./Common/List/UserList";
import HGCard from "./Common/Card/HGCard";
import Button from "@mui/material/Button";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHosseinImg: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "React Native Class" });
    }, 1000);
  }
  render() {
    if (this.state.name !== "React") {
      return (
        <React.Fragment>
          <Button
            onClick={() =>
              this.setState({ showHosseinImg: !this.state.showHosseinImg })
            }
            variant="contained"
          >
            Contained
          </Button>
          <p>{this.state.name}</p>
          <HGCard>
            <UserList
              listHeading="List Header"
              listDetails="first iyem details"
              userImg={this.state.showHosseinImg ? hosseinPic : null}
            />
          </HGCard>
          <List
            sx={{
              width: "100%",
              margin: 1,
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <UserList
              listHeading="List Header"
              listDetails="first iyem details"
              userImg={hosseinPic}
            />
            <UserList listHeading="Hossein Gerami" />
            <UserList listHeading="fatemeh yaghoobi" />
          </List>
        </React.Fragment>
      );
    } else {
      return <p>{this.state.name}</p>;
    }
  }
}
export default App;
// export default function App() {
//   return (
//     <React.Fragment>
//       <HGCard>
//         <UserList
//           listHeading="List Header"
//           listDetails="first iyem details"
//           userImg={hosseinPic}
//         />
//       </HGCard>
//       <List
//         sx={{
//           width: "100%",
//           margin: 1,
//           maxWidth: 360,
//           bgcolor: "background.paper",
//         }}
//       >
//         <UserList
//           listHeading="List Header"
//           listDetails="first iyem details"
//           userImg={hosseinPic}
//         />
//         <UserList listHeading="Hossein Gerami" />
//         <UserList listHeading="fatemeh yaghoobi" />
//       </List>
//     </React.Fragment>
//   );
// }
