import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import config from "../../config/config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListIcon from "@mui/icons-material/List";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LayersIcon from "@mui/icons-material/Layers";
import WalletIcon from "@mui/icons-material/Wallet";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SettingsIcon from "@mui/icons-material/Settings";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { LogoutAdmin } from "../../actions/admin";
// ====Drawer====================================

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
    // setOpen(true);
    // props.openCloseSideBar(true)
  };

  const openSidebar = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    props.openCloseSideBar(false);
  };
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(LogoutAdmin());
  };

  return (
    <>
      <div className="sidebar">
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              GravityBites
            </Typography>
            <PowerSettingsNewIcon
              style={{ cursor: "pointer" }}
              color="action"
              className="ms-auto"
              fontSize="large"
              onClick={handleLogout}
            />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link to={`${config.baseUrl}dashboard`}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 3,
                  }}
                >
                  <ListItemIcon
                    className="sidebar-icons"
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <TimelineIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="side-text"
                    sx={{ opacity: open ? 1 : 0 }}
                  >
                    Dashboard
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <Accordion className="m-0">
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Users
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-user`}>Add new</Link>
                <Link to={`${config.baseUrl}user-data`}>View all</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Categories
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-categories`}>Add New</Link>
                <Link to={`${config.baseUrl}categories-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <EmojiFlagsIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Banner
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-banner`}>Add New</Link>
                <Link to={`${config.baseUrl}banner-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <CardGiftcardIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Coupons
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-coupons`}>Add New</Link>
                <Link to={`${config.baseUrl}coupons-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <LocalShippingIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Delivery Profile
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-delivery`}>Add New</Link>
                <Link to={`${config.baseUrl}delivery-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <PeopleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Vendors
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-vendors`}>Add New</Link>
                <Link to={`${config.baseUrl}vendors-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ProductionQuantityLimitsIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Products
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-products`}>Add New</Link>
                <Link to={`${config.baseUrl}products-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Orders
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}order-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <LayersIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Transactions
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}transaction-data`}>View All</Link>
                <Link to={`${config.baseUrl}payouts`}>Payouts</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <WalletIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Payment Methods
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-payment`}>Add New</Link>
                <Link to={`${config.baseUrl}payment-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <HelpOutlineIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      subCategory
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}add-faq`}>Add New</Link>
                <Link to={`${config.baseUrl}faq-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneInTalkIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Support
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}support-data`}>View All</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    >
                      Settings
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                <Link to={`${config.baseUrl}application`}>Application</Link>
                <Link to={`${config.baseUrl}system`}>System</Link>
              </AccordionDetails>
            </Accordion>

            <Accordion className="m-0">
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon className="expand-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordian-summary"
                onClick={openSidebar}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 1,
                    }}
                  >
                    <ListItemIcon
                      className="sidebar-icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <LocalShippingIcon />
                    </ListItemIcon>
                    <ListItemText
                      className="side-text"
                      sx={{ opacity: open ? 1 : 0 }}
                    ></ListItemText>
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className="accordian-details"></AccordionDetails>
            </Accordion>
          </List>
        </Drawer>
      </div>
    </>
  );
};
export default Sidebar;
