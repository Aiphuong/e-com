import React from "react";
import PropTypes from "prop-types";
import thumbnail from "../../../assets/images/thumbnail.jpg";
import "./style.scss";

Main.propTypes = {};

function Main(props) {
  const backGroundImage = {
    width: "469px",
    height: "400px",
    borderRadius: "12px",
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "auto",
  };
  return <div>This is main </div>;
}

export default Main;
