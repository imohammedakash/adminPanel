import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";
export const createBanner = (credentials) => async (dispatch) => {
  console.log("Banner Form data value",credentials.get("image"))
  try {
    dispatch({
      type: "createBannerRequest",
    });
    console.log("Banner Action",credentials)
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    console.log(token)
    const { data } = await axios.post(
      `${config.apiurl}/admin/newbanner`,
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
    alert("Banner Created Successfully");
    dispatch({
      type: "createBannerSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "createBannerFailure",
      payload: error.message,
    });
  }
};
export const getAllBanner = () => async (dispatch) => {
  try {
    dispatch({
      type: "getBannerRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/banner`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getBannerSuccess",
      payload: data.banner,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getBannerFailure",
      payload: error.message,
    });
  }
};
