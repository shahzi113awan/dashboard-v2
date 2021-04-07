const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let SolutionParamsSchema = new Schema(
  {
    solParam: {
      params_sol_name: {
        type: String,
      },
      params_web: {
        type: String,
      },

      params_mdr: {
        type: String,
      },
      params_trate: {
        type: String,
      },
      params_rollingR: {
        type: String,
      },
      params_reffee: {
        type: String,
      },
      params_chbackfee: {
        type: String,
      },
      params_accfee: {
        type: String,
      },
      params_currSet: {
        type: String,
      },
      params_settfee: {
        type: String,
      },
      params_nmsa: {
        type: String,
      },
      params_msh: {
        type: String,
      },
      params_mersett: {
        type: String,
      },
      params_rras: {
        type: String,
      },
      params_prs: {
        type: String,
      },
      params_bp: {
        type: String,
      },
      params_tcur: {
        type: String,
      },
      params_mintv: {
        type: String,
      },
      params_maxtv: {
        type: String,
      },
      params_maxtrc: {
        type: String,
      },
      params_partset: {
        type: String,
      },
      params_note: {
        type: String,
      },
      params_note2: {
        type: String,
      },
      params_note3: {
        type: String,
      },
    },
  },
  {
    collection: "Solutions",
  }
);
module.exports = CL = mongoose.model("solutionParams", SolutionParamsSchema);
