import axios from "axios";

import { API } from "../constants/api";

export const getClothes = async () => {
  return await axios.get(`${API.BASE_URL}/prasadhewage/ecommerce/shipments`);
};
