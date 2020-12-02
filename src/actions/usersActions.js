import axios from "axios";
import { GET_USERS } from "./actionTypes";
export const getUsers = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res);
  dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};
