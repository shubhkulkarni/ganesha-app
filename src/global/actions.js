export const actions = {
  setPaymentsData: (store, payload) => {
    store.setState({ paymentsData: payload });
  },
  setPaymentsTotal: (store, payload) => {
    store.setState({ paymentsTotal: payload });
  },
  setDataYear: (store, payload) => {
    store.setState({ dataYear: payload });
  },
  setAuth:(store, payload) => {
    store.setState({ auth: payload });
  },
  setAdminMode:(store, payload) => {
    store.setState({ adminMode: payload });
  },

};
