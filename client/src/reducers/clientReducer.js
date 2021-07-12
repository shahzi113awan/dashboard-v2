const initialState = {state:{
  contactName: "",
  phoneNo: "",
  skypeAdd: "",
  other: "",
  contactName1: "",
  phoneNo1: "",
  skypeAdd1: "",
  other1: "",
  contactName2: "",
  phoneNo2: "",
  skypeAdd2: "",
  other2: "",
  contactName3: "",
  phoneNo3: "",
  skypeAdd3: "",
  other3: "",
  companyAddress1: "",
  companyAddress2: "",
  companyAddress3: "",
  companyAddress4: "",
  mainUrl: "",
  tradingUrl: "",
  tradingUrl2: "",
  mdr: "",
  transactionRate: "",
  transactionRate1: "",
  transactionRate2: "",
  country: "",
  refundRate: "",
  refundRate1: "",
  refundRate2: "",
  chargeBackFee: "",
  chargeBackFee1: "",
  chargeBackFee2: "",
  settlementCurr: "",
  settlementCurr1: "",
  settlementCurr2: "",
  settlementTime: "",
  settlementTime1: "",
  settlementTime2: "",
  rollingReserve: "",
  rollingReserve1: "",
  rollingReserve2: "",
}
}

export const clientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CREATE_CLIENT":
      return { ...state, state: payload };

    default:
      return state;
  }
};
