import React, { Component } from "react";
import List from "@mui/material/List";
import hosseinPic from "../src/assets/images/hossein.jpg";
import UserList from "./Common/List/UserList";
import HGCard from "./Common/Card/HGCard";
import Button from "@mui/material/Button";
import { Spinner } from "./Common";

class App extends Component {
  // constructor(props) {
  //   // API Call
  //   // services.getData().then(res => {

  //   // })
  //   console.log("constructor");
  //   super(props);
  // }
  state = {
    name: "React",
    showHosseinImg: false,
    toggleIcons: false,
    hellowText: "Hello friends :)",
  };
  componentDidMount() {
    // API Call
    // services.getData().then(res => {

    // })
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ name: "React Native Class" });
    }, 1000);
  }
  componentDidUpdate() {
    // state change // props receive
    console.log("componentDidUpdate", this.state.toggleIcons);
  }
  componentWillUnmount() {
    // Cleaning Methods
    console.log("componentWillUnmount");
  }
  onButtonClickHandler() {
    this.setState({
      showHosseinImg: !this.state.showHosseinImg,
      toggleIcons: !this.state.toggleIcons,
    });
    // this.setState({
    //   showHosseinImg: !this.state.showHosseinImg,
    // });
    // this.setState({
    //   toggleIcons: !this.state.toggleIcons,
    // });
  }
  renderComponents() {
    if (this.state.name !== "React") {
      return (
        <div>
          <Spinner spinnerText="Fething Data ... " isSpinnerOpen={false} />
          <Button
            onClick={() => this.onButtonClickHandler()}
            variant="contained"
          >
            Contained
          </Button>
          <p>{this.state.name}</p>
          <HGCard background="red">
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
              listHeading={this.state.hellowText}
              listDetails="first iyem details"
              userImg={hosseinPic}
              isApple={this.state.toggleIcons}
            />
            <UserList listDetails="first item details" userImg={hosseinPic} />
            {/* <UserList listHeading={this.state.name} />
            <UserList
              isApple={this.state.toggleIcons}
              listHeading="fatemeh yaghoobi"
            /> */}
          </List>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.state.name}</p>
        </div>
      );
    }
  }
  render() {
    return <div className="main-container">{this.renderComponents()}</div>;
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
