import React, { useState, useEffect } from "react";
import { useStyles } from "./Styles";
import { Container, Typography, Grid, Button, Paper } from "@material-ui/core";
import ProductCard from "./../../components/Card/Product";
import DonationForm from "./DonationForm";
import SaveIcon from "@material-ui/icons/Save";
import RecentList from "./RecentList";
import { useGlobal } from "./../../global/global";
import { fetchPayments } from "../../services/fetchPayments";
import { createDonation } from "../../services/createDonation";
import { getTotal } from "./../../utils/getTotal";
import { NotificationManager } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import { generatePdf } from "./../../utils/pdfGenerator";
import sendMessage from "./../../utils/SMS";
function Home() {
  const classes = useStyles();
  const [state, actions] = useGlobal();
  const [userData, setUserData] = useState({
    name: "",
    amount: null,
    date: new Date(),
    payment: "Cash",
    mobile: "",
    receiptNo: "",
  });
  const getReceiptNo = (data) => {
    if (!data.length) {
      return `TGM/21/00001`;
    }
    let r = data[0].receiptNo;
    let arr = r.split("/");
    console.log(arr);
    let last = Number(arr[arr.length - 1]);
    let padding = (last + 1).toString().padStart(5, "0");
    return `TGM/21/${padding}`;
  };

  const [dataLoading, setDataLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [err, setErr] = useState([]);
  const fetchData = async () => {
    try {
      setDataLoading(true);
      let data = await fetchPayments("receipt2021");

      actions.setPaymentsData(data);
      actions.setPaymentsTotal(getTotal(data));
      actions.setDataYear("receipt2021");
      setUserData({
        name: "",
        amount: "",
        date: new Date(),
        payment: "Cash",
        mobile: "",
        receiptNo: getReceiptNo(data),
      });
      setDataLoading(false);
    } catch (err) {
      NotificationManager.error(err.message, "Error");
      setDataLoading(false);
    }
  };
  const submitDonation = async (data) => {
    const dataList = Object.entries(userData);

    const errList = dataList
      .map((item) => {
        if (!String(item[1]).trim()) {
          return item[0];
        }
        return null;
      })
      .filter(Boolean);

    setErr([...errList].filter((i) => i !== "mobile"));

    console.log(errList);
    if (![...errList].filter((i) => i !== "mobile").length) {
      try {
        setSubmitLoading(true);
        let newData = { ...data, amount: Number(data.amount) };
        if (newData.mobile.trim()) {
          if (newData.mobile.length !== 10 || isNaN(+newData.mobile)) {
            setSubmitLoading(false);
            return NotificationManager.error("Mobile no. is invalid", "Error");
          }
        } else {
          newData = { ...newData, mobile: "Not disclosed" };
        }
        let resp = await createDonation(newData);
        await fetchData();
        await generatePdf(userData);

        NotificationManager.success("Your donation is successful !", "Success");
        setSubmitLoading(false);
        if (newData.mobile.trim()) {
          if (newData.mobile.length === 10 && !isNaN(+newData.mobile)) {
            await sendMessage(newData);
          }
        }
      } catch (err) {
        NotificationManager.error(err.message, "Error");
        setSubmitLoading(false);
      }
    } else {
      NotificationManager.warning("Some fields are missing", "Invalid");
    }
  };

  const onSubmit = async () => {
    try {
      await submitDonation(userData);
    } catch (err) {
      NotificationManager.error(err.message, "Error");
    }
  };
  useEffect(() => {
    if (state.dataYear !== "receipt2021" || !state.paymentsData.length) {
      fetchData();
    } else {
      setUserData({
        ...userData,
        receiptNo: getReceiptNo(state.paymentsData),
      });
    }
  }, []);

  const resetHandler = () => {
    setUserData({
      ...userData,
      name: "",
      amount: "",
      date: new Date(),
      payment: "Cash",
      mobile: "",
    });
  };
  const buttons = (
    <>
      {" "}
      <Button
        size="medium"
        variant="outlined"
        onClick={resetHandler}
        className={classes.receiptBtn}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        className={classes.cartBtn}
        endIcon={<SaveIcon />}
        size="medium"
        onClick={!submitLoading ? onSubmit : () => {}}
        disabled={!userData.receiptNo || submitLoading}

        // disableElevation
      >
        {submitLoading ? "Submitting..." : "Submit"}
      </Button>{" "}
    </>
  );

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Container maxWidth="xl" className={classes.headerCtr}>
          <Paper className={classes.headerPaper}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                align="center"
                color="tertiary"
                className={classes.homeTitle}
                gutterBottom
              >
                ।। श्री ढुंढिराज टेंबे गणेश मंडळ ।।
              </Typography>

              <Typography
                variant="body1"
                color="primary"
                align="center"
                gutterBottom
                className={classes.homeSubTitle}
              >
                एकदंतं चतुर्हस्तं पाशमंकुशधारिणम। रदं च वरदं हस्तैर्विभ्राणं
                मूषकध्वजम। रक्तं लंबोदरं शूर्पकर्णकं रक्तवाससम।
                रक्तगंधाऽनुलिप्तांगं रक्तपुष्पै: सुपुजितम।। <br />
                भक्तानुकंपिनं देवं जगत्कारणमच्युतम । आविर्भूतं च सृष्टयादौ
                प्रकृते पुरुषात्परम । एवं ध्यायति यो नित्यं स योगी योगिनां वर:।।
              </Typography>
            </Container>
          </Paper>
        </Container>
        <Container maxWidth="xl" className={classes.headerCtr}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
              <ProductCard className={classes.fullSizeCard}>
                ahsdoahf
              </ProductCard>
            </Grid> */}
            <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
              {dataLoading && <LinearProgress />}
              <ProductCard
                className={classes.card}
                title="Donate"
                subtitle="Please fill all the mandatory fields"
                action={buttons}
              >
                {" "}
                <DonationForm
                  error={[err, setErr]}
                  data={[userData, setUserData]}
                />
              </ProductCard>
            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
              {dataLoading && <LinearProgress />}
              <ProductCard
                className={classes.card}
                title="Recent payments"
                subtitle="Click to download receipts"
              >
                <RecentList />
              </ProductCard>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
