import React from "react";
import PropTypes from "prop-types";
HeaderTop.propTypes = {};

function HeaderTop(props) {
  return (
    <div className="header__item-wrap --top">
      <div className="header__item --left">
        <p className="text --green-cl">Chat with us</p>
        <p className="text">+420 336 775 664</p>
        <p className="text">info@freshnesecom.com</p>
      </div>

    </div>
  );
}

export default HeaderTop;
