import { Paper, Tooltip } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Navigation from "../../Components/Nav";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import icons from "./navIcons";
import scientificMethod from "../../helpers/DashboardNavText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },

  //  my styles
  list: {
    // backgroundColor:"black"
  },
  navIcons: {
    color: theme.palette.primary.main,
  },
  listItem: {
    color: "gray",
  },
  hamburgerIcon:{
    color:"white"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const sciSteps = scientificMethod.map((x, i) => [
    x,
    `${x}`,
    `/${x}`,
    icons(classes)[i],
  ]);

  const topBar = (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon className={classes.hamburgerIcon}/>
        </IconButton>
        <Navigation color="white"/>
      </Toolbar>
    </AppBar>
  );
  const hamburgerMenu = (
    <div className={classes.toolbar}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
  );

  const navItems = (
    <List className={classes.list}>
      {sciSteps.map((item, index) => (
        <>
          <Divider style={{ background: "white" }} />
          <ListItem button key={item}>
            <Tooltip title={item[1]} placement="right">
              <ListItemIcon>{item[3]}</ListItemIcon>
            </Tooltip>

            <ListItemText primary={item[1]} className={classes.listItem} />
          </ListItem>
        </>
      ))}
    </List>
  );

  const customDrawer = (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      {hamburgerMenu}
      <Divider />
      {navItems}
      <Divider />
    </Drawer>
  );

  const content = <Paper>Hello World</Paper>;

  return (
    <div className={classes.root}>
      {topBar}
      {customDrawer}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {content}
      </main>
    </div>
  );
}
