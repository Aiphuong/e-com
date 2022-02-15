export const ADD_WL = "ADD_WL";
export const REMOVE_WL = "REMOVE_WL";

export const add_wl = (product) => {
  return {
    type: ADD_WL,
    payload: {
      product,
    },
  };
};

export const remove_wl = (product) => {
  return {
    type: REMOVE_WL,
    payload: {
      product,
    },
  };
};
