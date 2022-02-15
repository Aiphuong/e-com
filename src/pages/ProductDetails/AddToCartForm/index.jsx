import React from "react";
import addToCart from "../../../assets/icons/addToCart.svg";
import "./style.scss";


function AddToCartForm({ onSubmit = null }) {
  return (
    <form>
      <div className="addtocart-item">
        <div className="addtocart-item-left">
          <input type="number" placeholder="1" />
          <select name="type">
            <option value="pcs">Pcs</option>
          </select>
        </div>
        <div className="addtocart-item-right">
          <img src={addToCart} />
          <a href="#">
            <p>Add to cart</p>
          </a>
        </div>
      </div>
    </form>
  );
}

export default AddToCartForm;
