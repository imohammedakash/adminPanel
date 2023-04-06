import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";

export const getAllOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getOrderRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/getallorder`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("orderData" + data);
    dispatch({
      type: "getOrderSuccess",
      payload: data.order,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getOrderFailure",
      payload: error.message,
    });
  }
};
