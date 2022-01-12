import React, { Component } from "react";
import SearchBar from "./Common/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <p>Please Search your desire Car :)</p>
        <SearchBar label="Car Name" />
      </div>
    );
  }
}
export default App;
