import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import credit from "../../../../assets/images/credit.png";
import logoCredit from "../../../../assets/images/logo-credit-card.png";
import paypal from "../../../../assets/images/paypal.png";
import bitcoin from "../../../../assets/images/bitcoin.png";
//Accordion
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Radio
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

//TextField
import TextField from "@material-ui/core/TextField";

PaymentMethod.propTypes = {};

function PaymentMethod(props) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <h4 className="checkout-heading">Payment method</h4>
      <div className="desc-step">
        <p className="checkout-desc"> Please enter your payment method</p>
        <p className="step">Step 3 of 5</p>
      </div>

      <RadioGroup
        aria-label="Credit card"
        name="credit card"
        value={value}
        onChange={handleChange}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={
              <div className="method-logo">
                <img src={credit} alt="VISA CARD" />
                <img
                  src={logoCredit}
                  alt="LOGO VISA"
                  className="method-payment-logo"
                />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit card"
            ></FormControlLabel>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-basic"
              label="Card number"
              variant="outlined"
              name="cardNumber"
              className="card-number"
            />
            <div className="credit-input-flex">
              <TextField
                id="outlined-basic"
                label="Card holder"
                variant="outlined"
                name="cardHolder"
                className="card-holder"
              />

              <TextField
                id="date"
                label="Expiration date"
                type="date"
                defaultValue="1999-10-25"
                InputLabelProps={{
                  shrink: true,
                }}
                className="date-picker"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="CVC"
                variant="outlined"
                name="cvc"
                className="cvc"
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <div className="method-logo">
                <img src={paypal} alt="Paypal" />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Paypal"
            ></FormControlLabel>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-basic"
              label="Card number"
              variant="outlined"
              name="cardNumber"
              className="card-number"
            />
            <div className="credit-input-flex">
              <TextField
                id="outlined-basic"
                label="Card holder"
                variant="outlined"
                name="cardHolder"
                className="card-holder"
              />

              <TextField
                id="date"
                label="Expiration date"
                type="date"
                defaultValue="1999-10-25"
                InputLabelProps={{
                  shrink: true,
                }}
                className="date-picker"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="CVC"
                variant="outlined"
                name="cvc"
                className="cvc"
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <div className="method-logo">
                <img src={bitcoin} alt="Paypal" />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FormControlLabel
              value="bitcoin"
              control={<Radio />}
              label="Bitcoin"
            ></FormControlLabel>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-basic"
              label="Card number"
              variant="outlined"
              name="cardNumber"
              className="card-number"
            />
            <div className="credit-input-flex">
              <TextField
                id="outlined-basic"
                label="Card holder"
                variant="outlined"
                name="cardHolder"
                className="card-holder"
              />

              <TextField
                id="date"
                label="Expiration date"
                type="date"
                defaultValue="1999-10-25"
                InputLabelProps={{
                  shrink: true,
                }}
                className="date-picker"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="CVC"
                variant="outlined"
                name="cvc"
                className="cvc"
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </RadioGroup>
    </>
  );
}

export default PaymentMethod;
