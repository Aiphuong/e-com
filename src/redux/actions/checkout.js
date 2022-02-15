export const ADD_CHECKOUT = "ADD_CHECKOUT";
export const REMOVE_CHECKOUT = "REMOVE_CHECKOUT";

export const add_checkout = (cart, user) => {
  return {
    type: ADD_CHECKOUT,
    payload: {
      cart,
      user
    },
  };
};

export const remove_checkout = (arr) => {
  return {
    type: REMOVE_CHECKOUT,
    payload: {
      arr,
    },
  };
};
