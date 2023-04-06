import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";
export const RegisterUser = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "RegisterUserRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.post(
      `${config.apiurl}/users/register`,
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
    alert("User Registered Successfully");
    dispatch({
      type: "RegisterUserSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "RegisterUserFailure",
      payload: error.response.data.message,
    });
  }
};
export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewCustomers`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getUserSuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getUserFailure",
      payload: error.message,
    });
  }
};
