import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../../ErrorModal";
import Loading from "../../Loading";
import { createSubCategory } from "../../actions/subcategory";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor: "#ecf0f6",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AddFaq = () => {
  const [category, setCategory] = useState({
    parent: "",
    subcategory: "",
  });
  const [image, setImage] = useState("");
  // const [open, setOpen] = React.useState(false);
  // const openCloseSideBar = (state) => {
  //     setOpen(state);
  // }
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("parent", category.parent);
    formData.append("image", image);
    formData.append("subcategory", category.subcategory);
    dispatch(createSubCategory(formData));
  };
  const loading = useSelector((state) => state.subCategory.loading);
  const failure = useSelector((state) => state.subCategory.failure);
  const error = useSelector((state) => state.subCategory.error);
  return (
    <>
      <Box sx={{ display: "flex" }} className="add-categories">
        {failure && <ErrorModal error={error} />}
        <CssBaseline />
        <Sidebar />
        {loading ? (
          <Loading />
        ) : (
          <Main>
            <DrawerHeader />
            <div className="add-user">
              <Card className="form-card">
                <form encType="multipart/form-data" className="theme-form mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Control
                      type="text"
                      name="subcategory"
                      onChange={handleChange}
                      value={category.subcategory}
                      placeholder="Enter Sub Category"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Parent</Form.Label>
                    <Form.Select
                      aria-label="select example"
                      name="parent"
                      value={category.parent}
                      onChange={handleChange}
                      required
                    >
                      <option value="Groceries">Groceries</option>
                      <option value="null">Null</option>
                      <option value="FOOD AND MEALS">FOOD AND MEALS</option>
                      <option value="MEALS AND FISH">MEALS AND FISH</option>
                      <option value="PHARMA AND MADICINES">
                        PHARMA AND MADICINES
                      </option>
                      <option value="CUSTOM DELIVERY">CUSTOM DELIVERY</option>
                      <option value="PETSUPPLIES">PETSUPPLIES</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Form.Group>
                  <Button className="save-btn" onClick={handleSubmit}>
                    Save
                  </Button>

                  <Button className="m-2 back-btn" type="button">
                    Back
                  </Button>
                </form>
              </Card>
            </div>
          </Main>
        )}
      </Box>
    </>
  );
};
export default AddFaq;
