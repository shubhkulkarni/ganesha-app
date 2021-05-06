import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: `rgb(238, 238, 238)`,
    dark: colors.teal[900],
    // main: "#2979ff",
    main: `rgb(35, 48, 68)`,
    // main: "rgb(108, 99, 255)",
    light: colors.teal[600],
  },
  secondary: {
    contrastText: `rgb(35, 48, 68)`,
    dark: "#d32f2f",
    main: white,
    light: "#d32f2f",
  },
  tertiary: {
    main: "#ffb600",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[800],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    disabled: colors.blueGrey[300],
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
