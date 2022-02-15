import React from "react";
import PropTypes from "prop-types";
import MiddleLeft from "./MiddleLeft";
import MiddleRight from "./MiddleRight";
import "./style.scss";
DetailsMiddle.propTypes = {};

function DetailsMiddle(props) {
  const { product } = props;
  return (
    <div className="detail-middle">
      <MiddleLeft />
      <MiddleRight data={product} />
    </div>
  );
}

export default DetailsMiddle;
