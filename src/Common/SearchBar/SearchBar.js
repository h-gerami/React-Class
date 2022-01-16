import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchedText: "",
  };
  // onFormSubmit(event){   // we have Error now
  //   event.preventDefault();
  //   console.log(this.state.searchedText);
  // };
  onFormSubmition = (event) => {
    event.preventDefault();
    // console.log(this.state.searchedText);
    this.props.onFormSubmit(this.state.searchedText);
  };
  render() {
    const { label, onFormSubmit } = this.props;
    return (
      <Grid alignItems={"center"} container spacing={2}>
        <Grid item xs={9}>
          <form onSubmit={this.onFormSubmition}>
            <TextField
              fullWidth
              onChange={(t) => this.setState({ searchedText: t.target.value })}
              id="outlined-basic"
              label={label}
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid alignItems={"center"} item xs={3}>
          <Button
            onClick={() => onFormSubmit(this.state.searchedText)}
            fullWidth
            variant="contained"
            size="large"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default SearchBar;
// const SearchBar = (props) => {
//   const { label } = props;
//   return (
//     <TextField fullWidth id="outlined-basic" label={label} variant="outlined" />
//   );
// };
// export { SearchBar };
