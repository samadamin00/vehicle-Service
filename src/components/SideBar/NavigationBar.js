import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useLocation } from "react-router-dom";
import MechanicRequests from "../../pages/MechanicRequests/mechanicRequests";
import RejectedRequests from "../../pages/RejectedRequests/RejectedRequests";
import AllMechanics from "../../pages/AllMechanics/AllMechanics";
import AllUsers from "../../pages/AllUsers/AllUsers";
import MechanicServices from "../../pages/MechanicServices/MechanicServices";

const drawerWidth = 240;

const componentTitles = {
  "mechanic-requests": "Mechanic Requests",
  "rejected-requests": "Rejected Requests",
  "all-mechanics": "All Mechanics",
  "mechanic-services": "Mechanic Services",
  "all-users": "All Users",
};

export default function NavigationBar() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = React.useState("");

  const getPathName = () => {
    return location.pathname.substring(1);
  };

  React.useEffect(() => {
    const pathName = getPathName();
    setSelectedItem(pathName || "all-mechanics");
  }, [location.pathname]);

  const renderComponent = () => {
    let selectedItemWithoutAdmin = selectedItem;
    if (selectedItem.startsWith("admin/")) {
      selectedItemWithoutAdmin = selectedItem.substring(6);
    }

    switch (selectedItemWithoutAdmin) {
      case "mechanic-requests":
        return <MechanicRequests />;
      case "rejected-requests":
        return <RejectedRequests />;
      case "all-mechanics":
        return <AllMechanics />;
      case "mechanic-services":
        return <MechanicServices />;
      case "all-users":
        return <AllUsers />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <Typography variant="h6" noWrap component="div">
            {componentTitles[selectedItem]}
            <button  className="btn btn-orange">Logout</button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className="sidebar"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {Object.entries(componentTitles).map(([key, value]) => (
            <ListItem key={key} disablePadding>
              <ListItemButton component={Link} to={`/admin/${key}`}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {renderComponent()}
      </Box>
    </Box>
  );
}
