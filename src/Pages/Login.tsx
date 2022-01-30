import { Button, Grid, TextField } from "@mui/material";
import React, { useMemo, useReducer, useState } from "react";
const reducer = (
  state: loginDataType,
  action: { type: keyof loginDataType; payload: string }
) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "birthday":
      return { ...state, birthday: action.payload };
    case "phonnumber":
      return { ...state, phonnumber: action.payload };
    default:
      return state;
  }
};
interface loginDataType {
  name: string;
  email: string;
  birthday: string;
  phonnumber: string;
}
const initialState: loginDataType = {
  name: "",
  email: "",
  birthday: "",
  phonnumber: "",
};
export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onClickButton = () => {
    console.log("on Form Submit", state);
  };
  // const dd = [{ 1: 1 }, "2", "3"];
  // const cc = [...dd];
  // const ll = [{ name: "hossein" }, { Lastname: "Gerami" }];

  // console.log([...ll, { birthday: "2020/09/04" }]);

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <Grid alignItems={"center"} container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={state.name}
              onChange={(t) =>
                dispatch({ type: "name", payload: t.target.value })
              }
              id="outlined-basic"
              label={"Name & Last Name"}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={state.email}
              onChange={(t) =>
                dispatch({ type: "email", payload: t.target.value })
              }
              id="outlined-basic"
              label={"Email"}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={state.birthday}
              onChange={(t) =>
                dispatch({ type: "birthday", payload: t.target.value })
              }
              id="outlined-basic"
              label={"Bithday"}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={state.phonnumber}
              onChange={(t) =>
                dispatch({ type: "phonnumber", payload: t.target.value })
              }
              id="outlined-basic"
              label={"Phone Number"}
              variant="outlined"
            />
          </Grid>
          <Grid alignItems={"center"} item xs={3}>
            <Button
              onClick={() => onClickButton()}
              fullWidth
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
