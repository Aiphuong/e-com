import React, { useState } from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import fedex from "../../../../assets/images/fedex.png";
import dhl from "../../../../assets/images/dhl.png";
import "./style.scss";
BillingMethod.propTypes = {};

function BillingMethod(props) {
  const {control} = props
  const [value, setValue] = useState(["Fedex", "DHL"]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <h4 className="checkout-heading">Billing method</h4>

      <div className="desc-step">
        <p className="checkout-desc">Please enter your payment method</p>
        <p className="step">Step 3 of 5</p>
      </div>
      <FormControl component="fieldset" className="billing-method-form">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <div className="method-payment">
            <FormControlLabel value="Fedex" control={<Radio />} label="Fedex" />
            <div className="additional-price">
              <p>+32 USD</p>
              <a href="#">
                <p>Additional price</p>
              </a>
            </div>
            <div className="shipping-name">
              <img src={fedex} />
            </div>
          </div>
          <div className="method-payment">
            <FormControlLabel value="DHL" control={<Radio />} label="DHL" />
            <div className="additional-price">
              <p>+32 USD</p>
              <a href="#">
                <p>Additional price</p>
              </a>
            </div>
            <div className="shipping-name">
              <img src={dhl} />
            </div>
          </div>
        </RadioGroup>
      </FormControl>
      {/* <button className="order">
        <p>Submit</p>
      </button> */}
    </>
  );
}

export default BillingMethod;
