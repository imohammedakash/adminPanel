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


const AddFaq = () => {
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
                            <Form className='theme-form mt-3'>
                      
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <TextareaAutosize
                                    className='text-area'
                                        aria-label="empty textarea"
                                        placeholder="Title"
                                        minRows={2}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Short Description</Form.Label>
                                    <TextareaAutosize
                                    className='text-area'
                                        aria-label="empty textarea"
                                        placeholder="Short_Description"
                                        minRows={2}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <TextareaAutosize
                                    className='text-area'
                                        aria-label="empty textarea"
                                        placeholder="Description"
                                        minRows={2}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Group>
                                <Button className='save-btn ' type="submit" disabled>
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
export default AddFaq;