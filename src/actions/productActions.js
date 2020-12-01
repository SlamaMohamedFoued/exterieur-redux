import axios from "axios";
import { GET_PRODUCTS } from "./actionTypes";
export const getProducts = () => async (dispatch) => {
  const res = await axios.get("https://api.mocki.io/v1/af37df01");
  //   console.log(data);
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data,
  });
};
