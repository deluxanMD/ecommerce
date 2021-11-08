import { SHIPPING_TYPES } from "../types/shippingTypes";
import { getClothes } from "../../helpers/axios";

const loading = () => ({ type: SHIPPING_TYPES.LOADING });

const success = (data) => ({
  type: SHIPPING_TYPES.SUCCESS,
  payload: data,
});

const error = (err) => ({
  type: SHIPPING_TYPES.ERROR,
  payload: err,
});

export const getData = () => async (dispatch) => {
  dispatch(loading());

  const result = await getClothes();

  if (result.status === 200 && result.data.length > 0) {
    dispatch(success(result.data));
  } else {
    dispatch(error("Something error happened!"));
  }
};
