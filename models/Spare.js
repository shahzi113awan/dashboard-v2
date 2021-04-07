const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let SpareSchema = new Schema(
    {
        spare: [
            {
                text: {
                    type: String
                },
                note: {
                    type: String
                },
                status: {
                    type: String
                },
                path: {
                    type: String
                }
            }]

    },
    {
        collection: "Records",
    }
);
module.exports = Spare = mongoose.model("Spare", SpareSchema);
