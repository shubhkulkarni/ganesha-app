import { useReducer,useContext } from "react";
import { reducers } from "./actions";
import { DataContext } from "../App";

const initialState = {
  paymentsData: [],
  paymentsTotal: 0,
  dataYear: "",
  auth: false,
  adminMode: false,
};

export const useDataStore = () => {
  const [state,dispatch] = useReducer(reducers,initialState);
  const actions = {
    setPaymentsData: (payload) => {
      dispatch({ type:'SET_PAYMENTS_DATA', payload });
    },
    setPaymentsTotal: (payload) => {
      dispatch({ type:'SET_PAYMENTS_TOTAL', payload });
    },
    setDataYear: (payload) => {
      dispatch({ type:'SET_DATA_YEAR', payload });
    },
    setAuth: (payload) => {
      dispatch({ type:'SET_AUTH', payload });
    },
    setAdminMode: (payload) => {
      dispatch({ type:'SET_ADMIN_MODE', payload });
    },
  }
  return [state,actions];
}

export const useGlobal = ()=>{
  const [state,actions] = useContext(DataContext);
  return [state,actions]
}