import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";

import { Button, Card, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../actions/category";
import ErrorModal from "../../ErrorModal";
import Loading from "../../Loading";

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

const AddCategories = () => {
  const [category, setCategory] = useState({
    parent: "",
    subcategory: "",
    bgColor: "",
    hsnCode: "",
    gstPercent: 0,
    cashBack: 0,
    commision: 0
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
    formData.append("cashBack", category.cashBack);
    formData.append("gstPercent", category.gstPercent);
    formData.append("hsnCode", category.hsnCode);
    formData.append("subcategory", category.subcategory);
    formData.append("commision", category.commision);
    dispatch(createCategory(formData));
  };
  const error = useSelector((state) => state.category.error);
  const failure = useSelector((state) => state.category.failure);
  const loading = useSelector((state) => state.category.loading);
  return (
    <>
      <Box sx={{ display: "flex" }} className="add-categories">
        {failure && <ErrorModal error={error} />}
        <CssBaseline />
        <Sidebar />
        {loading ? 
          <Loading />
         : 
          <Main>
            <DrawerHeader />
            <div className="add-user">
              <Card className="form-card">
                {/* <Card className="data-card m-0">
                    <div className="card-header">Title Translations</div>
                    <div className="p-3">
                      <Form className="theme-form">
                        <Form.Group className="mb-3">
                          <Form.Label>Title English</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Title Spanish; Castilian</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Form>
                    </div>
                  </Card> */}
                <form encType="multipart/form-data"  className="theme-form mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Sub Categories</Form.Label>
                    <Form.Select
                      size="lg"
                      name="subcategory"
                      value={category.subcategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="pizza">Pizza</option>
                      <option value="chicken">Chiken</option>
                      <option value="vegitables">vegitables</option>
                      <option value="fruites">Fruites</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>CashBack</Form.Label>
                    <Form.Control
                      type="text"
                      name="cashBack"
                      onChange={handleChange}
                      value={category.cashBack}
                      placeholder="ENter CashBack"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>BGColor</Form.Label>
                    <Form.Control
                      type="text"
                      name="bgColor"
                      onChange={handleChange}
                      value={category.bgColor}
                      placeholder="Enter BGColor"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>GST Percentage</Form.Label>
                    <Form.Control
                      type="text"
                      name="gstPercent"
                      onChange={handleChange}
                      value={category.gstPercent}
                      placeholder="Enter GST Percentage"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Commision on Category</Form.Label>
                    <Form.Control
                      type="text"
                      name="commision"
                      onChange={handleChange}
                      value={category.commision}
                      placeholder="Enter Commision to Charged"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>HSNCode</Form.Label>
                    <Form.Control
                      type="text"
                      name="hsnCode"
                      onChange={handleChange}
                      value={category.hsnCode}
                      placeholder="Enter GST Percentage"
                      required
                    />
                  </Form.Group>
                  {/* <Form.Group className="mb-3">
                      <Form.Label>Tax</Form.Label>
                      <Form.Control type="Name" placeholder="Tax" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Slug</Form.Label>
                      <Form.Control type="Name" placeholder="Slug" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Sort Order</Form.Label>
                      <Form.Control type="number" placeholder="Sort Order" />
                    </Form.Group> */}
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
                  {/* <Card className="data-card m-0">
                      <div className="card-header">Meta Fields</div>
                      <div className="p-3">
                        <Form className="theme-form">
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Key</Form.Label>
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Value</Form.Label>
                                <Form.Select size="lg">
                                  <option value="1">ecommerce</option>
                                  <option value="2">package-type</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button type="button" className="add-btn">
                            ADD METAFIELDS
                          </Button>
                        </Form>
                      </div>
                    </Card> */}

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
        }
      </Box>
    </>
  );
};
export default AddCategories;
