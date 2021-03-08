const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ApprovalSchema = new Schema(
  {
    App: {
      status: {
        type: String,
      },
      af_rcn: {
        type: String,
      },
      af_ad: {
        type: String,
      },
      af_sol: {
        type: String,
      },
      af_brp: {
        type: String,
      },
      af_abo: {
        type: String,
      },
      af_iP: {
        type: String,
      },
      af_appB: {
        type: String,
      },
      af_appS: {
        type: String,
      },
      af_ntc: {
        type: String,
      },
      af_vts: {
        type: String,
      },
      af_twa: {
        type: String,
      },
      af_wbaN: {
        type: String,
      },
      af_wbaP: {
        type: String,
      },
      af_ccl: {
        type: String,
      },
      af_eea: {
        type: String,
      },
      af_tla: {
        type: String,
      },
    },
  },
  {
    collection: "Approvals",
  }
);
module.exports = KYB = mongoose.model("APP", ApprovalSchema);
