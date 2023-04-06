import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Table, Card, Form, Row, Col } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactDatatable from "@ashvin27/react-datatable";
import Cookies from "js-cookie";
import axios from "axios";
import config from "../../config/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDeliveryProfile } from "../../actions/deliveryProfile";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
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

const DeliveryData = () => {
  const [open, setOpen] = React.useState(false);
  const [delivery, setdelivery] = React.useState([]);

  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  const ActionIcon = () => {
    return (
      <>
        <Row>
          <Col sx={6} className="action-icon">
            <EditIcon />
          </Col>
          <Col sx={6} className="action-icon">
            <DeleteIcon />
          </Col>
        </Row>
      </>
    );
  };
  // ========================table===========================

  const columns = [
    {
      key: "name",
      text: "Name",
      align: "left",
      sortable: true,
    },
    {
      key: "phoneNo",
      text: "phone No",
      align: "left",
      sortable: true,
    },
    {
      key: "accountHolder",
      text: "Account Holder",
      align: "left",
      sortable: true,
    },
    {
      key: "bankName",
      text: "Bank Name",
      align: "left",
      sortable: true,
    },
    {
      key: "accountNo",
      text: "account No",
      align: "left",
      sortable: true,
    },
    {
      key: "action",
      text: "Action",
      className: "action",
      width: 200,
      align: "left",
      sortable: false,
      cell: (record) => {
        return (
          <>
            <ActionIcon />
          </>
        );
      },
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDeliveryProfile());
  }, []);

  const extraButtons = [];
  // =====================================
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        <Main open={open}>
          <DrawerHeader />
          <div className="data-table">
            <Card className="data-card">
              <div className="card-header">Delivery Profiles</div>
              <div className="table-section">
                <ReactDatatable
                  records={delivery}
                  columns={columns}
                  extraButtons={extraButtons}
                />
              </div>
            </Card>
          </div>
        </Main>
      </Box>
    </>
  );
};
export default DeliveryData;
