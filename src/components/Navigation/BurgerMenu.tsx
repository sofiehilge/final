import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { SendOutlined } from "@mui/icons-material/";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  /*  const setOpenedState = () => {
    let reverseOpened = openDrawer;
    setOpenDrawer(!reverseOpened);
  }; */
  const drawerWidth = "325px";
  const transitionDuration = 1000;

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        transitionDuration={{
          enter: transitionDuration,
          exit: transitionDuration,
        }}
        sx={{
          position: "relative",
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            top: "48px",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        }}
      >
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <SendOutlined color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <SendOutlined color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/repositories" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <SendOutlined color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Repositories" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>

      <IconButton
        sx={{
          color: "secondary.dark",
          marginLeft: "auto",
          display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          padding: "0px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Hamburger label="Show menu" toggled={openDrawer} toggle={setOpenDrawer} size={15} />
      </IconButton>
    </>
  );
};

export default BurgerMenu;
