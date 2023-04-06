import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";
export const Registervendor = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "RegistervendorRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.post(
      `${config.apiurl}/stores/register-store`,
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
    alert("vendor Registered Successfully");
    dispatch({
      type: "RegistervendorSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "RegistervendorFailure",
      payload: error.message,
    });
  }
};
export const getAllvendor = () => async (dispatch) => {
  try {
    dispatch({
      type: "getvendorRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewVendors`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getvendorSuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getvendorFailure",
      payload: error.message,
    });
  }
};
