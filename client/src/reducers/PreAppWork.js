const initialState = {
  state:{
    proposedSol:"",
    proposedSol1:"",
    proposedSol2:"",
    proposedSol3:"",
    proposedSol4:"",
    
    webAddress:"",
    webAddress1:"",
    webAddress2:"",
    webAddress3:"",
    webAddress4:"",
    
    ApprovalBuyRate:"",
    ApprovalBuyRate1:"",
    ApprovalBuyRate2:"",
    ApprovalBuyRate3:"",
    ApprovalBuyRate4:"",
    ApprovalBuyRate5:"",
    INTERMEDIARYCOST:"",
    INTERMEDIARYCOST1:"",
    INTERMEDIARYCOST2:"",
    INTERMEDIARYCOST3:"",
    INTERMEDIARYCOST4:"",
    INTERMEDIARYCOST5:"",
    PARTNERCOST:"",
    PARTNERCOST1:"",
    PARTNERCOST2:"",
    PARTNERCOST3:"",
    PARTNERCOST4:"",
    PARTNERCOST5:"",
    EMSSELLRATE:"",
    EMSSELLRATE1:"",
    EMSSELLRATE2:"",
    EMSSELLRATE3:"",
    EMSSELLRATE4:"",
    EMSSELLRATE5:"",
    MERCHANTACCEPTED:"",
    MERCHANTACCEPTED1:"",
    MERCHANTACCEPTED2:"",
    MERCHANTACCEPTED3:"",
    MERCHANTACCEPTED4:"",
    MERCHANTACCEPTED5:"",
    Date:"",
    Date1:"",
    Date2:"",
    Date3:"",
    Date4:"",
    Date5:"",
    Date6:"",
    Date7:"",
    Date8:"",
    Date9:"",
    Notes:"",
    Notes1:"",
    Notes2:"",
    Notes3:"",
    Notes4:"",
    Notes5:"",
    Notes6:"",
    Notes7:"",
    Notes8:"",
    Notes9:"",
  
},
};
export const APPWReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_APPW":
      return {
        ...state,
        state: action.payload,
      };

    case "GET_APPW":
      return {
        ...state,
        state: action.payload,
      };
    case "INITIALIZE_APPW":
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
      break;
  }
};
