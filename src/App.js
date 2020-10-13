import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

import { CssAnimationsDemo } from "./CssAnimations";

const useStyles = createUseStyles({
  simple: {
    backgroundColor: "red",
  },

  props1: (props) => ({
    backgroundColor: props.backgroundColor,
  }),

  props2: {
    backgroundColor: (props) => props.backgroundColor,
  },

  list: {
    ["& :nth-child(1)"]: {
      backgroundColor: "green",
    },

    // NOTE: This won't work
    [`${(props) => props.selector}`]: {
      backgroundColor: "blue",
    },
  },

  list2: (props) => ({
    ["& :nth-child(1)"]: {
      backgroundColor: "green",
    },

    // NOTE: This works
    [`${props.selector}`]: {
      backgroundColor: "blue",
    },
  }),

  white: {
    color: "white",
  },
});

const App = () => {
  const props = {
    backgroundColor: "yellow",
    selector: "& :nth-child(2)",
  };

  const { simple, props1, props2, list, list2, white } = useStyles(props);

  return (
    <>
      <div className={simple}>Backgroud is red</div>
      <div className={props1}>Backgroud is yellow. Set by props.</div>
      <div className={props1}>
        Backgroud is yellow. Set by props, using the simple syntax.
      </div>
      <ul className={list}>
        <li>& :nth-child(1) should be green</li>
        <li>& :nth-child(2) should be blue. NOT, with the simple syntax.</li>
        <li>1</li>
      </ul>
      <ul className={list2}>
        <li>& :nth-child(1) should be green</li>
        <li>
          & :nth-child(2) should be blue. Right, with the complex props syntax
        </li>
        <li>1</li>
      </ul>
      <ul className={clsx("List", list2, white)}>
        <li>& :nth-child(1) should be green, color white with clsx</li>
        <li>
          & :nth-child(2) should be blue. Right, with the complex props syntax
        </li>
        <li>1</li>
      </ul>
      <CssAnimationsDemo />
    </>
  );
};

export default App;
