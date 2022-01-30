import { Button, Grid } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [errText, setErrText] = useState<string>("");

  useEffect(() => {
    console.log("on every render");
  });

  useEffect(() => {
    console.log("on first time render");
  }, []);

  useEffect(() => {
    if (counter !== 0) {
      console.log("counter has changed");
    }
  }, [counter, errText]);

  useEffect(() => {
    return () => {
      // call cleaning function
      console.log("cleaning");
    };
  }, []);

  const onIncreaseClickHandler = () => {
    if (counter > 0) {
      setErrText("");
    }
    setCounter(counter + 1);
  };
  const onDecreaseClickHandler = () => {
    if (counter == 0) {
      setErrText("The counter can not be less than 0");
    } else {
      setCounter(counter - 1);
    }
  };
  const memorizedData = useMemo(() => {
    //Memoization
    let f = 0;
    f = counter * counter * counter * counter;
    f++;
    f--;

    return f;
  }, [counter]);
  return (
    <div className="container">
      <p>{counter}</p>
      <p>{"memorizedData " + memorizedData}</p>
      {errText && <p>{errText}</p>}
      <Grid alignItems={"center"} item xs={3}>
        <Button
          onClick={onIncreaseClickHandler}
          fullWidth
          variant="contained"
          size="large"
        >
          Increase
        </Button>
      </Grid>
      <Grid alignItems={"center"} item xs={3}>
        <Button
          onClick={onDecreaseClickHandler}
          fullWidth
          variant="contained"
          size="large"
        >
          DeCrease
        </Button>
      </Grid>
    </div>
  );
};
export default Counter;
