import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import {
  Box,
  TextField,
  Badge,
  InputAdornment,
  Menu,
  MenuItem,
} from "@material-ui/core";
import logo from "../../assets/ganesha.png";
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { NAVMENU } from "../../constants/Navmenu";
import { NavLink, Link } from "react-router-dom";
import { useGlobal } from "./../../global/global";

const logoutHandler = async () => {
  await localStorage.removeItem("accessToken");
  window.location.reload();
};
function ResponsiveDrawer({ children, ...props }) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [state, actions] = useGlobal();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const date = new Date();
  const drawer = (
    <div>
      <img className={classes.logo} src={logo} />
      <Hidden smUp>
        <Box className={classes.mobileSearch}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { color: `rgb(238, 238, 238)` },
            }}
          />
        </Box>
      </Hidden>
      <List>
        {NAVMENU.map((item, index) => (
          <ListItem
            button
            key={item.path}
            component={NavLink}
            to={item.path}
            activeClassName={classes.activeNav}
            exact
            onClick={() => setMobileOpen(false)}
          >
            <ListItemIcon className={classes.drawerIcons}>
              {item.icon}
            </ListItemIcon>
            {item.title === "Payment History" ? (
              <Badge
                badgeContent={state.paymentsData.length}
                max={1500}
                color="error"
              >
                <ListItemText primary={item.title} />{" "}
              </Badge>
            ) : (
              <ListItemText primary={item.title} />
            )}
          </ListItem>
        ))}
      </List>
      <div className={classes.menuFooter}>version 2.0.1</div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            <Typography variant="h5" className={classes.title}>
              श्री टेंबे गणेशोत्सव {date.getFullYear()}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title}>
              गणेशोत्सव {date.getFullYear()}
            </Typography>
          </Hidden>
          <Hidden smDown>
            <Box>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Hidden>
          {/* <Hidden smDown> */}
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <PowerSettingsNewIcon />
            </IconButton>
          </div>
          {/* </Hidden> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/donate">Donate</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/payment-history">Payment history</Link>
          </MenuItem>
          <MenuItem onClick={handleClose} onClick={logoutHandler}>
            Logout
          </MenuItem>
        </Menu>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
