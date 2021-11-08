import { CART_TYPES } from "../types/cartTypes";

export const addToCart = (item) => {
  item = { ...item, quantity: 1 };
  return {
    type: CART_TYPES.ADD_TO_CART,
    payload: item,
  };
};

export const increment = (item) => ({ type: CART_TYPES.INCREMENT });

export const decrement = (item) => ({ type: CART_TYPES.DECREMENT });
