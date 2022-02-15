import React from "react";
import ProductCard from "../../../components/ProductCard";
import { useParams } from "react-router-dom";
import "./style.scss";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { id } = useParams();
  const { relate } = props;
  console.log("id", id);
  const mapProduct = relate.product.map((el) => el);
  const filterProduct = mapProduct.filter((el) => el.id !== id);
  console.log("filter product", filterProduct);

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
      <div className="product__item-wrap">
        {filterProduct?.slice(-4).map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
export default DetailsBottom;
