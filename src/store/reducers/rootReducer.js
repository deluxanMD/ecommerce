import { combineReducers } from "redux";

// Reducers
import shippingReducer from "./shippingReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  shipping: shippingReducer,
  cart: cartReducer,
});

export default rootReducer;
