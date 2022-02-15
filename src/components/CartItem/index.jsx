import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cart, remove_cart, delete_cart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import _ from "lodash";

import wishList from "../../assets/icons/wishList.svg";
import rate from "../../assets/icons/rate-yellow.svg";
import remove from "../../assets/icons/close.svg";
import compared from "../../assets/icons/compare.svg";

import "react-toastify/dist/ReactToastify.css";

const CartItem = () => {
    toast.configure({ autoClose: 1000 });


    const dispatch = useDispatch();
    const cartPopup = useSelector((state) => state.cart);

    const updateQuantity = (e, item) => {
        e.preventDefault();
        dispatch(add_cart(item));
    };
    const deleteCart = async (e, item) => {
        e.preventDefault();
        dispatch(delete_cart(item));
        await toast.success("Remove this product from cart popup");
    };
    const removeCart = async (e, item) => {
        e.preventDefault();
        console.log("item count", item.count);

        if (item.count === 0) {
            await toast.warning("Do u wanna remove this product from cart popup?");
        } else {
            dispatch(remove_cart(item));
        }
    };

    return (
        <>
            {cartPopup?.map((item) => (
                <>
                    <div className="popup-middle">
                        <div className="popup-left">
                            <div className="popup-left-item">
                                <img
                                    src={item.image}
                                    style={{
                                        width: "100px",
                                        height: "67px",
                                        borderRadius: "12px",
                                    }}
                                />
                            </div>

                            <div className="popup-left-item">
                                <a href="#">
                                    <img src={wishList} />
                                </a>

                                <p>Wish list</p>
                            </div>

                            <div className="popup-left-item">
                                <a href="#">
                                    <img src={compared} />
                                </a>

                                <p>Compare</p>
                            </div>

                            <div className="popup-left-item">
                                <a href="#" onClick={(e) => deleteCart(e, item)}>
                                    <img src={remove} />
                                </a>

                                <p>Remove</p>
                            </div>
                        </div>
                        <div className="popup-right">
                            <h3 className="heading">{item.title}</h3>
                            <p className="title">
                                Farm : <span>Tharamis Farm </span>
                            </p>
                            <p className="title">
                                Freshness : <span>1 day old </span>
                            </p>

                            <div className="rate">
                                <img src={rate} />
                                <img src={rate} />
                                <img src={rate} />
                                <img src={rate} />
                                <img src={rate} />
                            </div>
                            <div className="price-info">
                                <div className="price-info-left">
                                    <div className="price">
                                        <p>{item.discount} USD</p>
                                    </div>
                                    <div className="price-sale">
                                        <p>{item.price} USD</p>
                                    </div>
                                </div>
                                <div className="cart__item-bottom">
                                    <div className="number">
                                        <a
                                            className="minus"
                                            href="#"
                                            onClick={(e) => removeCart(e, item)}
                                        >
                                            -
                                        </a>
                                        <input type="text" value={item.count} />
                                        <a
                                            className="plus"
                                            href="#"
                                            onClick={(e) => updateQuantity(e, item)}
                                        >
                                            +
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}

        </>
    )
}

export default CartItem
