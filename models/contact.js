const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ContactSchema = new Schema(
  {
    contact: {
      fn: {
        type: String,
      },
      comp: {
        type: String,
      },
      jt: {
        type: String,
      },
      fa: {
        type: String,
      },
      email: {
        type: String,
      },
      da: {
        type: String,
      },
      waAdd: {
        type: String,
      },
      IMAdd: {
        type: String,
      },
      business: {
        type: String,
      },
      home: {
        type: String,
      },
      Bfax: {
        type: String,
      },
      mob: {
        type: String,
      },
      Add: {
        type: String,
      },
    },
  },
  {
    collection: "Contacts",
  }
);
module.exports = contact = mongoose.model("contact", ContactSchema);
