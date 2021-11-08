import { SHIPPING_TYPES } from "../types/shippingTypes";

const initial_state = {
  isLoading: false,
  data: [],
  filteredData: [],
  error: null,
};

const shippingReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SHIPPING_TYPES.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SHIPPING_TYPES.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case SHIPPING_TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
    case SHIPPING_TYPES.FILTER_BY_SIZE:
      return {
        ...state,
        filteredData: state.data.filter(
          (item) => item.details.size === action.payload
        ),
      };
    case SHIPPING_TYPES.CLEAR_FILTER:
      return {
        ...state,
        data: state.data,
      };
    default:
      return state;
  }
};

export default shippingReducer;
