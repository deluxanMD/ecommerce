import { CART_TYPES } from "../types/cartTypes";

export const addToCart = (item) => ({
  type: CART_TYPES.ADD_TO_CART,
  payload: item,
});
