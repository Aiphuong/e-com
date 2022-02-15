import _ from "lodash";
import { ADD_RATE } from "../actions/rate";
const initProduct = {};
let err = "";

const reducer = (state = initProduct, action) => {
  switch (action.type) {
    case ADD_RATE: {
      let rateNumber;
      const { payload } = action;
      const product = payload.product;
      const user = payload.user;
      const number = payload.number;
      if (state.map((idx) => idx.rate.find((el) => el.userId === user.id))) {
        return (err = "you rated");
      } else {
        rateNumber =
          (Number(number) +
            Number(
              product.rate.reduce(function (a, b) {
                return (a.numberRate + b.numberRate) / product.length;
              })
            )) /
          2;
        return { ...state, rateNumber: rateNumber };
      }
    }

    default:
      return state;
  }
};

export default reducer;
