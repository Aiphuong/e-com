import React from "react";
import moreProducts from "../../../assets/icons/more-products.svg";
import mockData from "../../../core/mockData/mock";

const BannerCate = () => {
  return (
    <div className="item__right">
      <div className="banner-item">
        <div className="banner__content">
          <h4>Banner subfocus</h4>
          <p className="heading">Space for heading</p>
        </div>
        <div className="banner__button" style={{ backgroundImage: `url()` }}>
          <a href="/">
            <p>Read recipes </p>
          </a>
          <img src={moreProducts} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerCate;
