const initialState = {
  state: {
    kyb_coi: "Pending",
    kyb_moa: "Pending",
    kyb_aoa: "Received",
    kyb_sRegister: "Pending",
    kyb_scs: "Pending",
    kyb_ccre: "Pending",
  },
};

export const kybReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_KYB":
      // console.log(action.payload);
      return { ...state, state: action.payload };
    case "GET_KYB":
      // console.log(action.payload);
      return { ...state, state: action.payload };

    case "SET_pending":
      //   console.log("log from Reducer");
      console.log(action.payload);
      return { ...state, complete: action.payload };
    default:
      return state;
  }
};
