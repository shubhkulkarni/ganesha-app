import React from "react";
import { CSVLink } from "react-csv";
import { useGlobal } from "./../../global/global";

const headers = [
  { label: "Receipt no.", key: "receiptNo" },
  { label: "Fullname", key: "name" },
  { label: "Amount", key: "amount" },
  { label: "Mobile", key: "mobile" },
  { label: "Date", key: "date" },
  { label: "Payment mode", key: "payment" },
];

const date = new Date();
function CSVExporter({ children }) {
  const [state, actions] = useGlobal();
  return (
    <CSVLink
      data={state.paymentsData}
      headers={headers}
      filename={`donation_${date}.csv`}
    >
      {children}
    </CSVLink>
  );
}

export default CSVExporter;
