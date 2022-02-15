import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

Additional.propTypes = {};

function Additional(props) {
  return (
    <>
      <h4 className="checkout-heading">Additional informations</h4>
      <div className="desc-step">
        <p className="checkout-desc">
          Need something else? We will make it for you!
        </p>
        <p className="step">Step 4 of 5</p>
      </div>
      <label className="additional-title">Order notes</label>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
        className="addition-textarea"
      />
    </>
  );
}

export default Additional;
