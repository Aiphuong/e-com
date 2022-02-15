import React from "react";
import PropTypes from "prop-types";
import thumbnail from "../../../assets/images/thumbnail.jpg";

MainBottom.propTypes = {};

function MainBottom(props) {
  const backGroundImage = {
    width: "469px",
    height: "400px",
    borderRadius: "12px",
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "auto",
  };
  return <div>this is main bottom</div>;
}

export default MainBottom;
