import React from "react";
import PropTypes from "prop-types";
import LeftMenu from "./LeftMenu";
import Main from "./Main";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";

BlogList.propTypes = {};

function BlogList(props) {
  return (
    <div className="container-fluid">
      <div className="blog-list-wrap">
        <MainTop />
        <LeftMenu />
        <Main />
        <MainBottom />
      </div>
    </div>
  );
}

export default BlogList;
