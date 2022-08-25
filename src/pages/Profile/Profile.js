import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Hidden,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import { fetchPayments } from "../../services/fetchPayments";
import { useGlobal } from "./../../global/global";
import { getTotal } from "./../../utils/getTotal";
import { NotificationManager } from "react-notifications";
import CSVExporter from "../../components/Export/CSVExporter";
import { generatePdf } from "./../../utils/pdfGenerator";
const columns = [
  { field: "receiptNo", headerName: "Receipt No.", width: 150 },
  { field: "name", headerName: "Fullname", width: 250 },
  { field: "amount", headerName: "Amount", width: 150, type: "number" },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 150,
  },
  {
    field: "mobile",
    headerName: "Mobile",

    sortable: false,
    width: 150,
  },
  {
    field: "payment",
    headerName: "Payment mode",

    width: 150,
  },
];

const receiptsYears = [
  {text: "2029",key: "receipt2029"} ,
  {text: "2028",key: "receipt2028"} ,
  {text: "2027",key: "receipt2027"} ,
  {text: "2026",key: "receipt2026"} ,
  {text: "2025",key: "receipt2025"} ,
  {text: "2024",key: "receipt2024"} , 
  {text: "2023",key: "receipt2023"} , 
  {text: "2022",key: "receipt2022"} ,
  {text: "2021",key: "receipt2021"} , 
  {text: "2020",key: "receipt2020"} , 
  {text: "2019",key: "receipt"} 

]
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "MuiDataGrid-colCellWrapper": {
      color: "red",
    },
  },
  paper: {
    minWidth: "auto",
    [theme.breakpoints.up("md")]: {
      padding: 15,
    },
    [theme.breakpoints.down("md")]: {
      padding: 7,
    },
    // height: "80vh",
  },
  paper1: {
    minWidth: "auto",

    // height: 45,
    marginBottom: 24,
    padding: 15,
    [theme.breakpoints.up("md")]: {},

    overflowX: "hidden",
  },
  formControl: {
    paddingRight: 24,

    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
    },
  },
  arrow: {
    color: "#08be08",
  },
  exportBtn: {
    color: "#dc5319",
    fontWeight: "bold",
    background: "#ffb60054",
    "&:hover": {
      background: "#ffb6008a",
    },
  },
  helper: {
    background: "#4aa6ff29",
    padding: "5px 10px",
    width: "100%",
    color: "#055aae",
    fontWeight: "bold",
    borderRadius: "50px",
  },
  receiptBtn: {
    borderColor: "#ffb60054",
    borderWidth: 2,
    "&:hover": {
      borderColor: "#ffb60054",
      borderWidth: 2,
    },
    // color: "#dc5319",
  },
}));

function Profile() {
  const classes = useStyles();
  const [state, actions] = useGlobal();
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const [recordYear, setRecordYear] = useState(`receipt${currentYear}`);
  const fetchData = async (year) => {
    setLoading(true);
    try {
      let data = await fetchPayments(year);
      setLoading(false);
      actions.setPaymentsData(data);
      actions.setPaymentsTotal(getTotal(data));
      actions.setDataYear(year);
    } catch (err) {
      NotificationManager.error(err.message, "Error");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!state.paymentsData.length) {
      fetchData(recordYear);
    } 
      
  }, []);
  const handleChange = (event) => {
    setRecordYear(event.target.value);
    fetchData(event.target.value);
  };

  const refreshHandler = () => {
    fetchData(recordYear);
  };

  const onRowClick = async ({ row }) => {
    await generatePdf(row);
  };
  const getIndianNumber = (num) => {
    return num.toFixed(1).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,"); // "12,34,567.80"
  };
  return (
    <div>
      <Box className={classes.paper1}>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid xs={12} lg={6} md={6}>
            <Typography variant="h2" component="h3">
              {getIndianNumber(state.paymentsTotal)}{" "}
              <Typography variant="h5" component="span">
                {" "}
                ₹{" "}
              </Typography>
              <ArrowUpwardIcon className={classes.arrow} />{" "}
              <Button
                startIcon={<CachedOutlinedIcon />}
                className={classes.receiptBtn}
                color="primary"
                variant="outlined"
                onClick={refreshHandler}
              >
                {loading ? "Refreshing..." : "Refresh"}
              </Button>
            </Typography>
          </Grid>
          <Grid xs={12} lg={3} md={6}>
            {" "}
            <FormControl
              // variant="filled"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Select year
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={recordYear}
                onChange={handleChange}
                label="Select year"
              > 
                {receiptsYears.map(item => {
                  if(Number(item.text)<=Number(currentYear)){
                    return <MenuItem value={item.key} key={item.key}>{item.text}</MenuItem>
                  } 
                    return <></>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} lg={3}>
            <CSVExporter>
              <Button
                startIcon={<GetAppOutlinedIcon />}
                variant="contained"
                // color="primary"
                fullWidth
                className={classes.exportBtn}
              >
                Export to CSV
              </Button>
            </CSVExporter>
          </Grid>
        </Grid>
      </Box>
      <Paper className={classes.paper}>
        {/* <Container maxWidth="lg"> */}
        <Hidden smUp>
          <Typography
            variant="body"
            display="block"
            align="center"
            className={classes.helper}
          >
            Double click to get receipt
          </Typography>
        </Hidden>
        <Hidden smDown>
          <Typography
            variant="body"
            display="block"
            align="center"
            className={classes.helper}
          >
            Double click on any record to download the PDF receipt{" "}
          </Typography>
        </Hidden>
        <DataGrid
          loading={loading}
          autoHeight
          rows={state.paymentsData}
          columns={columns}
          pageSize={15}
          getRowId={(row) => row.receiptNo}
          onRowDoubleClick={onRowClick}
        />
      </Paper>
    </div>
  );
}

export default Profile;
