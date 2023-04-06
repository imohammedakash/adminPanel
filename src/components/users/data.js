import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Card, Row, Col } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import ReactDatatable from "@ashvin27/react-datatable";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../actions/user";
import Loading from "../../Loading";
import ErrorModal from "../../ErrorModal";
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

const UserData = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const userList = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const failure = useSelector((state) => state.user.failure);
  const error = useSelector((state) => state.user.error);
  console.log(loading);
  const handleEdit = (e) => {
    alert("Edit Initiated");
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
      className: "name",
      align: "left",
      sortable: true,
    },
    {
      key: "email",
      text: "Email",
      className: "address",
      align: "left",
      sortable: true,
    },
    {
      key: "phoneNo",
      text: "Phone No",
      className: "address",
      align: "left",
      sortable: true,
    },
    {
      key: "isApproved",
      text: "isApproved",
      className: "address",
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
  // =====================================
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {
          failure && <ErrorModal error={error} />
        }
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {loading ? 
          <Loading />
         : 
          <Main open={open}>
            <DrawerHeader />
            <div className="data-table">
              <Card className="data-card">
                <div className="card-header">Users</div>
                <div className="table-section">
                  <ReactDatatable
                    records={userList}
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
export default UserData;
