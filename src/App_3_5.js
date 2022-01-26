import axios from "axios";
import React, { Component } from "react";
import SearchBar from "./Common/SearchBar/SearchBar";
import { API } from "./Global/Statics";
import ImageCard from "./Common/Card/ImageCard";
import { Spinner } from "./Common";
import { Grid, List, ListItem } from "@mui/material";

class App extends Component {
  state = {
    imagesList: [],
    loading: false,
  };
  onSearcheBarClick = (searchedText) => {
    this.setState({ loading: true });
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(`${API}&query=${searchedText}`, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
    axios
      .get(`${API}`, {
        params: {
          query: searchedText,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        this.setState({ imagesList: res.data.results });
        this.setState({ loading: false });
      });
  };
  render() {
    return (
      <div className="app-container">
        <p>Please Search your desire Image :)</p>
        <SearchBar
          onFormSubmit={this.onSearcheBarClick}
          // onFormSubmit={(t) => this.onSearcheBarClick(t)}
          label="Car Name"
        />

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Grid container spacing={0}>
            {this.state.imagesList && this.state.imagesList.length > 0
              ? this.state.imagesList.map((data) => {
                  return (
                    <Grid key={data.id} item xs={6}>
                      <ListItem
                        sx={{ width: "100%", bgcolor: "background.paper" }}
                      >
                        <ImageCard
                          title={data.user.username}
                          subheader={data.created_at}
                          image={data.urls.regular}
                          alt={data.alt_description}
                          decription={data.user.bio}
                          avatar={data.user.profile_image.small}
                        />
                      </ListItem>
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </List>

        <Spinner
          isSpinnerOpen={this.state.loading}
          spinnerText={"Loading ..."}
        />
      </div>
    );
  }
}
export default App;
