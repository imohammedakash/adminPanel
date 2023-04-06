import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Directories/Sidebar';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../../config/config';

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
// =============role selct ========================


const names = [
    'VEGETABLES & FRUITSdd',
    'FOODS AND MEALS',
    'MEAT AND FISH',
    'PHARMA MEDICINES',
    'CUSTOM DEKIVERY'
];




const EditVendors = () => {
    const [open, setOpen] = React.useState(false);
    const openCloseSideBar = (state) => {
        setOpen(state);
    }
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    // ==========role select end=================
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
                            <Card className='data-card m-0'>
                                <div className='card-header'>
                                    User information
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" defaultValue="kia@gmail.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control type="number" defaultValue="1234567890" />
                                        </Form.Group>
                                    </Form>
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
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Cheque Book Image</Form.Label>
                                            <img className='d-block' src='images/cheque.jpg' />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card m-0 mt-3'>
                                <div className='card-header'>
                                    Store Details
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" defaultValue="Indore" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Area</Form.Label>
                                            <Form.Control type="text" defaultValue="LIG" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Store Name</Form.Label>
                                            <Form.Control type="text" defaultValue="Relince" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Owner Mobile Number</Form.Label>
                                            <Form.Control type="text" defaultValue="123456789" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Enter OTP</Form.Label>
                                            <Form.Control type="text" placeholder='otp' />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card m-0 mt-3'>
                                <div className='card-header'>
                                    Licence
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Licence Number</Form.Label>
                                            <Form.Control type="text" defaultValue="123456" placeholder='Password' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Licenece expiry date</Form.Label>
                                            <Form.Control type="text" defaultValue="01/02/22" placeholder='Password' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Licence Certificate</Form.Label>
                                            <img className='d-block' src='images/certificate.png' />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Form.Group className="mb-3" >
                                <Form.Label>GSTIN Number</Form.Label>
                                <Form.Control type="text" defaultValue="12345678" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>GST Certificate Image</Form.Label>
                                <img className='d-block' src='images/certificate.png' />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Services</Form.Label>
                                <Form.Control type="text" defaultValue="Delivery , Takeaway" />
                            </Form.Group>
                            <Card className='data-card my-3 mx-0'>
                                <div className='card-header'>
                                    Name Translation
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name English</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name Spanish; Castilian</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card my-3 mx-0'>
                                <div className='card-header'>
                                    Tagline Translation
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Tagline English</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Tagline Spanish; Castilian</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card my-3 mx-0'>
                                <div className='card-header'>
                                    Details Translation
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Details English</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Details Spanish; Castilian</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Form className='theme-form mt-3'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Is Verified?</Form.Label>
                                    <Form.Check type="checkbox" label="Is Verified?" className='add-check' disabled />
                                </Form.Group>
                                <FormControl fullWidth>
                                    <Form.Label>Category</Form.Label>

                                    <Select
                                        style={{ height: "40px" }}
                                        multiple
                                        className='form-select'
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Tag" />}
                                        renderValue={(selected) => selected.join(', ')}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={personName.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Slug</Form.Label>
                                    <Form.Control type="Name" placeholder="Slug" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Minimum Order</Form.Label>
                                    <Form.Control type="number" placeholder="Minimum Order" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Delivery Fee</Form.Label>
                                    <Form.Control type="number" placeholder="Delivery Fee" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Area</Form.Label>
                                    <Form.Control type="text" placeholder="Area" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Address" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="text" placeholder="Latitude" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="text" placeholder="Longitude" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Card className='data-card m-0 mb-2'>
                                    <div className='card-header'>
                                        More Actions
                                    </div>
                                    <div className='p-3 '>
                                        <Form className='theme-form'>
                                            <Link to={`${config.baseUrl}add-vendors`}>
                                                <Button type="button" className='add-btn mx-2'>
                                                    CREATE NEW PRODUCTS
                                                </Button>
                                            </Link>
                                            <Link to={`${config.baseUrl}vendors-data`}>
                                                <Button type="button" className='add-btn  mx-2'>
                                                    VIEW ALL PRODUCTS
                                                </Button>
                                            </Link>
                                            <Button type="button" className='add-btn  mx-2'>
                                                CSV
                                            </Button>
                                        </Form>
                                    </div>
                                </Card>
                                <Card className='data-card m-0'>
                                    <div className='card-header'>
                                        Meta Fields
                                    </div>
                                    <div className='p-3'>
                                        <Form className='theme-form'>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Key</Form.Label>
                                                        <Form.Control type="text" placeholder="Time" defaultValue="Time" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Value</Form.Label>
                                                        <Form.Control type="text" placeholder="Time" defaultValue="50" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Key</Form.Label>
                                                        <Form.Control type="text" placeholder="Time" defaultValue="closing_time" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Value</Form.Label>
                                                        <Form.Control type="text" placeholder="Time" defaultValue="18:00" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Key</Form.Label>
                                                        <Form.Control type="text" placeholder="Time" defaultValue="opening_time" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Value</Form.Label>
                                                        <Form.Control type="text" placeholder="Time" defaultValue="08:00" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Button type="button" className='add-btn'>
                                                ADD METAFIELDS
                                            </Button>
                                        </Form>
                                    </div>
                                </Card>

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
export default EditVendors;