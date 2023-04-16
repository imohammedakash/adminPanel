import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../Directories/Sidebar";
import { Card, Row, Col } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactDatatable from "@ashvin27/react-datatable";
import { useEffect } from "react"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupon } from "../../actions/coupon";
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

const CouponsData = () => {
  const [open, setOpen] = React.useState(false);
  const openCloseSideBar = (state) => {
    setOpen(state);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoupon());
  }, []);

  const coupon = useSelector((state) => state.coupon.Coupon);
  const failure = useSelector((state) => state.coupon.failure);
  const loading = useSelector((state) => state.coupon.loading);
  const error = useSelector((state) => state.coupon.error);
console.log(coupon)
  const ActionIcon = (props) => {
    return (
      <>
        <Row>
          <Col sx={6} className="action-icon">
            <EditIcon />
          </Col>
          <Col sx={6} className="action-icon">
            <DeleteIcon style={{ cursor: "pointer" }} />
          </Col>
        </Row>
      </>
    );
  };
  // ========================table===========================

  const columns = [
    {
      key: "category",
      text: "Category",
      align: "left",
      sortable: true,
    },
    {
      key: "couponCode",
      text: "Code",
      align: "left",
      sortable: true,
    },
    {
      key: "expiryDuration",
      text: "Expiry Date",
      align: "left",
      sortable: true,
    },
    {
      key: "amountOff",
      text: "Amount Off",
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
            <ActionIcon brand={record._id} />
          </>
        );
      },
    },
  ];

  const extraButtons = [];

  //==========================================  Delete Post  ================================

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
                <div className="card-header">Coupons</div>
                <div className="table-section">
                  <ReactDatatable
                    records={coupon}
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
export default CouponsData;
