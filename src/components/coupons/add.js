import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCoupon } from "../../actions/coupon";

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

const AddCoupons = () => {
  const [couponData, setCouponData] = useState({
    category: "",
    couponCode: "",
    isPercent: false,
    amountOff: 15,
  });
  const [image, setImage] = useState('');
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const openCloseSideBar = (state) => {
    setOpen(state);
    };
    const handleChange = (e) => {
        setCouponData({...couponData, [e.target.name]: e.target.value});
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(couponData)
    const formData = new FormData();
    formData.append("category", couponData.category)
    formData.append("image", image)
    formData.append("couponCode", couponData.couponCode)
    formData.append("isPercent", couponData.isPercent)
    formData.append("amountOff", couponData.amountOff)
    formData.append("expiryDuration", value)
    dispatch(createCoupon(formData))
  }
  return (
    <>
      <Box sx={{ display: "flex" }} className="add-categories">
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        <Main open={open}>
          <DrawerHeader />
          <div className="add-user">
            <Card className="form-card">
              <Card className="data-card m-0">
                <div className="card-header">Title Translations</div>
                <div className="p-3">
                  <Form encType="multipart/form-data" className="theme-form" >
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
              </Card>
              <Card className="data-card my-3 mx-0">
                <div className="card-header">Detail Translation</div>
                <div className="p-3">
                  <Form className="theme-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Detail English</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Title Spanish; Castilian</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form>
                </div>
              </Card>
              <Form className="theme-form mt-3" encType="multipart/form-data">
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Code"
                    name="category"
                    value={couponData.category}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Coupon Code</Form.Label>
                  <Form.Control type="text" name="couponCode" value={couponData.couponCode} onChange={handleChange} placeholder="Coupon Code" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Amount of</Form.Label>
                  <Form.Control type="Number" placeholder="amountOff" name="amountOff" value={couponData.amountOff} onChange={handleChange}  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="File" onChange={e=>setImage(e.target.files[0])}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Is Percent</Form.Label>
                  <Form.Select size="lg" name="isPercent" value={couponData.isPercent} onChange={handleChange} >
                    <option value={true}>true</option>
                    <option value={false}>false</option>
                  </Form.Select>

                  {/* {
    "category":"Monsoon Dhamal",
    "image":"./uploads/download.png",
    "couponCode":"kbk5418",
    "isPercent":false,
    "amountOfff":15,
    "expiryDuration":"2022-08-29T13:34:00.000"
} */}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Expires At</Form.Label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          className="date-picker"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Form.Group>
                <Card className="data-card m-0">
                  <div className="card-header">Meta Fields</div>
                  <div className="p-3">
                    <Form className="theme-form">
                      <Button type="button" className="add-btn">
                        ADD METAFIELDS
                      </Button>
                    </Form>
                  </div>
                </Card>

                <Button className="save-btn" onClick={handleSubmit}>
                  Create
                </Button>

                <Button className="m-2 back-btn" type="button">
                  Back
                </Button>
              </Form>
            </Card>
          </div>
        </Main>
      </Box>
    </>
  );
};
export default AddCoupons;
