export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

export const add_cart = (product) => {
  return {
    type: ADD_CART,
    payload: {
      product,
    },
  };
};

export const remove_cart = (product) => {
  return {
    type: REMOVE_CART,
    payload: {
      product,
    },
  };
};
