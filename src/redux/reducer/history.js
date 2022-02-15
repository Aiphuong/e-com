import _ from "lodash";
import { ADD_HISTORY, REMOVE_HISTORY } from "../actions/history";
const initHistory = [];

const reducer = (state = initHistory, action) => {
  switch (action.type) {
    case ADD_HISTORY: {
      let newState;
      const { payload } = action;
      const product = payload.product;

      if (state.find((idx) => idx.id === product.id)) {
        newState = [...state];
      } else {
        newState = [...state, { ...product }];
      }
      return newState;
    }

    case REMOVE_HISTORY: {
      return [...initHistory];
    }

    default:
      return state;
  }
};

export default reducer;
