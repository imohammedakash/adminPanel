import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Directories/Sidebar';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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


const AddPayment = () => {
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
                            <Form className='theme-form mt-3    '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Slug</Form.Label>
                                    <Form.Control type="text" placeholder="Slug" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Meta</Form.Label>
                                    <TextareaAutosize
                                    className='text-area'
                                        aria-label="empty textarea"
                                        placeholder="Meta"
                                        minRows={8}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Enabled?</Form.Label>
                                    <Form.Check type="checkbox" label="Is Enabled?" className='add-check' />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select size="lg">
                                        <option value="1"></option>
                                        <option value="2">Postpad</option>
                                        <option value="3">Prepaid</option>
                                    </Form.Select>

                                </Form.Group>
                                <Button className='save-btn green' type="submit" >
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
export default AddPayment;