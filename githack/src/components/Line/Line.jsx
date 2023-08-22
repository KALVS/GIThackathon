import React from "react";
import PropTypes from "prop-types";
import classes from "./Line.module.css"; // Create this CSS module for styling

function Line() {
  

  return <div className={classes.line} ></div>;
}

Line.propTypes = {
  color: PropTypes.string,
};

export default Line;
