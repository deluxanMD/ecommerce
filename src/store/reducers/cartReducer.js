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
    case CART_TYPES.INCREMENT:
      return {
        ...state,
        data: state.data.filter(
          (item) => (item.quantity += item.id === action.payload.id && 1)
        ),
      };
    case CART_TYPES.DECREMENT:
      return {
        ...state,
        data: state.data.filter(
          (item) => (item.quantity -= item.id === action.payload.id && 1)
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
