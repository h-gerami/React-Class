import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./../Common/SearchBar/SearchBar";
import { API } from "./../Global/Statics";
import ImageCard from "./../Common/Card/ImageCard";
import { Spinner } from "./../Common";
import { Grid, List, ListItem } from "@mui/material";
import { useHistory } from "react-router-dom";
import { imgDataType } from "../Utils/AppTypes";
const ImageSearchScreen = () => {
  let history = useHistory();
  const [imagesList, setImagesList] = useState<imgDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const onSearcheBarClick = (searchedText) => {
    setLoading(true);
    axios
      .get(`${API}`, {
        params: {
          query: searchedText,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setImagesList(res.data.results);
        setLoading(false);
      });
  };
  return (
    <div className="app-container">
      <p>Please Search your desire Image :)</p>
      <SearchBar onFormSubmit={onSearcheBarClick} label="Car Name" />

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Grid container spacing={0}>
          {imagesList && imagesList.length > 0
            ? imagesList.map((data: imgDataType) => {
                return (
                  <Grid key={data.id} item xs={6}>
                    <ListItem
                      sx={{ width: "100%", bgcolor: "background.paper" }}
                    >
                      <ImageCard
                        onCardClick={() =>
                          history.push({
                            pathname: "/image",
                            // search: '?update=true',  // query string
                            state: {
                              // location state
                              imgDetail: data,
                            },
                          })
                        }
                        title={data.user.username}
                        subheader={data.created_at}
                        image={data.urls.regular}
                        alt={data.alt_description}
                        imgDesc={data.description}
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

      <Spinner isSpinnerOpen={loading} spinnerText={"Loading ..."} />
    </div>
  );
};
export default ImageSearchScreen;
