import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAdminControll, updateAdminControll } from "../../actions/admin";
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

const Applications = () => {
  const data = useSelector((state) => state.admin.control);
  const [controlData, setControlData] = useState({
    deliverLaterDiscount: data.deliverLaterDiscount,
    serviceFee: data.serviceFee,
    distanceFee: data.distanceFee,
    baseFare: data.baseFare,
    incentiveTen1: data.incentiveTen1,
    incentiveTen2: data.incentiveTen2,
    incentiveTen3: data.incentiveTen3,
    incentiveTen4: data.incentiveTen4,
    incentiveTen5: data.incentiveTen5,
    customPackaging: data.customPackaging,
    customdistanceFee: data.customdistanceFee,
    insentive: data.insentive,
    maxInsentive: data.maxInsentive,
    cashBackTime: data.cashBackTime,
    currencyCode: data.currencyCode,
    currencyIcon: data.currencyIcon,
    taxInPercent: data.taxInPercent,
    supportEmail: data.supportEmail,
    supportPhone: data.supportPhone,
    deliveryFeePerKm: data.deliveryFeePerKm,
    distanceMetric: data.distanceMetric,
    deliveryDistance: data.deliveryDistance,
    referAmount: data.referAmount,
    meetFish: data.meetFish,
    foodMeal: data.foodMeal,
    pharmaMedicines: data.pharmaMedicines,
    petSupplies: data.petSupplies,
    vegitablesFruit: data.vegitablesFruit,
    customDelivery: data.customDelivery,
    termsConditions: {
      aboutUs: data.termsConditions.aboutUs,
      privacyPolicy: data.termsConditions.privacyPolicy,
    },
  });
  const [open, setOpen] = React.useState(false);
  const openCloseSideBar = (state) => {
    setOpen(state);
  };


  const handleChange = (e) => {
    if (e.target.name === "privacyPolicy" || e.target.name === "aboutUs") {
      setControlData({
        ...controlData,
        termsConditions: {
          ...controlData.termsConditions,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setControlData({ ...controlData, [e.target.name]: e.target.value });
    }
  };
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAdminControll(controlData))
  };
  const loading = useSelector((state) => state.admin.loading);
  const failure = useSelector((state) => state.admin.failure);
  const error = useSelector((state) => state.admin.error);
  return (
    <>
      <Box sx={{ display: "flex" }} className="add-categories">
        <CssBaseline />
        {failure && <ErrorModal error={error} />}
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {loading ? 
          <Loading />
         : 
          <Main open={open}>
            <DrawerHeader />
            <div className="add-user">
              <Card className="data-card m-0">
                <div className="card-header">Update Settings</div>
                <Form className="theme-form mt-3 p-3" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Insentive</Form.Label>
                    <Form.Control
                      type="number"
                      name="incentive"
                      value={controlData.insentive}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Max Insentive</Form.Label>
                    <Form.Control
                      type="number"
                      name="maxInsentive"
                      value={controlData.maxInsentive}
                      onChange={handleChange}
                      placeholder="Max insentivet"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Currency Code</Form.Label>
                    <Form.Control
                      type="number"
                      name="currencyCode"
                      value={controlData.currencyCode}
                      onChange={handleChange}
                      placeholder="currencyCode"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Currency Icon</Form.Label>
                    <Form.Control
                      type="text"
                      name="currencyIcon"
                      value={controlData.currencyIcon}
                      onChange={handleChange}
                      placeholder="currencyIcon"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Tax In Percent</Form.Label>
                    <Form.Control
                      type="number"
                      name="taxInPercent"
                      value={controlData.taxInPercent}
                      onChange={handleChange}
                      placeholder="taxInPercent"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Support Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="supportEmail"
                      value={controlData.supportEmail}
                      onChange={handleChange}
                      placeholder="supportEmail"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Support Phone</Form.Label>
                    <Form.Control
                      type="Number"
                      name="supportPhone"
                      placeholder="supportPhone"
                      required
                      value={controlData.supportPhone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Distance Fee</Form.Label>
                    <Form.Control
                      type="text"
                      name="distanceFee"
                      placeholder="Distance Fee"
                      required
                      value={controlData.distanceFee}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Service Fee</Form.Label>
                    <Form.Control
                      type="text"
                      name="serviceFee"
                      required
                      placeholder="Delivery Fee"
                      value={controlData.serviceFee}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Base Fare</Form.Label>
                    <Form.Control
                      type="text"
                      name="baseFare"
                      required
                      placeholder="Delivery Fee"
                      value={controlData.baseFare}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Custom Packaging</Form.Label>
                    <Form.Control
                      type="text"
                      name="customPackaging"
                      required
                      placeholder="Delivery Fee"
                      value={controlData.customPackaging}
                      onChange={10}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Custom Distance Fee</Form.Label>
                    <Form.Control
                      type="number"
                      name="customdistanceFee"
                      placeholder="Custom Distance Fee"
                      required
                      value={controlData.customdistanceFee}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>IncentiveTen 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Delivery Fee"
                      name="incentiveTen1"
                      required
                      value={controlData.incentiveTen1}
                      onChange={10}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>IncentiveTen 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="incentiveTen2"
                      required
                      placeholder="Delivery Fee"
                      value={controlData.incentiveTen2}
                      onChange={10}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>IncentiveTen 3</Form.Label>
                    <Form.Control
                      type="text"
                      name="incentiveTen3"
                      required
                      placeholder="Delivery Fee"
                      value={controlData.incentiveTen3}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>IncentiveTen 4</Form.Label>
                    <Form.Control
                      type="text"
                      name="incentiveTen4"
                      placeholder="Delivery Fee"
                      required
                      value={controlData.incentiveTen4}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>IncentiveTen 5</Form.Label>
                    <Form.Control
                      type="text"
                      name="incentiveTen5"
                      placeholder="Delivery Fee"
                      required
                      value={controlData.incentiveTen5}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Delivery Fee Per Km Charge</Form.Label>
                    <Form.Control
                      type="text"
                      name="deliveryFeePerKm"
                      placeholder="Delivery Fee per Km"
                      required
                      value={controlData.deliveryFeePerKm}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Distance Metric</Form.Label>
                    <Form.Control
                      type="text"
                      name="distanceMetric"
                      placeholder="Delivery Fee per Km"
                      required
                      value={controlData.distanceMetric}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Refer Amount</Form.Label>
                    <Form.Control
                      type="text"
                      name="referAmount"
                      placeholder="Refer Amount"
                      required
                      value={controlData.referAmount}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Delivery Distance</Form.Label>
                    <Form.Control
                      type="text"
                      name="deliveryDistance"
                      placeholder="Delivery Distance"
                      required
                      value={controlData.deliveryDistance}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Meet& Fish Commision</Form.Label>
                    <Form.Control
                      type="number"
                      name="meetFish"
                      placeholder="meetFish Commision rate"
                      required
                      value={controlData.meetFish}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Pet Supplies Commision</Form.Label>
                    <Form.Control
                      type="number"
                      name="petSupplies"
                      placeholder="PetSupplies Commision rate"
                      required
                      value={controlData.petSupplies}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Pet Supplies Commision</Form.Label>
                    <Form.Control
                      type="number"
                      name="foodMeal"
                      placeholder="Food & Meal Commision rate"
                      required
                      value={controlData.foodMeal}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Pharma Medicines Commision</Form.Label>
                    <Form.Control
                      type="number"
                      name="pharmaMedicines"
                      placeholder="PharmaMedicines Commision rate"
                      required
                      value={controlData.pharmaMedicines}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Vegitables Fruit Commision</Form.Label>
                    <Form.Control
                      type="number"
                      name="vegitablesFruit"
                      placeholder="vegitablesFruit Commision rate"
                      required
                      value={controlData.vegitablesFruit}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Custom Delivery Commision</Form.Label>
                    <Form.Control
                      type="number"
                      name="customDelivery"
                      placeholder="customDelivery Commision rate"
                      required
                      value={controlData.customDelivery}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Privacy Policy</Form.Label>
                    <TextareaAutosize
                      className="text-area"
                      aria-label="empty textarea"
                      minRows={2}
                      name="privacyPolicy"
                      onChange={handleChange}
                      value={controlData.termsConditions.privacyPolicy}
                      style={{ width: "100%" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>About Us</Form.Label>
                    <TextareaAutosize
                      className="text-area"
                      aria-label="empty textarea"
                      name="aboutUs"
                      value={controlData.termsConditions.aboutUs}
                      onChange={handleChange}
                      minRows={2}
                      style={{ width: "100%" }}
                    />
                  </Form.Group>

                  <Button className="save-btn green" type="submit">
                    Save
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
export default Applications;
