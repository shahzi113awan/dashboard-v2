const initialState = {
  state: {
    cti_fcaForm: "Pending",
    cti_bInformation: "Pending",
    cti_otAgreement: "",
    cti_hwUrl: "Received",
    cti_wCompliance: "",
    cti_wUrl_proofDomain: "Pending",
    cti_osChart: "Pending",
    cti_bPlan: "Pending",
  },
};
export const ctiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CTI":
      return {
        ...state,
        state: action.payload,
      };

    case "GET_CTI":
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
      break;
  }
};
