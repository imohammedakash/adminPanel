import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";

import { Button, Card, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createBanner } from "../../actions/banner";
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

const AddBanner = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const openCloseSideBar = (state) => {
    setOpen(state);
  };
    const dispatch = useDispatch();
    
  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData()
      formData.append("category", category)
      formData.append("image", image);
    dispatch(createBanner(formData));
    };
    const loading = useSelector((state) => state.banner.loading);
    const failure = useSelector((state) => state.banner.failure);
    const error = useSelector((state) => state.banner.error);
  return (
    <>
      <Box sx={{ display: "flex" }} className="add-categories">
        <CssBaseline />
        {failure && <ErrorModal error={error} />}
              <Sidebar openCloseSideBar={openCloseSideBar} />
              {
                  loading ? <Loading /> :

                      <Main open={open}>
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
                                  <Form  encType="multipart/form-data" className="theme-form mt-3" onSubmit={handleSubmit} >
                                      <Form.Group className="mb-3">
                                          <Form.Label>Banner Category</Form.Label>
                                          <Form.Control
                                              type="text"
                                              name="category"
                                              value={category}
                                              placeholder="Enter Banner category"
                                              onChange={(e)=>setCategory(e.target.value)}
                                          />
                                      </Form.Group>

                                      <Form.Group className="mb-3">
                                          <Form.Label>Banner Image</Form.Label>
                                          <Form.Control
                                              type="file"
                                              name="image"
                                              onChange={(e)=>setImage(e.target.files[0])}
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

                                      <Button className="save-btn green" type="submit">
                                          Save
                                      </Button>

                                      <Button className="m-2 back-btn" type="button">
                                          Back
                                      </Button>
                                  </Form>
                              </Card>
                          </div>
                      </Main>
              }
      </Box>
    </>
  );
};
export default AddBanner;
