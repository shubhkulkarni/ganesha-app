import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NotificationManager } from "react-notifications";
import { checkAuth } from "./../../utils/auth";
import { useGlobal } from "./../../global/global";
import logo from "../../assets/icon.png";
import {
  Avatar,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { signInService } from "../../services/authService";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    // backgroundColor: "rgb(247, 249, 252)",
    backgroundImage:
      'linear-gradient(to right,rgba(25 ,10 ,1, 0.84),#330202eb),url("ganesha.jpg")',
    // backgroundRepeat: "no-repeat", linear-gradient(to right,rgb(25 10 1 / 84%),#330202eb),url(ganesha.jpg)
    // backgroundSize: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "520px",
    maxWidth: "90%",
    height: "520px",
    backgroundColor: "#fff",
    boxShadow: "0 0 14px 0 rgba(53,64,82,.05)",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // transform: "translateX(50%)",
    padding: "2.3rem",
  },
  login: {},
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: "0.4rem",
    transform: "translate",
  },
  signinBtn: {
    width: "100%",
    marginTop: "1.2rem",
    textTransform: "initial",
  },
  fgtBtn: {
    width: "100%",
    marginTop: "0.5rem",
    textTransform: "initial",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  text: {
    margin: "0.7rem 0",
  },
  form: {
    marginTop: "1.5rem",
  },
  h4: {
    marginTop: "1rem",
    fontWeight: "bold",
  },
  h6: {
    marginTop: "0.5rem",
  },
}));

function Login({ history }) {
  const classes = useStyles();
  const [state, actions] = useGlobal();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(false);
  const changeHandler = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const signInHandler = async () => {
    setLoading(true);
    if (!formData.username.trim() || !formData.password.trim()) {
      setLoading(false);
      return NotificationManager.warning("Some fields are missing", "Invalid");
    }
    try {
      let { username, password } = formData;
      let response = await signInService({ username, password });
      await localStorage.setItem("accessToken", response.accessToken);
      actions.setAuth(true);
      setLoading(false);
    } catch (err) {
      NotificationManager.error(err.message, "Error");
      NotificationManager.error("Incorrect username or password", "Error");
      actions.setAuth(false);
      setLoading(false);
    }
    // let auth = await checkAuth(formData);

    // actions.setAuth(auth);
    // setLoading(false);
  };

  const checkHandler = (e) => {
    setType((prev) => !prev);
  };
  return (
    <div className={classes.root}>
      <div className={classes.loginContainer}>
        <Avatar className={classes.large} alt="logo" src={logo} />

        <Typography variant="h5" component="h4" className={classes.h4}>
          Welcome back !
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          color="textSecondary"
          className={classes.h6}
        >
          Sign in to your account to continue
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Username"
            required
            fullWidth
            className={classes.text}
            value={formData.username}
            onChange={(e) => changeHandler(e, "username")}
          />
          <TextField
            label="Password"
            type={type ? "text" : "password"}
            required
            fullWidth
            className={classes.text}
            value={formData.password}
            onChange={(e) => changeHandler(e, "password")}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={type}
                onChange={checkHandler}
                name="checkedC"
                color="primary"
              />
            }
            label="Show password"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.signinBtn}
            onClick={signInHandler}
            type="button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <Button variant="default" className={classes.fgtBtn}>
            For any assistance reach out to TGM
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
