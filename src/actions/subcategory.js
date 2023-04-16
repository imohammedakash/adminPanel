import axios from "axios";
import config from "../config/config";
import Cookies from "js-cookie";

export const getAllSubCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: "getSubCategoryRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
    const { data } = await axios.get(`${config.apiurl}/admin/viewsubcategory`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data.data);
    dispatch({
      type: "getSubCategorySuccess",
      payload: data.subcategories,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "getSubCategoryFailure",
      payload: error.message,
    });
  }
};
export const createSubCategory = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: "createSubCategoryRequest",
    });
    const token = JSON.parse(Cookies.get("LoginGravityAdmin"));
     await axios.post(
      `${config.apiurl}/admin/createsubcategory`,
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
      type: "createSubCategorySuccess",
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "createSubCategoryFailure",
      payload: error.response.data.message,
    });
  }
};
