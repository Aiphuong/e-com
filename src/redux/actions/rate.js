export const ADD_RATE = "ADD_RATE";

export const add_rate = (product, user, number) => {
  return {
    type: ADD_RATE,
    payload: {
      product,
      user,
      number,
    },
  };
};
