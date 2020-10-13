import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    color: "green",
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: "1rem",
    },
    "& span": {
      // jss-plugin-nested applies this to a child span
      fontWeight: "bold", // jss-plugin-camel-case turns this into 'font-weight'
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>xxx</span>
    </button>
  );
};

export default App;
