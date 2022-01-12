import React from "react";
import TextField from "@mui/material/TextField";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchedText: "",
  };
  render() {
    const { label } = this.props;
    return (
      <TextField
        fullWidth
        onChange={(t) => console.log(t.target.value)}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
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
