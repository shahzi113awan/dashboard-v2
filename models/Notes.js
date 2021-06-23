const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let NotesSchema = new Schema(
    {
        Notes: [
            {
                text: {
                    type: String
                },
               date: {
                    type: String
               }
            }]

    },
    {
        collection: "Records",
    }
);
module.exports = Spare = mongoose.model("Notes", NotesSchema);
