import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import AddToCartForm from "../../AddToCartForm";
import TabContent from "./Tab";
import { add_wl } from "../../../../redux/actions/wishList";

import rate from "../../../../assets/icons/rate-yellow.svg";
import heart from "../../../../assets/icons/wishList-color.svg";
import compare from "../../../../assets/icons/compare-color.svg";

import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

function MiddleRight(props) {
  toast.configure({ autoClose: 1000 });

  let { data } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (formValues) => {
    console.log("form submit");
  };
  const navigate = useNavigate();
  const wishList = useSelector((state) => state.wl);
  const addToWishList = async (e) => {
    e.preventDefault();
    if (wishList.find((idx) => idx.id === data.id)) {
      toast.warning("The product has been added to wish list");
    } else {
      await dispatch(add_wl(data));
      toast.success("Add to wish list successfully");
      setTimeout(() => {
        navigate("/wishlist");
      }, 1500);
    }
  };

  
  return (
    <React.Fragment>
      <div className="detail-middle-item --right">
        <h2 className="title">{data.title}</h2>
        <div className="cus-vote">
          <div className="rate">
            <img src={rate} />
            <img src={rate} />
            <img src={rate} />
            <img src={rate} />
            <img src={rate} />
          </div>
          <p>(1 customer review)</p>
        </div>
        <div className="desc">
          <p>{data.description}</p>
        </div>
        <div className="info-parameter">
          <div className="--left">
            <div className="info-parameter-item ">
              <p>SKU:</p>
              <span>76645</span>
            </div>
            <div className="info-parameter-item">
              <p>Category:</p>
              <a href="#">Vegetables</a>
            </div>
            <div className="info-parameter-item">
              <p>Stock:</p>
              <a href="#">In Stock</a>
            </div>
            <div className="info-parameter-item">
              <p>Farm:</p>
              <span>Grocerry Tarm Fields</span>
            </div>
          </div>
          <div className="--right">
            <div className="info-parameter-item">
              <p>Freshness:</p>
              <span>1 days old</span>
            </div>
            <div className="info-parameter-item">
              <p>Buy by:</p>
              <span>pcs,kgs,box,pack</span>
            </div>
            <div className="info-parameter-item">
              <p>Delivery:</p>
              <span>in 2 days</span>
            </div>
            <div className="info-parameter-item">
              <p>Delivery area:</p>
              <span>Czech republic</span>
            </div>
          </div>
        </div>
        <div className="addToCart-wrap" style={{ paddingTop: "16px" }}>
          <div className="addToCart-wrap-left">
            {parseInt(data.discount) > 0 ? (
              <h4>{parseInt(data.price * data.discount) / 100} USD</h4>
            ) : (
              <h4>0 USD</h4>
            )}
            <p>{data.price} USD</p>
          </div>
          <div className="addToCart-wrap-right">
            <AddToCartForm onSubmit={handleAddToCart} />
          </div>
        </div>
        <div className="option-wrap">
          <div className="wish-list">
            <a href="#">
              {" "}
              <img src={heart} />
            </a>

            <a href="#" onClick={(e) => addToWishList(e)}>
              <p>Add to my wish list</p>
            </a>
          </div>
          <div className="compare">
            <a href="#">
              {" "}
              <img src={compare} />
            </a>

            <a href="#">
              <p>Compare</p>
            </a>
          </div>
        </div>
        <TabContent />
      </div>
    </React.Fragment>
  );
}

export default MiddleRight;
