import _ from "lodash";
import { ADD_CHECKOUT, REMOVE_CHECKOUT } from "../actions/checkout";
const initCheckout = [];

const reducer = (state = initCheckout, action) => {
  switch (action.type) {
    case ADD_CHECKOUT: {
      let newState;
      const { payload } = action;
      console.log(payload)
      const cart = payload.product;
      const user = payload.user;
      newState = [...state, { ...cart }, {...user}];
      return newState;
    }

    case REMOVE_CHECKOUT: {
      return [...initCheckout];
    }

    default:
      return state;
  }
};

export default reducer;
