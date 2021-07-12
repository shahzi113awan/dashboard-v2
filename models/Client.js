const mongoose = require('mongoose')
const Schema =mongoose.Schema
let CLIENTSchema = new Schema(
  {
   client:{contactName: {
      type: String,
    },
  phoneNo: {
      type: String,
    },
  skypeAdd: {
      type: String,
    },
  other: {
      type: String,
    },
  contactName1: {
      type: String,
    },
  phoneNo1: {
      type: String,
    },
  skypeAdd1: {
      type: String,
    },
  other1: {
      type: String,
    },
  contactName2: {
      type: String,
    },
  phoneNo2: {
      type: String,
    },
  skypeAdd2: {
      type: String,
    },
  other2: {
      type: String,
    },
  contactName3: {
      type: String,
    },
  phoneNo3: {
      type: String,
    },
  skypeAdd3: {
      type: String,
    },
  other3: {
      type: String,
    },
  companyAddress1: {
      type: String,
    },
  companyAddress2: {
      type: String,
    },
  companyAddress3: {
      type: String,
    },
  companyAddress4: {
      type: String,
    },
  mainUrl: {
      type: String,
    },
  tradingUrl: {
      type: String,
    },
  tradingUrl2: {
      type: String,
    },
  mdr: {
      type: String,
    },
  transactionRate: {
      type: String,
    },
  transactionRate1: {
      type: String,
    },
  transactionRate2: {
      type: String,
    },
  country: {
      type: String,
    },
  refundRate: {
      type: String,
    },
  refundRate1: {
      type: String,
    },
  refundRate2: {
      type: String,
    },
  chargeBackFee: {
      type: String,
    },
  chargeBackFee1: {
      type: String,
    },
  chargeBackFee2: {
      type: String,
    },
  settlementCurr: {
      type: String,
    },
  settlementCurr1: {
      type: String,
    },
  settlementCurr2: {
      type: String,
    },
  settlementTime: {
      type: String,
    },
  settlementTime1: {
      type: String,
    },
  settlementTime2: {
      type: String,
    },
  rollingReserve: {
      type: String,
    },
  rollingReserve1: {
      type: String,
    },
  rollingReserve2: ""}
  },
  {
    collection: "Records",
  }
);
module.exports = client = mongoose.model("client", CLIENTSchema)