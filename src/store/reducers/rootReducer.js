import { combineReducers } from "redux";

// Reducers
import shippingReducer from "./shippingReducer";

const rootReducer = combineReducers({
  shipping: shippingReducer,
});

export default rootReducer;
