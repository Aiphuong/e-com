export const ADD_HISTORY = "ADD_HISTORY";
export const REMOVE_HISTORY = "REMOVE_HISTORY";

export const add_history = (product) => {
  return {
    type: ADD_HISTORY,
    payload: {
      product,
    },
  };
};

export const remove_history = (arr) => {
  return {
    type: REMOVE_HISTORY,
    payload: {
      arr,
    },
  };
};
