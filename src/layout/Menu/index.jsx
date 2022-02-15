import React, { useEffect, useState } from "react";
import mockData from "../../core/mockData/mock";
import arrowDown from "../../assets/icons/arrow-down.svg";

const Menu = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    (async () => {})();
    setCate(mockData.data.category);
    return () => {};
  }, []);

  return (
    <section className="menu">
      <div className="menu__item-wrap">
        {cate?.map((item) => (
          <div className="menu__item" key={item.id}>
            <a href="#">
              <span>{item.name}</span>
            </a>
            <div className="menu__item--icon">
              <a href="javascript-void(0)">
                <img src={arrowDown} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
