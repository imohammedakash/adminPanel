import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Table, Card, Form, Row, Col } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactDatatable from "@ashvin27/react-datatable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../actions/orders";
import ErrorModal from "../../ErrorModal";
import Loading from "../../Loading";

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

const OrderData = () => {
  const [open, setOpen] = React.useState(false);
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
      key: "_id",
      text: "ID",
      align: "left",
      sortable: true,
    },
    {
      key: "userId",
      text: "User",
      align: "left",
      sortable: true,
    },
    {
      key: "vendorId",
      text: "Vendor",
      align: "left",
      sortable: true,
    },
    {
      key: "status",
      text: "Status",
      align: "Order Type",
      sortable: true,
    },
    {
      key: "subTotal",
      text: "Total",
      align: "Order Type",
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
  const state = {
    records: [
      {
        id: "225",
        user: "919898989",
        vendor: "",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },
      {
        id: "323",
        user: "919898989",
        vendor: "",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },

      {
        id: "666",
        user: "919898989",
        vendor: "Marina Kitchen",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },

      {
        id: "887",
        user: "919898989",
        vendor: "",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },

      {
        id: "850",
        user: "919898989",
        vendor: "Green Leaf Vegetables",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },

      {
        id: "65",
        user: "919898989",
        vendor: "",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },
      {
        id: "580",
        user: "919898989",
        vendor: "Green Leaf Vegetables",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },
      {
        id: "380",
        user: "919898989",
        vendor: "Green Leaf Vegetables",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },
      {
        id: "83240",
        user: "919898989",
        vendor: "Green Leaf Vegetables",
        order: "CUSTOM",
        status: "new",
        total: "200",
      },
    ],
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrder());
  }, []);

  const data = useSelector((state) => state.order.Order);
  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.error);
  const failure = useSelector((state) => state.order.failure);
  console.log(data);
  const extraButtons = [];
  // =====================================
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {failure && <ErrorModal error={error} />}
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {
          loading ? 
          <Loading />
         : 
          <Main open={open}>
            <DrawerHeader />
            <div className="data-table">
              <Card className="data-card">
                <div className="card-header">Orders</div>
                <div className="table-section">
                  <ReactDatatable
                    records={data}
                    columns={columns}
                    extraButtons={extraButtons}
                  />
                </div>
              </Card>
            </div>
          </Main>
        }
      </Box>
    </>
  );
};
export default OrderData;
