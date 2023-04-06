import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";

export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: "getProductRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewproducts`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getProductSuccess",
      payload: data.products,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getProductFailure",
      payload: error.message,
    });
  }
};
