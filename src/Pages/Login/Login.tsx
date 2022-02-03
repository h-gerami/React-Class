import { Button, Grid, TextField } from "@mui/material";
import React, { useMemo, useReducer, useState, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { ThemeContext } from "../../Context/ThemeContext";
import { HGLang } from "../../Language";
import { LanguageEnum, userType } from "../../Utils/AppTypes";
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
  usersList: userType[];
}

const initialState: loginDataType = {
  name: "",
  email: "",
  birthday: "",
  phonnumber: "",
  usersList: [],
};
export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const languageContext = useContext(LanguageContext);
  const { language, setLanguage } = languageContext;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  console.log(language, "language", theme, "theme");
  const onClickButton = () => {
    console.log("on Form Submit", state);
  };
  // const dd = [{ 1: 1 }, "2", "3"];
  // const cc = [...dd];
  // const ll = [{ name: "hossein" }, { Lastname: "Gerami" }];

  // console.log([...ll, { birthday: "2020/09/04" }]);

  return (
    <div className="container">
      <Grid
        style={{ marginBottom: 10 }}
        alignItems={"center"}
        container
        spacing={2}
      >
        <Grid item xs={4}>
          <Button
            color={theme === "dark" ? "success" : "primary"}
            onClick={() => setLanguage(LanguageEnum.en)}
            fullWidth
            variant={language === "en" ? "contained" : "outlined"}
            size="large"
          >
            English
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setLanguage(LanguageEnum.de)}
            fullWidth
            variant={language === "de" ? "contained" : "outlined"}
            size="large"
          >
            Germany
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <h2>{HGLang(language).login}</h2>
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
              label={HGLang(language).nameLastName}
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
              label={HGLang(language).email}
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
              label={HGLang(language).birthDay}
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
              label={HGLang(language).phonenumber}
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
              {HGLang(language).submit}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
