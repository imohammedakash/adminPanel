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
import { getAllSubCategory } from "../../actions/subcategory";
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

const FaqData = () => {
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
      key: "subcategory",
      text: "SubCategory",
      align: "left",
      sortable: true,
    },
    {
      key: "parent",
      text: "Parent",
      align: "left",
      sortable: true,
    },
    {
      key: "image",
      text: "Image",
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
    dispatch(getAllSubCategory());
  },[]);
  const subCategory = useSelector((state) => state.subCategory.SubCategory);
  const loading = useSelector((state) => state.user.loading);
  const failure = useSelector((state) => state.user.failure);
  const error = useSelector((state) => state.user.error);

  const extraButtons = [];
  // =====================================
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {failure && <ErrorModal error={error} />}
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {loading ? 
          <Loading />
         : 
          <Main open={open}>
            <DrawerHeader />
            <div className="data-table">
              <Card className="data-card">
                <div className="card-header">subcategory</div>
                <div className="table-section">
                  <ReactDatatable
                    records={subCategory}
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
export default FaqData;
