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
import { getAllProduct } from "../../actions/products";
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

const ProductsData = () => {
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
  const data = useSelector((state) => state.product.Product);
  const loading = useSelector((state) => state.user.loading);
  const failure = useSelector((state) => state.user.failure);
  const error = useSelector((state) => state.user.error);
  const columns = [
    {
      key: "name",
      text: "name",
      align: "left",
      sortable: true,
    },
    {
      key: "category",
      text: "category",
      align: "left",
      sortable: true,
    },
    {
      key: "subcategory",
      text: "subcategory",
      align: "left",
      sortable: true,
    },
    {
      key: "vendorId",
      text: "vendorId",
      align: "left",
      sortable: true,
    },
    {
      key: "image",
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
  const state = {
    records: [
      {
        title: "Fresh Red Onions",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Red Tomatoes",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Ladyfinger",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Cauliflower",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Potatoes",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Red Onions",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Red Tomatoes",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Ladyfinger",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Cauliflower",
        name: "Green Leaf Vegetables",
      },
      {
        title: "Fresh Potatoes",
        name: "Green Leaf Vegetables",
      },
    ],
  };

  const extraButtons = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);



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
                <div className="card-header">Products</div>
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
export default ProductsData;
