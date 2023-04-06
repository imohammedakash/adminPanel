import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Directories/Sidebar';
import { Table, Card, Form, Row, Col } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactDatatable from '@ashvin27/react-datatable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBanner } from '../../actions/banner';
    
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

const BannerData = () => {
    const [open, setOpen] = React.useState(false);
    const openCloseSideBar = (state) => {
        setOpen(state);
    }
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllBanner())    
    }, [])
    const data = useSelector(state => state.banner.Banner)
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
                key: "category",
                text: 'category',
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
                cell: record => {
                    return (
                        <>
                            <ActionIcon />
                        </>
                    );
                }
            }
        ]
    
        const extraButtons = [
    
        ]
        // =====================================
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar openCloseSideBar={openCloseSideBar} />
                <Main open={open}>
                    <DrawerHeader />
                    <div className='data-table'>
                        <Card className='data-card'>
                            <div className='card-header'>
                            Banners
                            </div>
                            <div className='table-section'>
                              
                                   <ReactDatatable
                                    records={data}
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
export default BannerData;