import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";

export const getAllSupport = () => async (dispatch) => {
  try {
    dispatch({
      type: "getSupportRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewComplaints`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
    dispatch({
      type: "getSupportSuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getSupportFailure",
      payload: error.message,
    });
  }
};
