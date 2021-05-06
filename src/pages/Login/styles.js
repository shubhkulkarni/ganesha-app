import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  ctr: {
    height: "100vh",
    width: "100%",
    filter: "blur(2px)",
    backgroundImage:
      'linear-gradient(to right,rgba(198 ,77 ,0, 0.5),#440000),url("ganesha.jpg")',
  },
}));

//linear-gradient(to right,rgb(198 77 0 / 50%),#440000),url(ganesha.jpg)
