import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";
export const createCoupon = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "createCouponRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.post(
      `${config.apiurl}/admin/createCoupon`,
      credentials,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
        credentials: true,
      }
    );
    alert("Coupon Registered Successfully");
    dispatch({
      type: "createCouponSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "createCouponFailure",
      payload: error.message,
    });
  }
};
export const getAllCoupon = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCouponRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewCoupon`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getCouponSuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getCouponFailure",
      payload: error.message,
    });
  }
};
