import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@material-ui/core";


import "./style.scss";

const BillingInfo = (props) => {
  const {register, errors} = props


  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };


  return (
    <>
      <h4 className="checkout-heading">Billing info</h4>
      <div className="desc-step">
        <p className="checkout-desc">Please enter your billing info</p>
        <p className="step">Step 1 of 5</p>
      </div>

      <div className="billing-info-form">
        <div className="billing-form-item">
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            margin="dense"
            {...register("firstname")}
            error={errors.firstname && true}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.firstname?.message}
          </Typography>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last Name"
            fullWidth
            margin="dense"
            {...register("lastname")}
            error={errors.lastname && true}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.lastname?.message}
          </Typography>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="email"
            name="email"
            label="Email address"
            fullWidth
            margin="dense"
            {...register("email")}
            error={errors.email && true}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.email?.message}
          </Typography>
        </div>

        <div className="billing-form-item">
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            margin="dense"
            {...register("phone")}
            error={errors.phone && true}
          />

          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.phone?.message}
          </Typography>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            margin="dense"
            {...register("address")}
            error={errors.address && true}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.address?.message}
          </Typography>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="town"
            name="town"
            label="Town / City"
            fullWidth
            margin="dense"
            {...register("town")}
            error={errors.town ? true : false}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.town?.message}
          </Typography>
        </div>

        <div className="billing-form-item">
          <InputLabel id="demo-simple-select-label">State / Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            onClick={handleChange}
            name="state"
            label="State / Country"
            {...register("state")}
            error={errors.state && true}
          >
            <MenuItem value={10}>Viet Nam</MenuItem>
            <MenuItem value={20}>USA</MenuItem>
          </Select>
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.state?.message}
          </Typography>
        </div>
        <div className="billing-form-item">
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            margin="dense"
            {...register("zip")}
            error={errors.zip && true}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.zip?.message}
          </Typography>
        </div>

        <div className="billing-form-item">
          <FormControlLabel
            value="ship"
            control={<Checkbox color="primary" />}
            label="Ship to a different address"
            labelPlacement="bottom"
            name="ship"
            {...register("ship")}
            // error={errors.ship && true}
          />
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {/* {errors.ship?.message} */}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default BillingInfo;
