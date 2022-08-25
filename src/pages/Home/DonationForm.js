import React from "react";
import {
  
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
 
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
function DonationForm({ data, error }) {
  const [userData, setUserData] = data;
  const [err, setErr] = error;
  const mandatory = ["amount", "name", "date", "receiptNo"];
  const changeHandler = (e, field) => {
    if (!e.target.value.trim() && mandatory.includes(field)) {
      setErr([...err, field]);
    } else {
      setErr(err.filter((i) => i !== field));
    }
    setUserData({ ...userData, [field]: e.target.value });
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <TextField
            id="standard-basic"
            label="Receipt No."
            fullWidth
            variant="outlined"
            disabled
            onChange={(e) => changeHandler(e, "receiptNo")}
            value={userData.receiptNo}
            error={err.includes("receiptNo")}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              fullWidth
              variant="inline"
              inputVariant="outlined"
              label="Date"
              required
              format="dd/MM/yyyy"
              value={userData.date}
              error={err.includes("date")}
              onChange={(val) => {
                if (!val && mandatory.includes("date")) {
                  setErr([...err, "date"]);
                } else {
                  setErr(err.filter((i) => i !== "date"));
                }
                setUserData({ ...userData, date: val });
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item lg={12} xs={12}>
          <TextField
            id="standard-basic"
            label="Name"
            fullWidth
            required
            error={err.includes("name")}
            variant="outlined"
            onChange={(e) => changeHandler(e, "name")}
            value={userData.name}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount" required>
              Amount
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              onChange={(e) => changeHandler(e, "amount")}
              value={userData.amount}
              error={err.includes("amount")}
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            id="standard-basic"
            label="Contact"
            fullWidth
            error={err.includes("mobile")}
            onChange={(e) => changeHandler(e, "mobile")}
            value={userData.mobile}
            variant="outlined"
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel required id="demo-simple-select-outlined-label">
              Payment mode
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={userData.payment}
              error={err.includes("payment")}
              onChange={(e) => changeHandler(e, "payment")}
              label="Payment mode"
            >
              <MenuItem value={"Cash"}>Cash</MenuItem>
              <MenuItem value={"UPI"}>UPI</MenuItem>
              <MenuItem value={"Card"}>Card</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default DonationForm;
