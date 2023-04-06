import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Table, Card, Form, Row, Col } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactDatatable from "@ashvin27/react-datatable";
import { Link } from "react-router-dom";
import config from "../../config/config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllvendor } from "../../actions/vendor";
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

const VendorsData = () => {
  const [open, setOpen] = React.useState(false);
  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  const ActionIcon = () => {
    return (
      <>
        <Row>
          <Col sx={6} className="action-icon">
            <Link to={`${config.baseUrl}edit-vendors`}>
              <EditIcon />
            </Link>
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
      key: "fullName",
      text: "fullName",
      align: "left",
      sortable: true,
    },
    {
      key: "storeName",
      text: "storeName",
      align: "left",
      sortable: true,
    },
    {
      key: "categories",
      text: "Store Category",
      align: "left",
      sortable: true,
    },
    {
      key: "storeImage",
      text: "Store Image",
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

  const extraButtons = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllvendor());
  }, []);

  const vendorList = useSelector((state) => state.vendor.vendor);
  const loading = useSelector((state) => state.vendor.loading);
  // =====================================
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {loading ? 
          <Loading />
         : 
          <Main open={open}>
            <DrawerHeader />
            <div className="data-table">
              <Card className="data-card">
                <div className="card-header">Vendors</div>
                <div className="table-section">
                  <ReactDatatable
                    records={vendorList}
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
export default VendorsData;
