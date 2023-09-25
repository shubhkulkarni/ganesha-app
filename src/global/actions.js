export const reducers = (state, action) => {
  switch (action.type) {
    case "SET_PAYMENTS_DATA":
      return { ...state, paymentsData: action.payload };
    case "SET_PAYMENTS_TOTAL":
      return { ...state, paymentsTotal: action.payload };
    case "SET_DATA_YEAR":
      return { ...state, dataYear: action.payload };
    case "SET_AUTH":
      return { ...state, auth: action.payload };
    case "SET_ADMIN_MODE":
      return { ...state, adminMode: action.payload };
    default:
      return state;
  }
}