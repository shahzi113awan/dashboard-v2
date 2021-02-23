const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let COMSchema = new Schema(
  {
    Name: {
      type: String,
    },
    
  },
  {
    collection: "Company",
  }
);

module.exports = mongoose.model("Company", COMSchema);
