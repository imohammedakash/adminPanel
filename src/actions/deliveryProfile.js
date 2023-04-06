import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";

export const getAllDeliveryProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "getDeliveryProfileRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewDelivery`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getDeliveryProfileSuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getDeliveryProfileFailure",
      payload: error.message,
    });
  }
};
