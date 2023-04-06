import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";
export const createCategory = (credentials) => async (dispatch) => {
  console.log(credentials.get('image'))
  try {
    dispatch({
      type: "createCategoryRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.post(
      `${config.apiurl}/admin/createCategory`,
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
    alert("Category created Successfully");
    dispatch({
      type: "createCategorySuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "createCategoryFailure",
      payload: error.response.data.message,
    });
  }
};
export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCategoryRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewcategory`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data.data);
    dispatch({
      type: "getCategorySuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getCategoryFailure",
      payload: error.message,
    });
  }
};
