import axios from "axios";
import Cookies from "js-cookie";
import config from "../config/config";
export const LoginAdmin = (email, password, navigate) => async (dispatch) => {
  console.log("email" + email, password);
  try {
    dispatch({
      type: "LoginRequest",
    });
    const data = await axios.post(
      `${config.apiurl}/admin/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    Cookies.set("LoginGravityAdmin", JSON.stringify(data.data.token));
    dispatch({
      type: "LoginSuccess",
    });
    dispatch({
      type: "userDataRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const userData = await axios.get(`${config.apiurl}/admin/userdata`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: "userDataSuccess",
      payload: userData.data,
    });
    dispatch({
      type: "orderDataRequest",
    });
    const orderData = await axios.get(`${config.apiurl}/admin/orderdata`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: "orderDataSuccess",
      payload: orderData.data,
    });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};
export const getOrderData = () => async (dispatch) => {
  try {
    dispatch({
      type: "orderDataRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const orderData = await axios.get(`${config.apiurl}/admin/orderdata`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: "orderDataSuccess",
      payload: orderData.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "orderDataFailure",
      payload: error.message,
    });
  }
};
export const getUserData = () => async (dispatch) => {
  try {
    dispatch({
      type: "userDataRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const userData = await axios.get(`${config.apiurl}/admin/userdata`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: "userDataSuccess",
      payload: userData.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "userDataFailure",
      payload: error.message,
    });
  }
};
export const LogoutAdmin = () => async (dispatch) => {
  try {
    Cookies.set("LoginGravityAdmin", null);
    dispatch({
      type: "LoginFailure",
      payload: "Admin logged out",
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};
export const getAdminControll = () => async (dispatch) => {
  try {
    dispatch({
      type: "AdminControllRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/control`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: "AdminControllSuccess",
      payload: data.control,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "AdminControllFailure",
      payload: error.message,
    });
  }
};

export const updateAdminControll = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdateAdminControllRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.post(
      `${config.apiurl}/admin/updatecontrol`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
        credentials: true,
      }
    );
    dispatch({
      type: "UpdateAdminControllSuccess",
      payload: data,
    });

    
    alert("Admin Updated Successfully");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "UpdateAdminControllFailure",
      payload: error.response.data.message,
    });
  }
};
