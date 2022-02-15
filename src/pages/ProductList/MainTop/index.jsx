import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import View from "./View";

const MainTop = (props) => {
  const { id } = useParams();
  if (!id) {
  }
  return (
    <div className="category-list">
      <View />
      <Filter />
    </div>
  );
};

export default MainTop;
