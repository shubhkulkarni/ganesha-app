import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  content: {
    padding: theme.spacing(3),
    width: "100%",
  },
  drawerIcons: {
    color: theme.palette.primary.contrastText,
  },
  logo: {
    height: 100,
    textAlign: "center",
    marginTop: 20,
    marginLeft: 65,
    marginBottom: 10,
  },
  logoCtr: {
    padding: "20px 0",
    margin: "30px 0",
  },
  title: {
    flexGrow: 1,
    color: "#db3f1d",
    fontWeight: 600,
  },
  mobileSearch: {
    marginLeft: 16,
  },
  mobileSearchInput: {
    color: theme.palette.primary.contrastText,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  activeNav: {
    color: "#f6c548",
    background: "#1c2738",
    "& div": {
      color: "#f6c548",
    },
  },
  menuFooter: {
    textAlign: "center",
    position: "absolute",
    bottom: 20,
    left: 75,
    opacity: 0.7,
  },
}));
