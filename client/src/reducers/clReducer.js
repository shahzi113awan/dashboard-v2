const initialState = {
  state: {
    pendingCount: [],
    fcaf_status: "",
    fcaf_fileName: "Pending",
    cdf_status: "pending",
    cdf_fileName: "fileName",
    bi_status: "pending",
    bi_fileName: "fileName",
    ota_status: "pending",
    ota_fileName: "fileName",
    aps_status: "pending",
    aps_fileName: "fileName",
    hwua_status: "pending",
    hwua_fileName: "fileName",
    wc_status: "pending",
    wc_fileName: "fileName",
    wuod_status: "pending",
    wuod_fileName: "fileName",
    owsc_status: "pending",
    owsc_fileName: "fileName",
    bp_status: "pending",
    bp_fileName: "fileName",
    ldp_status: "pending",
    ldp_fileName: "fileName",
    ldpa_status: "pending",
    ldpa_fileName: "fileName",
    pad_status: "pending",
    pad_fileName: "fileName",
    sdp_tatus: "pending",
    sdp_fileName: "fileName",
    sdpa_status: "pending",
    sdpa_fileName: "fileName",
    tdp_status: "pending",
    tdp_fileName: "fileName",
    tdpa_status: "pending",
    tdpa_fileName: "fileName",
    fdp_status: "pending",
    fdp_fileName: "fileName",
    fdpa_status: "pending",
    fdpa_fileName: "fileName",
    coi_status: "pending",
    coi_fileName: "fileName",
    moa_status: "pending",
    moa_fileName: "fileName",
    aoa_status: "pending",
    aoa_fileName: "fileName",
    sr_status: "pending",
    sr_fileName: "fileName",
    scs_status: "pending",
    scs_fileName: "fileName",
    ccre_status: "pending",
    ccre_fileName: "fileName",
    cbs_status: "pending",
    cbs_fileName: "fileName",
    pbs_status: "pending",
    pbs_fileName: "fileName",
    pow_status: "pending",
    pow_fileName: "fileName",
    cap_status: "pending",
    cap_fileName: "fileName",
    gofl_status: "pending",
    gofl_fileName: "fileName",
    cora_status: "pending",
    cora_fileName: "fileName",
    fodsa_status: "pending",
    fodsa_fileName: "fileName",
    status: "pending",
    fcr_fileName: "fileName",
    shs_status: "pending",
    shs_fileName: "fileName",
    df_status: "pending",
    df_fileName: "fileName",
  },
};
export const clReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CL":
      return {
        ...state,
        state: action.payload,
      };
    case "GET_CL":
      return {
        ...state,
        state: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
