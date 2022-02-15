import _ from "lodash";
import { ADD_WL, REMOVE_WL } from "../actions/wishList";
const initWl = [];

const reducer = (state = initWl, action) => {
  switch (action.type) {
    case ADD_WL: {
      let newState;
      const { payload } = action;
      newState = [...state, { ...payload.product }];
      return newState;
    }

    case REMOVE_WL: {
      const { payload } = action;
      const product = payload.product;
      let newState;
      newState = _.reject(state, function (el) {
        return el.id === product.id;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
