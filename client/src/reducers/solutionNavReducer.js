const initialState = {
  state: {
    solution_name: "",
    solution_type: "",
    fcaf: "",
    bi: "",
    ota: "",
    aps: "",
    hwurla: "",
    wc: "",
    wurlpod: "",
    osc: "",
    bp: "",
    lds: "",
    ldoa: "",
    poad: "",
    sdp: "",
    sdpoa: "",
    tdp: "",
    tdpoa: "",
    fdp: "",
    fdpa: "",
    coi: "",
    moa: "",
    aoa: "",
    sr: "",
    scs: "",
    ccre: "",
    cbs: "",
    pbs: "",
    pow: "",
    cap: "",
    gfl: "",
    cra: "",
    fdsa: "",
    fcr: "",
    shs: "",
    cdf: "",
    spare: "",
    spare1: "",
  },
  isLoading: true,

  
};
export const solReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_sol":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "Delete_sol":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "GET_sol":
      return {
        ...state,
        state: action.payload,
        id: action.id,
        isLoading: false,
      };
    case "Update_sol":
      return {
        ...state,
        state: action.payload,
        id: action.id,
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
