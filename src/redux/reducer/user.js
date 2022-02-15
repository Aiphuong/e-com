import { GET_TOKEN } from "../actions/user";

const initialState = {
  info: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN: {
      const { info } = action.payload;
      return { ...state, info };
    }
    default:
      return state;
  }
}
