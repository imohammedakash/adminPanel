import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Directories/Sidebar';

import { Button, Card, Form, Col, Row } from 'react-bootstrap';

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


const EditDelivery = () => {
    // const [open, setOpen] = React.useState(false);
    // const openCloseSideBar = (state) => {
    //     setOpen(state);
    // }
    return (
        <>
            <Box sx={{ display: 'flex' }} className='add-categories'>
                <CssBaseline />
                <Sidebar />
                <Main>
                    <DrawerHeader />
                    <div className='add-user'>
                        <Card className='form-card'>
                            <Card className='data-card m-0 mt-3'>
                                <div className='card-header'>
                                    Identity Proof
                                </div>
                                <div className='p-3'>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Adhar card ,Pan card,Voter Id</Form.Label>
                                                <img className='d-block' src='images/adhar.jpg' />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Driving Licence</Form.Label>
                                                <img className='d-block' src='images/drive.jpg' />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                            <Card className='data-card m-0 mt-3'>
                                <div className='card-header'>
                                    Bank Details
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Account Holder Name</Form.Label>
                                            <Form.Control type="text" defaultValue="Kia" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Account Number</Form.Label>
                                            <Form.Control type="number" defaultValue="123456789" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>IFSC Code</Form.Label>
                                            <Form.Control type="text" defaultValue="NN123456789" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>UPI Id</Form.Label>
                                            <Form.Control type="text" defaultValue='kia@123' />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <div className='driver mt-3'>
                                    <Form.Label>Driver Profile</Form.Label>
                                    <img src='images/driver.jpg' width="200" className='d-block' />
                            </div>
                            <Form className='theme-form mt-3'>
                                <Form.Group className="mb-3" >
                                    
                                <Form.Group className="mb-3" >
                                            <Form.Label>T-shirt Size</Form.Label>
                                            <Form.Control type="text" defaultValue="12" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Vehical Number</Form.Label>
                                            <Form.Control type="text" defaultValue="12" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Insurance Number</Form.Label>
                                            <Form.Control type="text" defaultValue="34567878/7" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Pay onboarding frrs</Form.Label>
                                            <Form.Control type="text" defaultValue='kia@123' />
                                        </Form.Group>
                                    <Form.Label>Assigned? </Form.Label>
                                    <Form.Check type="checkbox" label="Assigned?" className='add-check' disabled />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Online?</Form.Label>
                                    <Form.Check type="checkbox" label="Is Online?" className='add-check' />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Verified?</Form.Label>
                                    <Form.Check type="checkbox" label="Is Verified?" className='add-check' />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" placeholder='Latitude' />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" placeholder='Longitude' />
                                </Form.Group>
                                <Button className='save-btn' type="submit" disabled>
                                    Save
                                </Button>

                                <Button className='m-2 back-btn' type="button">
                                    Back
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default EditDelivery;