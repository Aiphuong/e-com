import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./Summary";

Checkout.propTypes = {};

function Checkout(props) {
  return (
    <div className="checkout__item-wrap">
      <div className="container-fluid">
        <div className="item__top">
          <a href="#">
            <h4 className="navigation">Home page</h4>
          </a>
          <span>/</span>
          <h4 className="breadcrumb">Fruit and vegetables</h4>
        </div>
        <div className="checkout__item">
          <CheckoutForm />

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
