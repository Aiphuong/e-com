import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
DetailsTop.propTypes = {};

function DetailsTop(props) {
  return (
    <div className="detail-top">
      <div className="item__top">
        <a href="#">
          <h4 className="navigation">Home page</h4>
        </a>

        <span>/</span>

        <a href="#">
          <h4 className="navigation">Fruit and vegetables</h4>
        </a>
        <span>/</span>
        <h4 className="breadcrumb">Carrots from Tomissy Farm</h4>
      </div>
    </div>
  );
}

export default DetailsTop;
