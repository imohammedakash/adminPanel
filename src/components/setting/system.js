import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
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
const names = [
    'VEGETABLES & FRUITSdd',
    'FOODS AND MEALS',
    'MEAT AND FISH',
    'PHARMA MEDICINES',
    'CUSTOM DEKIVERY'
];




const System = () => {
    const [value, setValue] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const openCloseSideBar = (state) => {
        setOpen(state);
    }


    return (
        <>
            <Box sx={{ display: 'flex' }} className='add-categories'>
                <CssBaseline />
                <Sidebar openCloseSideBar={openCloseSideBar} />
                <Main open={open}>
                    <DrawerHeader />
                    <div className='add-user'>
                        <Card className='form-card'>
                            <Card className='data-card m-0'>
                                <div className='card-header'>
                                    App Configuration
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Timezone</Form.Label>
                                            <Form.Select size="lg">
                                                <option value="1"></option>
                                                <option value="2">Pacific/Midway</option>
                                                <option value="3">Pacific/Niue</option>
                                                <option value="4">Pacific/Niue</option>
                                                <option value="5">Pacific/Niue</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card my-3 mx-0'>
                                <div className='card-header'>
                                    Email Configuration
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>From Address</Form.Label>
                                                    <TextField
                                                        fullWidth
                                                        id="outlined-read-only-input"
                                                        defaultValue="opuslabsin@gmail.com"
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                </Form.Group>

                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>From Name</Form.Label>
                                                    <TextField
                                                        fullWidth
                                                        id="outlined-read-only-input"
                                                        defaultValue="FoodMall"
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mail Driver</Form.Label>
                                            <Form.Select size="lg">
                                                <option value="1"></option>
                                                <option value="2">mailgun</option>
                                                <option value="3">smpt</option>
                                                <option value="4">ses</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Host</Form.Label>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="Mailhog"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>SMTP Port</Form.Label>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="1025"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Encryption</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card my-3 mx-0'>
                                <div className='card-header'>
                                Push Notifcations
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Onesignal App ID for Customer App</Form.Label>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="Lorem Impus"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Onesignal REST API for Customer App</Form.Label>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="Lorem Impus"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Onesignal App ID for Vendor App</Form.Label>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="Lorem Impus"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Onesignal REST API for Vendor App</Form.Label>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="Lorem Impus"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Onesignal App ID for Driver App</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Onesignal REST API for Driver App</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Button className='save-btn green' type="submit" style={{width:"100px"}}>
                                    Save
                                </Button>
                        </Card>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default System;