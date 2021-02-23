const initialState = {
  state: {
    fsd_cbs: "Pending",
    fsd_pbs: "Pending",
    fsd_pow: "Pending",
    fsd_cap: "Pending",
    lta_gfl: "Pending",
    lta_cra: "Pending",
    lta_fdsa: "Pending",
    lta_fbo_cr: "Pending",
  },
};

export const sdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_SD":
      return {
        ...state,
        state: action.payload,
      };
    case "GET_SD":
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};
