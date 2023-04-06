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




const AddProducts = () => {
    const [value, setValue] = React.useState(null);
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
                                    Title Translations
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Title English</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Title Spanish; Castilian</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Card className='data-card my-3 mx-0'>
                                <div className='card-header'>
                                    Detail Translation
                                </div>
                                <div className='p-3'>
                                    <Form className='theme-form'>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Detail English</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Title Spanish; Castilian</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                            <Form className='theme-form mt-3'>
                            <FormControl fullWidth>
                                        <Form.Label>Category</Form.Label>

                                        <Select
                                        style={{height:"40px"}}
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
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select size="lg">
                                        <option value="1"></option>
                                        <option value="2">fixed</option>
                                        <option value="3">percent</option>
                                    </Form.Select>

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Price" />
                                </Form.Group>
                           
                                <Form.Group className="mb-3">
                                    <Form.Label>Stock quantitty</Form.Label>
                                    <Form.Control type="number" placeholder="Stock quantitty" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Card className='data-card mx-0 my-2'>
                                    <div className='card-header'>
                                    Addon Group

                                    </div>
                                    <div className='p-3'>
                                        <Form className='theme-form'>
                                     
                                        </Form>
                                    </div>
                                </Card>
                                <Button type="button" className='add-btn d-flex ms-auto'>
                                                Add Group
                                            </Button>
                                <Card className='data-card m-0'>
                                    <div className='card-header'>
                                        Meta Fields
                                    </div>
                                    <div className='p-3'>
                                        <Form className='theme-form'>
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
export default AddProducts;