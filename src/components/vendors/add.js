import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Card, Form } from "react-bootstrap";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { Registervendor } from "../../actions/vendor";
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
// =============role selct ========================


const AddVendors = () => {
  const [open, setOpen] = React.useState(false);
  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  const [value, setValue] = React.useState(null);
  const [cheque, setCheque] = useState("");
  const [pan, setPan] = useState("");
  const [licence, setLicence] = useState("");
  const [store, setStore] = useState("");
  const [gst, setGst] = useState("");
  const [menu, setMenu] = useState("");

  const [vendor, setVendor] = useState({
    fullName: "",
    storeName: "",
    email: "",
    password: "",
    phoneNo: "",
    address: {
      streetName: "",
      streetNumber: "",
      city: "",
      countryCode: "",
      stateCode: "",
      zipcode: "",
      latitude: "",
      longitude: "",
    },
    active: true,
    whatsappUpdate: true,
    terms: true,
    policy: true,
    gst: "",
    ownerPan: "",
    bankName: "",
    accountHolder: "",
    accountNo: "",
    ifsc: "",
    upiId: "",
    storeManager: "",
    categories: "",
    services: "",
    liscenseNo: "",
    licenseType: "",
    openingTime: "",
    closingTime: "",
  });
  const handleChange = (e) => {
    if (
      e.target.name === "streetName" ||
      e.target.name === "streetNumber" ||
      e.target.name === "city" ||
      e.target.name === "countryCode" ||
      e.target.name === "stateCode" ||
      e.target.name === "zipcode" ||
      e.target.name === "latitude" ||
      e.target.name === "longitude"
    ) {
      setVendor({
        ...vendor,
        address: {
          ...vendor.address,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setVendor({ ...vendor, [e.target.name]: e.target.value });
    }
  };
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("expiryDate", value);
    formData.append("cancelledCheque", cheque);
    formData.append("uploadMenu", menu);
    formData.append("uploadPan", pan);
    formData.append("uploadGSTcertificate", gst);
    formData.append("licenseImage", licence);
    formData.append("storeImage", store);
    formData.append("fullName", vendor.fullName);
    formData.append("storeName", vendor.storeName);
    formData.append("phoneNo", vendor.phoneNo);
    formData.append("streetName", vendor.address.streetName);
    formData.append("streetNumber", vendor.address.streetNumber);
    formData.append("city", vendor.address.city);
    formData.append("countryCode", vendor.address.countryCode);
    formData.append("stateCode", vendor.address.stateCode);
    formData.append("zipcode", vendor.address.zipcode);
    formData.append("latitude", vendor.address.latitude);
    formData.append("longitude", vendor.address.longitude);
    formData.append("email", vendor.email);
    formData.append("password", vendor.password);
    formData.append("active", vendor.active);
    formData.append("whatsappUpdate", vendor.whatsappUpdate);
    formData.append("terms", vendor.terms);
    formData.append("policy", vendor.policy);
    formData.append("gst", vendor.gst);
    formData.append("accountHolder", vendor.accountHolder);
    formData.append("bankName", vendor.bankName);
    formData.append("accountNo", vendor.accountNo);
    formData.append("ownerPan", vendor.ownerPan);
    formData.append("ifsc", vendor.ifsc);
    formData.append("upiId", vendor.upiId);
    formData.append("storeManager", vendor.storeManager);
    formData.append("categories", vendor.categories);
    formData.append("services", vendor.services);
    formData.append("liscenseNo", vendor.liscenseNo);
    formData.append("licenseType", vendor.licenseType);
    formData.append("openingTime", vendor.openingTime);
    formData.append("closingTime", vendor.closingTime);
    dispatch(Registervendor(formData))
  };
  const error = useSelector((state) => state.vendor.error);
  const failure = useSelector((state) => state.vendor.failure);
  const loading = useSelector((state) => state.vendor.loading);
  return (
    <>
      <Box sx={{ display: "flex" }} className="add-categories">
        <CssBaseline />
        {failure && <ErrorModal error={error} />}
        <Sidebar />
        {
          loading ? <Loading /> : 
            <Main>
              <DrawerHeader />
              <div className="add-user">
                <Card className="form-card">
                  <Card className="data-card m-0">
                    <div className="card-header">User information</div>
                    <div className="p-3">
                      <Form encType="multipart/form-data" className="theme-form">
                        <Form.Group className="mb-3">
                          <Form.Label>fullName</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="fullName"
                            name="fullName"
                            value={vendor.fullName}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={vendor.email}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>storeName</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="storeName"
                            name="storeName"
                            value={vendor.storeName}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="password"
                            name="password"
                            value={vendor.password}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>phoneNo</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="phoneNo"
                            name="phoneNo"
                            value={vendor.phoneNo}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>streetName</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="storeName"
                            name="streetName"
                            value={vendor.address.streetName}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>streetNumber</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="streetNumber"
                            name="streetNumber"
                            value={vendor.address.streetNumber}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="city"
                            name="city"
                            value={vendor.address.city}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>countryCode</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="countryCode"
                            name="countryCode"
                            value={vendor.address.countryCode}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>stateCode</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="stateCode"
                            name="stateCode"
                            value={vendor.address.stateCode}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>zipcode</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="zipcode"
                            name="zipcode"
                            value={vendor.address.zipcode}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>latitude</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="latitude"
                            name="latitude"
                            value={vendor.address.latitude}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>longitude</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="longitude"
                            name="longitude"
                            value={vendor.address.longitude}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="my-3">
                          <Form.Label>Cheque Book Image</Form.Label>

                          <Form.Control
                            name="cancelledCheque"
                            type="file"
                            onChange={(e) => setCheque(e.target.files[0])}
                          />


                        </Form.Group>
                        <Form.Group className="my-3">
                          <Form.Label>Store Image</Form.Label>
                          <Form.Control
                            name="storeImage"
                            type="file"
                            onChange={(e) => setStore(e.target.files[0])}
                          />
                        </Form.Group>

 

                        <Form.Group className="my-3">
                          <Form.Label>GST Image</Form.Label>

                          <Form.Control
                            type="file"
                            name="uploadGSTcertificate"
                            onChange={(e) => setGst(e.target.files[0])}
                          />
                        </Form.Group>
                        <Form.Group className="my-3">
                          <Form.Label>License Image</Form.Label>

                          <Form.Control
                            type="file"
                            name="licenseImage"
                            onChange={(e) => setLicence(e.target.files[0])}
                          />
                        </Form.Group>
                        <Form.Group className="my-3">
                          <Form.Label>PanCard Image</Form.Label>
                          <Form.Control
                            type="file"
                            name="uploadPan"
                            onChange={(e) => setPan(e.target.files[0])}
                          />
                        </Form.Group>
                        <Form.Group className="my-3">
                          <Form.Label>Menu Image</Form.Label>

                          <Form.Control
                            type="file"
                            name="uploadMenu"
                            onChange={(e) => setMenu(e.target.files[0])}
                          />
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
                        <Form.Group className="mb-3">
                          <Form.Label>Active</Form.Label>
                          <Form.Select
                            size="lg"
                            name="active"
                            value={vendor.active}
                            onChange={handleChange}
                            required
                          >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>WhatsappUpdate</Form.Label>
                          <Form.Select
                            size="lg"
                            name="whatsappUpdate"
                            value={vendor.whatsappUpdate}
                            onChange={handleChange}
                            required
                          >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Terms</Form.Label>
                          <Form.Select
                            size="lg"
                            name="terms"
                            value={vendor.terms}
                            onChange={handleChange}
                            required
                          >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Policy</Form.Label>
                          <Form.Select
                            size="lg"
                            name="policy"
                            value={vendor.policy}
                            onChange={handleChange}
                            required
                          >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>GST NUmber</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="gst"
                            name="gst"
                            value={vendor.gst}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>owner Pan</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="ownerPan"
                            name="ownerPan"
                            value={vendor.ownerPan}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>bankName</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="bankName"
                            name="bankName"
                            value={vendor.bankName}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Account Holder</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Account Holder"
                            name="accountHolder"
                            value={vendor.accountHolder}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Account Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Account No"
                            name="accountNo"
                            value={vendor.accountNo}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>IFSC</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ifsc"
                            name="ifsc"
                            value={vendor.ifsc}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>upiId</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="upiId"
                            name="upiId"
                            value={vendor.upiId}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Store Manager</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="storeManager"
                            name="storeManager"
                            value={vendor.storeManager}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>sub Categories</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="categories"
                            name="categories"
                            value={vendor.categories}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Services</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="services"
                            name="services"
                            value={vendor.services}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>liscenseNo</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="liscenseNo"
                            name="liscenseNo"
                            value={vendor.liscenseNo}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>licenseType</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="licenseType"
                            name="licenseType"
                            value={vendor.licenseType}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>openingTime</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="openingTime"
                            name="openingTime"
                            value={vendor.openingTime}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>closingTime</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="closingTime"
                            name="closingTime"
                            value={vendor.closingTime}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Button className="save-btn" onClick={handleSubmit}>
                          Save
                        </Button>

                        <Button className="m-2 back-btn" type="button">
                          Back
                        </Button>
                      </Form>
                    </div>
                  </Card>
                </Card>
              </div>
            </Main>
        }
      </Box>
    </>
  );
};
export default AddVendors;
