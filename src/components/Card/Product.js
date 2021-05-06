import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
  Button,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      padding: 15,
    },
    [theme.breakpoints.down("md")]: {
      padding: 7,
    },
  },
  media: {
    // height: 0,
    // paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  cardHeader: {
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

function ProductCard({ title, subtitle, children, action = null }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        className={classes.cardHeader}
        subheader={subtitle}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
      >
        {" "}
      </CardHeader>

      {/* <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Paella dish"
        ></CardMedia> */}

      <CardContent>{children}</CardContent>
      <CardActions className={classes.actions}>
        {" "}
        {action}
        {/* <Button size="small">Receipt</Button>
        <Button
          variant="contained"
          className={classes.cartBtn}
          endIcon={<SaveIcon />}
        >
          Submit
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default ProductCard;
