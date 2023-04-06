import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Directories/Sidebar';
import { Table, Card, Form, Row, Col } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactDatatable from '@ashvin27/react-datatable';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
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

const TransactionData = () => {
    const [open, setOpen] = React.useState(false);
    const openCloseSideBar = (state) => {
        setOpen(state);
    }
    const ActionIcon = () => {
        return (
            <>
                <Row>
                    <Col sx={6} className='action-icon'>
                        <EditIcon />
                    </Col>
                    <Col sx={6} className='action-icon'>
                        <DeleteIcon />
                    </Col>
                </Row></>
        )
    }
    // ========================table===========================

    const columns = [
        {
            key: "user",
            text: 'User',
            align: "left",
            sortable: true,
        },
        {
            key: "type",
            text: "Type",
            align: "left",
            sortable: true
        },
        {
            key: "meta",
            text: "Meta",
            align: "left",
            sortable: true
        },
        {
            key: "amount",
            text: "Amount",
            align: "left",
            sortable: true
        },


    ]
    const state = {
        records: [
            {
                "user": "testerstore@delivoo.com",
                "type": "deposit",
                "meta":"Payout",
                "amount":"1000",
            },
            {
                "user": "a@gmail.com",
                "type": "withdraw",
                "meta":"Cash collected",
                "amount":"1000",
            },
           
            {
                "user": "testerstore@delivoo.com",
                "type": "deposit",
                "meta":"Payout",
                "amount":"1000",
            },
            {
                "user": "a@gmail.com",
                "type": "withdraw",
                "meta":"Cash collected",
                "amount":"1000",
            },
            {
                "user": "testerstore@delivoo.com",
                "type": "deposit",
                "meta":"Payout",
                "amount":"1000",
            },
            {
                "user": "a@gmail.com",
                "type": "withdraw",
                "meta":"Cash collected",
                "amount":"1000",
            },
            {
                "user": "testerstore@delivoo.com",
                "type": "deposit",
                "meta":"Payout",
                "amount":"1000",
            },
            {
                "user": "a@gmail.com",
                "type": "withdraw",
                "meta":"Cash collected",
                "amount":"1000",
            },
           
        ]
    }

    const extraButtons = [

    ]
    // =====================================
    return (
        <>
            <Box sx={{ display: 'flex' }} className='dashboard'>
                <CssBaseline />
                <Sidebar openCloseSideBar={openCloseSideBar} />
                <Main open={open}>
                    <DrawerHeader />

                    <Card className='data-card my-3 mx-2'>
                        <div className='card-header order'>
                            <button>TRANSACTIONS</button>
                        </div>
                        <div className='order-body '>
                            <div className='uper-cards px-5'>
                                <Row>
                                    <Col sm={3}>
                                        <h3>Total</h3>
                                        <p>1968072</p>
                                    </Col>
                                    <Col sm={3}>
                                        <h3>Last Month</h3>
                                        <p>0</p>
                                    </Col>
                                    <Col sm={3}>
                                        <h3>Last Week</h3>
                                        <p>0</p>
                                    </Col>
                                    <Col sm={3}>
                                        <h3>Today</h3>
                                        <p>0</p>
                                    </Col>
                                </Row>
                            </div>
                            {/* <C3Chart data={data} /> */}
                            <div className='charts'>

                            </div>
                        </div>
                    </Card>
                    <div className='data-table'>
                        <Card className='data-card'>
                            <div className='card-header'>
                                Transactions
                            </div>
                            <div className='table-section'>

                                <ReactDatatable
                                    records={state.records}
                                    columns={columns}
                                    extraButtons={extraButtons}
                                />
                            </div>
                        </Card>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default TransactionData;