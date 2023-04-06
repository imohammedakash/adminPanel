import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";

export const getAllSubCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: "getSubCategoryRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/fetchSubcategory`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data.data);
    dispatch({
      type: "getSubCategorySuccess",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getSubCategoryFailure",
      payload: error.message,
    });
  }
};
