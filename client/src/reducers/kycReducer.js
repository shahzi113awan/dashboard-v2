const initialState = {
  state: [{
    Rdays:"",
    kyc_name: "",
    kyc_sHolds: "",
    kyc_sholders:"",
    kyc_pID: "",
    kyc_startDate: "",
    kyc_ExpiryDate: "",
    kyc_nationality: "",
    kyc_notarized: "",
    kyc_Address: "",
    kyc_adstartDate: "",
    kyc_adExpiryDate: "",
    kyc_toProof: "",
    kyc_paDocument: "",
  }],
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
