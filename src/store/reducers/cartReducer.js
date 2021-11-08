import { CART_TYPES } from "../types/cartTypes";

const initial_state = {
  data: [],
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CART_TYPES.ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
