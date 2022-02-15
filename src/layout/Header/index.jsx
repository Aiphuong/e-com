import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "./Top";
import HeaderBottom from "./Bottom";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <div className="container-fluid">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
}

export default Header;
