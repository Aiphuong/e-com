import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import {  useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";

import BillingInfo from "./BillingInfo";
import BillingMethod from "./BillingMethod";
import PaymentMethod from "./PaymentMethod";
import Additional from "./Additional";
import Confirmation from "./Confirmation";

import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

import { add_checkout } from "../../../redux/actions/checkout";
import { delete_cart_all } from "../../../redux/actions/cart";

CheckoutForm.propTypes = {};

function CheckoutForm(props) {
  toast.configure({ autoClose: 1000 });

  const schema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name."),
    lastname: yup.string().required("Please enter your last name"),

    phone: yup
      .string()
      .required("Please enter your phone")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    email: yup
      .string()
      .email("Incorrect format email is @")
      .required("Please enter your email"),
    address: yup
      .string()
      .required("Please enter your address")
      .min(4, "Address must be at least 4 characters"),
    town: yup
      .string()
      .required("Please enter your address")
      .min(4, "Address must be at least 4 characters"),
    state: yup.string().required("Please select your option"),
    // ship: yup
    //   .boolean()
    //   .oneOf([true], "Required terms of use")
    //   .required("Required terms of use"),
    zip: yup.string().required("Please enter your postal code"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      state: "",
      zip: "",
      ship: false,
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const onSubmit = async (data) =>{
    console.log(data);
    await dispatch(add_checkout(cartData, data));
    toast.success("Checkout successfully");
    await dispatch(delete_cart_all());
    setTimeout(() => {
      navigate("/");
    }, 1500);

  }

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <BillingInfo register={register} errors={errors} />
        <BillingMethod control={control} />
        <PaymentMethod control={control}/>
        <Additional control={control}/>
        <Confirmation control={control}/>
        <button className="order">
          <p>Complete order</p>
        </button>
      </form >
    </div>
  );
}

export default CheckoutForm;
