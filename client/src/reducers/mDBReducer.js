const initialState = [];
// cti_fcaForm: 'Pending',
// cti_bInformation: 'Pending',
// cti_otAgreement: '',
// cti_hwUrl: 'Received',
// cti_wCompliance: '',
// cti_wUrl_proofDomain: 'Pending',
// cti_osChart: 'Pending',
// cti_bPlan: 'Pending',

export const mDBReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "GET_MDB":
      return {
        ...state,
        state: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
