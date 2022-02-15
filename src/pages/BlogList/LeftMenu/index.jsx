import React from "react";
import PropTypes from "prop-types";
import Archives from "./Archives";
import Category from "./Category";
import OurList from "./OurList";

LeftMenu.propTypes = {};

function LeftMenu(props) {
  return (
    <div>
      <Archives />
      <Category />
      <OurList />
    </div>
  );
}

export default LeftMenu;
