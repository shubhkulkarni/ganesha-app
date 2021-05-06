import React from "react";
import globalHook from "use-global-hook";
import { actions } from "./actions";

const initialState = {
  paymentsData: [],
  paymentsTotal: 0,
  dataYear: "",
  auth: false,
};

export const useGlobal = globalHook(React, initialState, actions);
