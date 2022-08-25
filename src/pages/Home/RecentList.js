import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobal } from "./../../global/global";
import { IconButton } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import { generatePdf } from "./../../utils/pdfGenerator";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 8,
    borderBottom: "1px solid rgb(35, 48, 68, 0.1)",
  },
  date: {
    color: "gray",
  },
  download: { color: "#4caf50" },
  name: {
    // fontWeight: "bold",
   
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
    },
  },
  header:{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "320px",
  }
}));

const downloadHandler = async (data) => {
  return await generatePdf(data);
};

export default function RecentList() {
  const classes = useStyles();
  const [state, actions] = useGlobal();

  // const [list, setList] = useState(state.paymentsData.slice(-10));

  return (
    <div className={classes.container}>
      {state.paymentsData.slice(0, 10).map((item) => {
        return (
          <div className={classes.listRow}>
            <div className={classes.header}>
              <span className={classes.name}>{item.name}</span>{" "}
              {/* <Hidden lgDown> */}
              <div className={classes.date}>({item.date})</div>
              {/* </Hidden> */}
            </div>

            <div className={classes.amount}>
              {item.amount} ₹{" "}
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => downloadHandler(item)}
              >
                <GetAppIcon className={classes.download} />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
