import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/tembe.jpg";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  header: {
    flex: 1,
  },
  headerCtr: {
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 24,
  },
  card: {
    maxHeight: 260,
    maxWidth: 200,
  },
  fullSizeCard: {
    maxHeight: 260,
  },
  cartBtn: {
    color: "#dc5319 !important",
    fontWeight: "bold !important",
    background: "#ffb60054 !important",
    "&:hover": {
      background: "#ffb6008a !important",
    },
  },
  receiptBtn: {
    borderColor: "#ffb60054 !important",
    borderWidth: "2px !important",
    "&:hover": {
      borderColor: "#ffb60054 !important",
      borderWidth: "2px !important",
    },
    // color: "#dc5319",
  },
  progress: {
    colorPrimary: "#dc5319",
  },
  homeTitle: { color: "white", fontWeight: 600 },
  homeSubTitle: { color: "white", opacity: 0.8 },
  headerPaper: {
    padding: 24,
    borderRadius: 15,
    // backgroundImage:
    //   "linear-gradient(90deg, rgb(217, 119, 6), rgb(220, 38, 38))",
    backgroundImage:
      `linear-gradient(90deg, rgb(0, 0, 0,0.4), rgb(0, 0, 0,0.2)), url(${Image})`,
    backgroundPosition: "110% 64%",
    backgroundClip: "ppadding-box"
  },
}));
