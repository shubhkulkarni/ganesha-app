import React from "react";
import { Typography, Hidden } from "@material-ui/core";
import underC from "../../assets/underConstruction.svg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  img: {
    maxWidth: "100%",
    height: "50%",
    marginBottom: 25,
  },
}));

function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={underC} alt="underconstruction" />
      <Hidden smDown>
        <Typography variant="h2">Under Construction. Coming soon.</Typography>
      </Hidden>
      <Hidden smUp>
        <Typography variant="h6">Under Construction. Coming soon.</Typography>
      </Hidden>
    </div>
  );
}

export default Categories;
