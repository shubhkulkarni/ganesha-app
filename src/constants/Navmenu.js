import PaymentIcon from "@material-ui/icons/Payment";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import InsertChartOutlinedIcon from "@material-ui/icons/InsertChartOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
export const NAVMENU = [
  {
    title: "Donate",
    path: "/donate",
    icon: <PaymentIcon />,
  },
  {
    title: "Payment History",
    path: "/payment-history",
    icon: <PlaylistAddCheckIcon />,
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: <InsertChartOutlinedIcon />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ContactMailOutlinedIcon />,
  },
];
