import React from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";
import _ from 'lodash'

import "./style.scss";
import CartItem from "../../../components/CartItem";
import {totalCart} from '../../../utils/helpers/index'

import "react-toastify/dist/ReactToastify.css";


function OrderSummary(props) {
  const navigate = useNavigate();
  const cartPopup = useSelector((state) => state.cart);
 if(_.isEmpty(cartPopup)) {
    navigate("/");
  }
  

  const cartTT = totalCart(cartPopup);
  return (
    <div className="order-summary">
      <h4 className="checkout-heading">Order summary</h4>
      <div className="desc-step">
        <p className="checkout-desc">
          Price can change depending on shipping method and taxes of your state.
        </p>
      </div>
      <section className="cart-popup">
      <CartItem/>
        <div className="summary-total-price">
          <div className="summary-price-item">
            <h4 className="summary-title">Subtotal</h4>
            <p className="summary-price">{cartTT}</p>
          </div>
          <div className="summary-price-item">
            <h4 className="summary-title">Tax</h4>
            <p className="summary-price">17% 16.53 USD </p>
          </div>
          <div className="summary-price-item">
            <h4 className="summary-title">Shipping</h4>
            <p className="summary-price">0 USD</p>
          </div>
        </div>
        <div className="summary-discount" style={{ marginTop: "32px" }}>
          <form>
            <div className="apply-code">
              <input
                type="text"
                placeholder="Apply promo code"
                className="promo-code"
              />
              <a href="#">
                <p>Apply now</p>
              </a>
            </div>
          </form>
        </div>
        <div className="total-order">
          <div className="total-order-left">
            <h4>Total order</h4>
            <p>Guaranteed delivery day: June 12, 2020</p>
          </div>
          <div className="total-order-right">
            <p>89.84 USD</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderSummary;
