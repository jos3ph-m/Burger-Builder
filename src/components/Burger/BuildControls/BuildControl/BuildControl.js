import React from "react";
import buildControls from "../BuildControls";

import classes from "./Buildcontrol.css";

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  );
};

export default buildControls;
