const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let SolutionNavSchema = new Schema(
  {
    sol: {
      solution_name: {
        type: String,
      },
      solution_type: {
        type: String,
      },
      fcaf: {
        type: String,
      },
      bi: {
        type: String,
      },
      ota: {
        type: String,
      },
      aps: {
        type: String,
      },
      hwurla: {
        type: String,
      },
      wc: {
        type: String,
      },
      wurlpod: {
        type: String,
      },
      osc: {
        type: String,
      },
      bp: {
        type: String,
      },
      lds: {
        type: String,
      },
      ldoa: {
        type: String,
      },
      poad: {
        type: String,
      },
      sdp: {
        type: String,
      },
      sdpoa: {
        type: String,
      },
      tdp: {
        type: String,
      },
      tdpoa: {
        type: String,
      },
      fdp: {
        type: String,
      },
      fdpa: {
        type: String,
      },
      coi: {
        type: String,
      },
      moa: {
        type: String,
      },
      aoa: {
        type: String,
      },
      sr: {
        type: String,
      },
      scs: {
        type: String,
      },
      ccre: {
        type: String,
      },
      cbs: {
        type: String,
      },
      pbs: {
        type: String,
      },
      pow: {
        type: String,
      },
      cap: {
        type: String,
      },
      gfl: {
        type: String,
      },
      cra: {
        type: String,
      },
      fdsa: {
        type: String,
      },
      fcr: {
        type: String,
      },
      shs: {
        type: String,
      },
      cdf: {
        type: String,
      },
      spare: {
        type: String,
      },
      spare1: {
        type: String,
      },
    },
  },
  {
    collection: "Solutions",
  }
);
module.exports = CL = mongoose.model("solutions", SolutionNavSchema);
