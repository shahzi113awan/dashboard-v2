const initialState = {
  state: {
    status: "",
    af_rcn: "",
    af_ad: "",
    af_sol: "",
    af_brp: "",
    af_abo: "",
    af_iP: "",
    af_appB: "",
    af_appS: "",
    af_ntc: "",
    af_vts: "",
    af_twa: "",
    af_wbaN: "",
    af_wbaP: "",
    af_ccl: "",
    af_eea: "",
    af_tla: "",
  },
  isLoading: true,

  // status: "Approved",
  // tpi_rcName: "hahah",
  // tpi_aaSolution: "Pending",
  // tpi_ntc: "Pending",
  // tpi_vtSector: "Pending",
  // tpi_date: "Pending",
  // tpi_brPartner: "Pending",
  // tpi_aBdmOwner: "Pending",
  // tpi_ccLocation: "Pending",
  // tpi_EEADocuments: "Pending",
  // tpi_TLoAR: "Pending",
  // mApp_crAddress: "Pending",
  // mci_crNumber: "Pending",
  // mci_ctAddress: "Pending",
  // mci_vtSector: "Pending",
  // cci_cName: "Pending",
  // cci_skypeAddress: "Pending",
  // cci_mNumber: "Pending",
  // cci_lNumber: "Pending",
  // cci_otpMNumber: "Pending",
  // tci_crAddress: "Pending",
  // tci_crNumber: "Pending",
  // tci_ctAddress: "Pending",
  // tci_wUrl: "Pending",
  // cci_2_cName: "Pending",
  // cci_2_Position: "Pending",
  // cci_2_mNumber: "Pending",
  // cci_2_lNumber: "Pending",
  // cci_2_otpMNumber: "Pending",
  // cci_2_skypeAddress: "Pending",
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_App":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "Delete_App":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "GET_App":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "Update_App":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
