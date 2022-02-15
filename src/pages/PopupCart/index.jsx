import React from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";
import _ from "lodash";

import remove from "../../assets/icons/close.svg";
import "./style.scss";
import CartItem from "../../components/CartItem";
import {totalCart} from '../../utils/helpers/index'

function PopupCart({ close }) {

  const navigate = useNavigate();

  const cartPopup = useSelector((state) => state.cart);

  const cartTT = totalCart(cartPopup)

  const handleNavigate = async () => {
    close();
    navigate("/checkout");
  };
  return (
    <section className="cart-popup">
      <div className="popup-top">
        <h3 className="heading">Shopping cart</h3>
        <div className="close">
          <p>Close</p>
          <a href="#" onClick={close}>
            <img src={remove} />
          </a>
        </div>
      </div>


<CartItem />
      <div className="popup-bottom">
        <h4 className="text-sub">Subtotal</h4>
        <h5 className="sum">{cartTT} USD</h5>
        <div className="shopping">
          <a href="#" className="continue">
            <p>Continue shopping</p>
          </a>

          <a href="#" className="checkout" onClick={handleNavigate}>
            <p>Go to checkout</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PopupCart;
