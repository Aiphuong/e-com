import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";
import cart from "../../../assets/images/cart.svg";
import Search from "../../Search";
import mockData from "../../../core/mockData/mock";
import SignIn from "../../../pages/Authentication/SignIn";


const HeaderBottom = (props) => {
  const data = mockData.data.product;
  const [navBar, setNavBar] = useState(false);
  const [switchPage, setSwitchPage] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className="header__item-wrap --bottom">
      <div className="header__item --logo">
        <a href="./">
          <img
            src={logo}
            alt="LOGO"
            style={{ width: "177px", height: "18px" }}
          />
          <h1 className="hidden">Freshnesecom</h1>
        </a>
      </div>
      <Search details={data} />
      <div className="header__item --func">
        {/* <div className="login">
          <a href="./">
            <img src={user} alt="login" />
          </a>
        </div> */}
        <div className="cart">
          <a href="./">
            <img src={cart} alt="cart" />
          </a>
          <span className="quality">4</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
