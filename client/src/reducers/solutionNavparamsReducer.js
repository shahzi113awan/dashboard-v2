const initialState = {
  state: {
    params_sol_name: "",
    params_web: "",

    params_mdr: "",
    params_trate: "",
    params_rollingR: "",
    params_reffee: "",
    params_chbackfee: "",
    params_accfee: "",
    params_currSet: "",
    params_settfee: "",
    params_nmsa: "",
    params_msh: "",
    params_mersett: "",
    params_rras: "",
    params_prs: "",
    params_bp: "",
    params_tcur: "",
    params_mintv: "",
    params_maxtv: "",
    params_maxtrc: "",
    params_partset: "",
    params_note: "",
    params_note2: "",
    params_note3: "",
    params_note: "",
    params_note2: "",
    params_note3: "",
  },
  isLoading: true,
};
export const solParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_sol_Params":
      return {
        ...state,
        state: action.payload,
      };
    case "Delete_sol_Params":
      return {
        ...state,
        state: action.payload,
      };
    case "GET_sol_Params":
      return {
        ...state,
        state: action.payload,

        isLoading: false,
      };
    case "Update_sol_Params":
      return {
        ...state,
        state: action.payload,

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
