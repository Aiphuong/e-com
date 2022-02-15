import _ from "lodash";
import { ADD_CART, REMOVE_CART } from "../actions/cart";
const initCart = [];

const reducer = (state = initCart, action) => {
  switch (action.type) {
    case ADD_CART: {
      let newState;
      const { payload } = action;
      const product = payload.product;
      if (state.find((idx) => idx.id === product.id)) {
        newState = state.map((idx) => {
          if (idx.id === product.id) {
            idx.count += 1;
          }
          return idx;
        });
      } else {
        newState = [...state, { ...product, count: 1 }];
      }
      return newState;
    }

    case REMOVE_CART: {
      const { payload } = action;
      const product = payload.product;
      let newState;
      const findPro = state.find((idx) => idx.id === product.id);
      if (!_.isEmpty(findPro)) {
        findPro.count > 1
          ? (newState = state.map((idx) => {
              if (idx.id === product.id) {
                idx.count -= 1;
              }
              return idx;
            }))
          : (newState = _.reject(state, function (el) {
              return el.id === product.id;
            }));
      }
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
