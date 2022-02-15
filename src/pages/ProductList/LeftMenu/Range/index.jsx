import React, { useState } from "react";
import mockData from "../../../../core/mockData/mock";

//Material ui
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";

function valueText(value) {
    return `${value}$`;
}

const minDistance = 10;

const Range = () => {
    const pro = mockData.data.product;

    const [value, setValue] = useState([20, 37]);

    const [amounts, setAmounts] = useState({ amount: "" });

    const handleChangeAmount = (prop) => (event) => {
        setAmounts({ ...amounts, [prop]: event.target.value });
    };

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue);
        }
    }
    return (
        <>
            <div className="range-slider" style={{ marginTop: "50px" }}>
                <h3 className="title">Price</h3>
                <Box sx={{ width: 232 }}>
                    <Slider
                        getAriaLabel={() => "Price range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueText}
                        disableSwap
                    />
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ marginTop: "23px" }}
                >
                    <FormControl sx={{ width: 100 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            <p style={{ fontFamily: "Poppins", fontSize: "12px" }}>Min</p>
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={amounts.amount}
                            onChange={handleChangeAmount("amount")}
                            startAdornment={
                                <InputAdornment position="start">$</InputAdornment>
                            }
                            placeholder="0"
                            label="Min"
                        />
                    </FormControl>
                    <FormControl sx={{ width: 100 }} style={{ marginLeft: "33px" }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            <p style={{ fontFamily: "Poppins", fontSize: "12px" }}>Max</p>
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={amounts.amount}
                            onChange={handleChangeAmount("amount")}
                            startAdornment={
                                <InputAdornment position="end">$</InputAdornment>
                            }
                            placeholder="100"
                            label="Max"
                        />
                    </FormControl>
                </Grid>
            </div>

        </>
    )
}

export default Range
