import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Directories/Sidebar';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminControll, getOrderData, getUserData } from '../../actions/admin';
import { useEffect } from 'react';
// import C3Chart from 'react-c3js';
// import 'c3/c3.css';

// const data = {
//   columns: [
//     ['data1', 30, 200, 100, 400, 150, 250],
//     ['data2', 50, 20, 10, 40, 15, 25]
//   ]
// };

// const mountNode = document.getElementById('react-c3js');

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
      flexGrow: 1,
      backgroundColor: '#ecf0f6',
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),

  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const openCloseSideBar = (state) => {
    setOpen(state);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminControll());
  }, []);
  useEffect(() => {
    dispatch(getUserData())
  }, []);
  useEffect(() => {
    dispatch(getOrderData())
  }, []);
  const userData = useSelector(state=> state.admin.userCount)
  const orderData = useSelector(state=> state.admin.orderCount)
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar openCloseSideBar={openCloseSideBar} />
        <Main open={open}>
          <DrawerHeader />
          <div className='dashboard'>
            <Card className='data-card my-3 mx-0'>
              <div className='card-header'>
                Active Orders
              </div>
              <div className="responsive-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                  width="600" height="450" frameBorder="0" allowFullScreen></iframe>
              </div>
            </Card>
            <Card className='data-card my-3 mx-0'>
              <div className='card-header order'>
                <button>ORDER</button>
              </div>
              <div className='order-body'>
                <div className='uper-cards'>
                  <Row>
                    <Col sm={3}>
                      <h3>Total</h3>
                      <p>{orderData?.totalSize}</p>
                    </Col>
                    <Col sm={3}>
                      <h3>Last Month</h3>
                      <p>{orderData?.lastmonthsize}</p>
                    </Col>
                    <Col sm={3}>
                      <h3>Last Week</h3>
                      <p>{orderData?.lastweeksize}</p>
                    </Col>
                    <Col sm={3}>
                      <h3>Today</h3>
                      <p>{orderData?.lastdaysize}</p>
                    </Col>
                  </Row>
                </div>
                {/* <C3Chart data={data} /> */}
                <div className='charts'>

                </div>
              </div>
            </Card>
            <Row>
              <Col md={9}>
                <Card className='data-card my-3 mx-0'>
                  <div className='card-header'>
                    User Activity
                  </div>
                  <div className='charts'>
                  </div>
                </Card>
              </Col>
              <Col md={3}>
                <div className='vertical-col'>
                  <div className='verscol'>
                    <h3>Today's Revenue</h3>
                    <p>0</p>
                    <div className='spins'></div>
                    <span>No change since yesterday</span>
                  </div>
                  <div className='verscol mt-2'>
                    <h3>Today's Revenue</h3>
                    <p>0</p>
                    <div className='spins'></div>
                    <span>No change since yesterday</span>
                  </div>
                  <div className='verscol mt-2'>
                    <h3>Today's Revenue</h3>
                    <p>0</p>
                    <div className='spins'></div>
                    <span>No change since yesterday</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Card className='data-card my-3 mx-0'>
              <div className='card-header order'>
                <button>USERS</button>
              </div>
              <div className='order-body'>
                <div className='uper-cards'>
                  <Row>
                    <Col sm={3}>
                      <h3>Total</h3>
                      <p>{userData?.totalSize}</p>
                    </Col>
                    <Col sm={3}>
                      <h3>Last Month</h3>
                      <p>{userData?.lastmonthsize}</p>
                    </Col>
                    <Col sm={3}>
                      <h3>Last Week</h3>
                      <p>{userData?.lastweeksize}</p>
                    </Col>
                    <Col sm={3}>
                      <h3>Today</h3>
                      <p>{userData?.lastdaysize}</p>
                    </Col>
                  </Row>
                </div>
                {/* <C3Chart data={data} /> */}
                <div className='charts'>

                </div>
              </div>
            </Card>
          </div>
        </Main>
      </Box>
    </>
  );
}
export default Dashboard;