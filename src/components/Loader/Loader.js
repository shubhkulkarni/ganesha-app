import React from "react";
import { Typography, Hidden } from "@material-ui/core";
import logo from "../../assets/icon.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "white !important",
  },
  img: {
    maxWidth: "100%",
    height: "20%",
    marginBottom: 25,
  },
}));

function Loader({ title, subtitle, children, action = null }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={logo} alt="logo" />
      <Hidden smDown>
        <Typography variant="h4">Loading...</Typography>
      </Hidden>
      <Hidden smUp>
        <Typography variant="h6">Loading...</Typography>
      </Hidden>
    </div>
  );
}

export default Loader;
