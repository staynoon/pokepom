import React from "react";
import { useState, useEffect } from "react";
import { makeStyles} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import "../App.css";

const useStyles = makeStyles(() => ({
  timer: {
    // Add styling here
  },
}));

export default function Timer(props: any) {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const classes = useStyles();

  return (
    <div className={classes.timer}>
      {minutes === 0 && seconds === 0 ? null : (
        <h2>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      )}
    </div>
  );
}
