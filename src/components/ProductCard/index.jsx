import React from "react";
import { add_cart } from "../../redux/actions/cart";
// import rate from "../../../assets/images/rate.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { add_history } from "../../redux/actions/history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const ProductCard = (props) => {
  toast.configure({ autoClose: 1000 });

  let { data } = props;
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const addToHistory = (e) => {
    dispatch(add_history(data));
  };

  const addCart = async (e) => {
    e.preventDefault();

    await dispatch(add_cart(data));
    toast.success("Add to cart successfully");

    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  return (
    <div className="product-item">
      <div className="products-card">
        <div className="product-image">
          <Link to={`/product/${data.id}`} onClick={addToHistory}>
            <img
              src={data.image}
              style={{
                width: "237px",
                height: "180px",
                borderRadius: "12px",
              }}
              alt=""
            />
          </Link>
          {parseInt(data.discount) > 0 ? (
            <div className="sale-item">
              <p className="sale">-{data.discount}%</p>
            </div>
          ) : null}
        </div>
        <div className="product-content">
          <h3 className="product-title">{data.title}</h3>
          <p className="desc">{data.description}</p>
          <div className="rate  ">
            {/* <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" /> */}
          </div>
          <div className="product-button">
            {parseInt(data.discount) > 0 ? (
              <p className="price">
                {parseInt(data.price * data.discount) / 100} USD
              </p>
            ) : (
              <p className="price">{data.price} USD</p>
            )}
            {parseInt(data.discount) > 0 ? (
              <p className="price-sale">{data.price} USD</p>
            ) : (
              " "
            )}

            <Link to="" onClick={(e) => addCart(e, data)} className="btn-buy">
              <p>Buy now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
