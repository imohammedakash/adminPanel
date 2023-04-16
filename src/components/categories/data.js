import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Card, Row, Col } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactDatatable from "@ashvin27/react-datatable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions/category";
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

const CatagoriesData = () => {
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const data = useSelector((state) => state.category.Category);
  console.log(data)
  const error = useSelector((state) => state.category.error);
  const failure = useSelector((state) => state.category.failure);
  const loading = useSelector((state) => state.category.loading);

  // ========================table===========================

  const columns = [
    {
      key: "parent",
      text: "Title",
      align: "left",
      sortable: true,
    },
    {
      key: "subcategory",
      text: "Subcategory",
      align: "left",
      sortable: true,
    },
    {
      key: "gstPercent",
      text: "GSTPercent",
      align: "left",
      sortable: true,
    },
    {
      key: "commision",
      text: "Commision",
      align: "left",
      sortable: true,
    },
    {
      key: "scop",
      text: "Image",
      align: "left",
      sortable: true,
      cell: (data) => {
        return (
          <>
           <img src={data.image} className="img-responsive" />
          </>
        );
      },
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
        {failure && <ErrorModal error={error} />}
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        {loading ? 
          <Loading />
        : 
          <Main open={open}>
            <DrawerHeader />
            <div className="data-table">
              <Card className="data-card">
                <div className="card-header">Categories</div>
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
export default CatagoriesData;
