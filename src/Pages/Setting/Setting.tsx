import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Switch from "@mui/material/Switch";
const Setting = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;
  console.log(theme, "theme");
  return (
    <div className="container">
      <h3>Setting</h3>
      <h4>Please Select Your Theme:</h4>
      <div>
        <span>Light</span>
        <Switch
          onChange={() => setTheme("light")}
          checked={theme === "light"}
        />
      </div>
      <div>
        <span>Dark</span>
        <Switch onChange={() => setTheme("dark")} checked={theme === "dark"} />
      </div>
    </div>
  );
};
export default Setting;
