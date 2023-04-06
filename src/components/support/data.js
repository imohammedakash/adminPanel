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
import { useDispatch, useSelector } from "react-redux";
import { getAllSupport } from "../../actions/support";
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

const SupportData = () => {
  const [open, setOpen] = React.useState(false);
  const [complainList, setcomplainList] = React.useState([]);

  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  const ActionIcon = () => {
    return (
      <>
        <Row>
          <Col sx={12} className="action-icon">
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
      cell: (record) => {
        return (
          <>
            <p>
              {record.storeId.fullName
                ? record.storeId.fullName +
                  (record?.storeId?.lastName
                    ? +" " + record?.storeId?.lastName
                    : "")
                : record.storeId.name +
                  " " +
                  (record?.storeId?.lastName ? record?.storeId?.lastName : "")}
            </p>
          </>
        );
      },
    },
    {
      key: "email",
      text: "Email",
      align: "left",
      sortable: true,
      cell: (record) => {
        return <>{record.storeId.email}</>;
      },
    },
    {
      key: "phoneNo",
      text: "Phone Number",
      align: "left",
      sortable: true,
    },
    {
      key: "user",
      text: "User Type",
      align: "left",
      sortable: true,
    },
    {
      key: "message",
      text: "Message",
      align: "left",
      sortable: true,
    },
    {
      key: "status",
      text: "Status",
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
    dispatch(getAllSupport());
  }, []);
  const data = useSelector((state) => state.support.Support);
  console.log(data);
  const loading = useSelector((state) => state.support.loading);

  const extraButtons = [];
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
                <div className="card-header">Support Requests</div>
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
export default SupportData;
