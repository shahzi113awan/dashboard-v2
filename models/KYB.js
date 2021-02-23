const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let KYBSchema = new Schema(
  {
    kyb:{kyb_coi:  {
      type: String,
    },
    kyb_moa:  {
      type: String,
    },
    kyb_aoa:  {
      type: String,
    },
    kyb_sRegister:  {
      type: String,
    },
    kyb_scs:  {
      type: String,
    },
    kyb_ccre:  {
      type: String,
    },
  }},
  {
    collection: "Records",
  }
);
module.exports =KYB= mongoose.model("KYB", KYBSchema);
