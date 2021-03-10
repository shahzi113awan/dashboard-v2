const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CLSchema = new Schema(
  {
    cl: {
      pendingCount: {
        type: Array,
      },
      fcaf_status: {
        type: String,
      },
      fcaf_fileName: {
        type: String,
      },
      cdf_status: {
        type: String,
      },
      cdf_fileName: {
        type: String,
      },

      bi_status: {
        type: String,
      },
      bi_fileName: {
        type: String,
      },
      ota_status: {
        type: String,
      },
      ota_fileName: {
        type: String,
      },
      aps_status: {
        type: String,
      },
      aps_fileName: {
        type: String,
      },
      hwua_status: {
        type: String,
      },
      hwua_fileName: {
        type: String,
      },
      wc_status: {
        type: String,
      },
      wc_fileName: {
        type: String,
      },
      wuod_status: {
        type: String,
      },
      wuod_fileName: {
        type: String,
      },
      owsc_status: {
        type: String,
      },
      owsc_fileName: {
        type: String,
      },
      bp_status: {
        type: String,
      },
      bp_fileName: {
        type: String,
      },
      ldp_status: {
        type: String,
      },
      ldp_fileName: {
        type: String,
      },
      ldpa_status: {
        type: String,
      },
      ldpa_fileName: {
        type: String,
      },
      pad_status: {
        type: String,
      },
      pad_fileName: {
        type: String,
      },
      sdp_tatus: {
        type: String,
      },
      sdp_fileName: {
        type: String,
      },
      sdpa_status: {
        type: String,
      },
      sdpa_fileName: {
        type: String,
      },
      tdp_status: {
        type: String,
      },
      tdp_fileName: {
        type: String,
      },
      tdpa_status: {
        type: String,
      },
      tdpa_fileName: {
        type: String,
      },
      fdp_status: {
        type: String,
      },
      fdp_fileName: {
        type: String,
      },
      fdpa_status: {
        type: String,
      },
      fdpa_fileName: {
        type: String,
      },
      coi_status: {
        type: String,
      },
      coi_fileName: {
        type: String,
      },
      moa_status: {
        type: String,
      },
      moa_fileName: {
        type: String,
      },
      aoa_status: {
        type: String,
      },
      aoa_fileName: {
        type: String,
      },
      sr_status: {
        type: String,
      },
      sr_fileName: {
        type: String,
      },
      scs_status: {
        type: String,
      },
      scs_fileName: {
        type: String,
      },
      ccre_status: {
        type: String,
      },
      ccre_fileName: {
        type: String,
      },
      cbs_status: {
        type: String,
      },
      cbs_fileName: {
        type: String,
      },
      pbs_status: {
        type: String,
      },
      pbs_fileName: {
        type: String,
      },
      pow_status: {
        type: String,
      },
      pow_fileName: {
        type: String,
      },
      cap_status: {
        type: String,
      },
      cap_fileName: {
        type: String,
      },
      gofl_status: {
        type: String,
      },
      gofl_fileName: {
        type: String,
      },
      cora_status: {
        type: String,
      },
      cora_fileName: {
        type: String,
      },
      fodsa_status: {
        type: String,
      },
      fodsa_fileName: {
        type: String,
      },
      status: {
        type: String,
      },
      fcr_fileName: {
        type: String,
      },
      shs_status: {
        type: String,
      },
      shs_fileName: {
        type: String,
      },
      df_status: {
        type: String,
      },
      df_fileName: {
        type: String,
      },
      spare: {
        type: String,
      },
      spare1: {
        type: String,
      },
      spare2: {
        type: String,
      },
      spare3: {
        type: String,
      },
      spare4: {
        type: String,
      },
      spare5: {
        type: String,
      },
      spare_Text: {
        type: String,
      },
      spare1_Text: {
        type: String,
      },
      spare2_Text: {
        type: String,
      },
      spare3_Text: {
        type: String,
      },
      spare4_Text: {
        type: String,
      },
      spare5_Text: {
        type: String,
      },
      spare_fileName: {
        type: String,
      },
      spare1_fileName: {
        type: String,
      },
      spare2_fileName: {
        type: String,
      },
      spare3_fileName: {
        type: String,
      },
      spare4_fileName: {
        type: String,
      },
      spare5_fileName: {
        type: String,
      },
    },
  },
  {
    collection: "Records",
  }
);
module.exports = CL = mongoose.model("CL", CLSchema);
