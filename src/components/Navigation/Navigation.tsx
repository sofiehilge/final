import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Box, Button, Divider, IconButton, ListItemIcon, MenuItem, Menu, Tab, Tabs, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { LogoDev, Send, Settings, Logout } from "@mui/icons-material/";
import BurgerMenu from "./BurgerMenu";
import { AvatarButton, NavTypography } from "../../styles/MuiStyles";

/* Pages navigation */
const pages = ["/", "/secondmap", "/thirdmap"];

function Navigation() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    if (pages.indexOf(location.pathname) !== -1) {
      setPageIndex(pages.indexOf(location.pathname));
    }
  }, [location.pathname]);

  const changePage = (event: React.SyntheticEvent, newPage: number) => {
    setPageIndex(newPage);
  };
  /* Breakpoints */
  const breakPointIcons = {
    display: { xs: "none", sm: "none", md: "block", lg: "block" },
    width: { md: "18px", lg: "18px" },
  };

  /* Avatarmenu */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box style={{ display: "flex", alignItems: "center"}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <BurgerMenu />

      <Button
        to="/"
        component={Link}
        style={{
          padding: 0,
          margin: "0 8px",
          height: "44px",
          minHeight: "auto",
          minWidth: "auto",
        }}
      >
        <LogoDev fontSize="large" sx={{ color: "darkolivegreen" }} />
      </Button>
      <NavTypography sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>Responsive Layout Lavet Med Grid</NavTypography>
      <NavTypography sx={{ display: { xs: "block", sm: "blok", md: "none", lg: "none" } }}>RLLMG</NavTypography>
      <>
        <Tabs
          value={pageIndex}
          TabIndicatorProps={{ sx: { height: "4px" } }}
          onChange={changePage}
          textColor="secondary"
          indicatorColor="primary"
          /* Activate if scrollable menu wanted instead of burger-dropdown */
          /* variant="scrollable"
          allowScrollButtonsMobile */
          sx={{
            flex: 1,
            marginLeft: "20px",
            minHeight: "44px",
            "& .MuiButtonBase-root": {
              minHeight: "44px",
            },
          }}
        >
          <Tab
            icon={<Send sx={breakPointIcons} />}
            label="Layoutswitcher"
            to="/"
            component={Link}
            wrapped
            iconPosition="start"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
            }}
          />
          <Tab
            component={Link}
            icon={<Send sx={breakPointIcons} />}
            wrapped
            iconPosition="start"
            label="Draw on map"
            to="/secondmap"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
            }}
          />
          <Tab
            component={Link}
            icon={<Send sx={breakPointIcons} />}
            wrapped
            iconPosition="start"
            label="Bingmap"
            to="/thirdmap"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
            }}
          />
        </Tabs>
      </>

      {/* Avatar menu */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AvatarButton startIcon={<Settings style={{ color: "secondary.dark" }} sx={breakPointIcons} />} sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex" } }}>
          Settings
        </AvatarButton>
        <AvatarButton startIcon={<Settings style={{ color: "secondary.dark" }} sx={breakPointIcons} />} sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex" } }}>
          About us
        </AvatarButton>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.dark" }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        color="secondary.dark"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: "0.75rem" }}>
          <Avatar sx={{ bgcolor: "secondary.dark" }} /> Settings
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: "0.75rem" }}>
          <Avatar sx={{ bgcolor: "secondary.dark" }} /> About us
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ fontSize: "0.75rem" }}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "secondary.dark" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Navigation;
