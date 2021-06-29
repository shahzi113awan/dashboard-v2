const initialState = {
  state: {
    cistatus:"",
    tpi_rcName: "",
    tpi_aaSolution: "CCBILL",
    tpi_iP: "",
    tpi_ntc: "Pending",
    tpi_vtSector: "Pending",
    tpi_date: "Pending",
    tpi_brPartner: "Pending",
    tpi_aBdmOwner: "Pending",
    tpi_ccLocation: "Pending",
    tpi_EEADocuments: "Pending",
    tpi_TLoAR: "Pending",
    mci_mcrAddress: "",
    mci_crAddress: "Pending",
    mci_crNumber: "Pending",
    mci_ctAddress: "Pending",
    mci_vtSector: "Pending",
    cci_cName: "Pending",
    cci_email: "",
    cci_skypeAddress: "Pending",
    cci_mNumber: "Pending",
    cci_lNumber: "Pending",
    cci_otpMNumber: "Pending",
    tci_crAddress: "Pending",
    tci_crNumber: "Pending",
    tci_ctAddress: "Pending",
    tci_wUrl: "Pending",
    cci_2_cName: "Pending",
    cci_2_Position: "Pending",
    cci_2_mNumber: "Pending",
    cci_2_lNumber: "Pending",
    cci_2_otpMNumber: "Pending",
    cci_2_skypeAddress: "Pending",
  },

  isLoading: true,
}
//   // tpi_rcName: "hahah",
//   // tpi_aaSolution: "Pending",
//   // tpi_ntc: "Pending",
//   // tpi_vtSector: "Pending",
//   // tpi_date: "Pending",
//   // tpi_brPartner: "Pending",
//   // tpi_aBdmOwner: "Pending",
//   // tpi_ccLocation: "Pending",
//   // tpi_EEADocuments: "Pending",
//   // tpi_TLoAR: "Pending",
//   // mci_crAddress: "Pending",
//   // mci_crNumber: "Pending",
//   // mci_ctAddress: "Pending",
//   // mci_vtSector: "Pending",
//   // cci_cName: "Pending",
//   // cci_skypeAddress: "Pending",
//   // cci_mNumber: "Pending",
//   // cci_lNumber: "Pending",
//   // cci_otpMNumber: "Pending",
//   // tci_crAddress: "Pending",
//   // tci_crNumber: "Pending",
//   // tci_ctAddress: "Pending",
//   // tci_wUrl: "Pending",
//   // cci_2_cName: "Pending",
//   // cci_2_Position: "Pending",
//   // cci_2_mNumber: "Pending",
//   // cci_2_lNumber: "Pending",
//   // cci_2_otpMNumber: "Pending",
//   // cci_2_skypeAddress: "Pending",
// };
export const ciReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_CI":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "Delete_CI":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "UPDATE_ID":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "UPDATE_Status":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "GET_CI":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "GET_IBAN":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "GETONE_CI":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "Update_CI":
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
    case "RESER_CI":
      return {
        ...state,
        state:initialState.state ,
      };
    case "IBAN":
      return {
        ...state,
        isIBAN: true,
      };
    default:
      return state;
  }
};
