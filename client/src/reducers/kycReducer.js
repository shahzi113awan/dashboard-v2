const initialState = {
  state: {
    kyc_name: "",
    kyc_sHolds: "",
    kyc_pID: "",
    kyc_startDate: "",
    kyc_ExpiryDate: "",
    kyc_nationality: "",
    kyc_notarized: "",
    kyc_Address: "",
    kyc_toProof: "",
    kyc_paDocument: "",
  },
};

export const kycReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_KYC":
      return { ...state, state: action.payload };
    case "GET_KYC":
      return { ...state, state: action.payload };

    default:
      return state;
  }
};
