import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
interface NoteInputType {
  label: string;
  onFormSubmit: () => void;
  buttonText: string;
  onChangeText: (t: string) => void;
  value: string;
}
const NoteInput = (props: NoteInputType) => {
  const { label, onFormSubmit, buttonText, onChangeText, value } = props;
  return (
    <Grid alignItems={"center"} container spacing={2}>
      <Grid item xs={9}>
        <form>
          <TextField
            value={value}
            fullWidth
            onChange={(t) => onChangeText(t.target.value)}
            id="outlined-basic"
            label={label}
            variant="outlined"
          />
        </form>
      </Grid>
      <Grid alignItems={"center"} item xs={3}>
        <Button
          onClick={() => onFormSubmit()}
          fullWidth
          variant="contained"
          size="large"
        >
          {buttonText || "Search"}
        </Button>
      </Grid>
    </Grid>
  );
};
export default NoteInput;
