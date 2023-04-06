import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { Button, Card, Form } from "react-bootstrap";
import { RegisterUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorModal from "../../ErrorModal";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// =============role selct ========================

const names = ["Admin", "Constomer", "Vendor", "Delivery"];

const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    address: {
      streetName: "",
      streetNumber: "",
      city: "",
      countryCode: "",
      stateCode: "",
      zipcode: "",
    },
  });
  const [address, setAddress] = useState({
    streetName: "",
    streetNumber: "",
    city: "",
    countryCode: "",
    stateCode: "",
    zipcode: "",
  });
  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // ==========role select end=================
  const handleDataChange = (e) => {
    if (Object.keys(credentials.address).includes(e.target.name)) {
      setCredentials({
        ...credentials,
        address: { ...credentials.address, [e.target.name]: e.target.value },
      });
    } else {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    }
  };
  //   const handleDataChange = (e) => {
  //     setAddress({ ...address, [e.target.name]: e.target.value });
  //   };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    dispatch(RegisterUser(credentials));
  };

  const loading = useSelector((state) => state.user.loading);
  const failure = useSelector((state) => state.user.failure);
  const error = useSelector((state) => state.user.error);
  console.log("error", error);

  console.log(loading);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {failure && <ErrorModal error={error} />}
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {loading ? (
          <Loading />
        ) : (
          <Main open={open}>
            <DrawerHeader />
            <div className="add-user">
              <Card className="form-card">
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={credentials.name}
                      onChange={handleDataChange}
                      placeholder="Name"
                      required
                    />
                    {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                      // </Form.Text> */}
                    {/* == use for validation text=== */}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>last name</Form.Label>
                    <Form.Control
                      name="lastName"
                      value={credentials.lastName}
                      onChange={handleDataChange}
                      type="text"
                      placeholder="Enter user last name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      value={credentials.email}
                      onChange={handleDataChange}
                      name="email"
                      type="email"
                      placeholder="Enter user Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNo"
                      value={credentials.phoneNo}
                      onChange={handleDataChange}
                      placeholder="Enter user Mobile Number"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleDataChange}
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>streetName</Form.Label>
                    <Form.Control
                      type="text"
                      name="streetName"
                      value={credentials.address.streetName}
                      onChange={handleDataChange}
                      placeholder="Enter your streetName"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>streetNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="streetNumber"
                      value={credentials.address.streetNumber}
                      onChange={handleDataChange}
                      placeholder="Enter your streetNumber"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>city</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={credentials.address.city}
                      onChange={handleDataChange}
                      placeholder="Enter user City"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Country Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="countryCode"
                      value={credentials.address.countryCode}
                      onChange={handleDataChange}
                      placeholder="Enter user Country Code"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>State Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="stateCode"
                      value={credentials.address.stateCode}
                      onChange={handleDataChange}
                      placeholder="Enter user State Code"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipcode"
                      value={credentials.address.zipcode}
                      onChange={handleDataChange}
                      placeholder="Enter user zip Code"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Verified? </Form.Label>
                    <Form.Check
                      type="checkbox"
                      label="Mobile Verified??"
                      className="add-check"
                    />
                  </Form.Group>
                  <Form.Group>
                    <FormControl fullWidth>
                      <Form.Label>Roles</Form.Label>

                      <Select
                        style={{ height: "40px" }}
                        multiple
                        className="form-select"
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        // MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" placeholder="Language" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Wallet Balance</Form.Label>
                    <Form.Control type="text" placeholder="Balance" />
                  </Form.Group>
                  <Button className="save-btn" type="submit">
                    Save
                  </Button>
                  <Button className="m-2 back-btn" type="button">
                    Back
                  </Button>
                </Form>
              </Card>
            </div>
          </Main>
        )}
      </Box>
    </>
  );
};
export default AddUser;
