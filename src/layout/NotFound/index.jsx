import React from "react";
import PropTypes from "prop-types";
import notFound from "../../assets/images/not-found.png";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div
      className="not-found"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={notFound} />
    </div>
  );
}

export default NotFound;
