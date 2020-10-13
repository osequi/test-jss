import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import CssAnimations, {
  CssAnimationsPropTypes,
  CssAnimationsDefaultProps,
} from ".";

/**
 * Defines the prop types
 */
const propTypes = {
  ...CssAnimationsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  animation: {
    name: "MoveOnX",
    duration: "2s",
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    direction: "alternate",
    keyframes: {
      from: { transform: "translateX(-50px)" },
      to: { transform: "translateX(50px)" },
    },
  },

  animation2: {
    name: "MoveOnY",
    duration: "2s",
    delay: "2s",
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    direction: "alternate",
    keyframes: {
      from: { transform: "translateY(-50px)" },
      to: { transform: "translateY(50px)" },
    },
  },
};

/**
 * Defines the styles
 */
const useStyles = createUseStyles(() => ({
  container: {
    width: "400px",
    height: "400px",
    border: "1px solid",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  square: {
    width: "200px",
    height: "200px",
    background: "lightgreen",
  },
}));

/**
 * Displays the demo.
 */
const CssAnimationsDemo = (props) => {
  const { animation, animation2 } = props;
  const { container, square } = useStyles(props);

  return (
    <div className={clsx("Container", container)}>
      <CssAnimations animation={animation}>
        <CssAnimations animation={animation2}>
          <div className={clsx("Square", square)}></div>
        </CssAnimations>
      </CssAnimations>
    </div>
  );
};

CssAnimationsDemo.propTypes = propTypes;
CssAnimationsDemo.defaultProps = defaultProps;

export default CssAnimationsDemo;
