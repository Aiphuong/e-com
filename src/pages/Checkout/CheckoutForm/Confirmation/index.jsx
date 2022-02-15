import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

Confirmation.propTypes = {};

function Confirmation(props) {
  const [state, setState] = useState({
    sending: true,
    term: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { sending, term } = state;
  const error = [sending, term].filter((val) => val).length !== 2;
  return (
    <>
      <h4 className="checkout-heading">Confirmation </h4>

      <div className="desc-step">
        <p className="checkout-desc">
          We are getting to the end. Just few clicks and your order si ready!
        </p>
        <p className="step">Step 5 of 5</p>
      </div>
      <FormControl required error={error} component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={sending}
                onChange={handleChange}
                name="sending"
              />
            }
            label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
          />
          <FormControlLabel
            control={
              <Checkbox checked={term} onChange={handleChange} name="term" />
            }
            label="I agree with our terms and conditionsand privacy policy."
          />
        </FormGroup>
        {/* <FormHelperText>You can display an error</FormHelperText> */}
      </FormControl>
    </>
  );
}

export default Confirmation;
