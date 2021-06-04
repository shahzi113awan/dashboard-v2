const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let PreWorkbookSchema = new Schema(
  {
    PreWorkbook  :{
      proposedSol:{
        type: String,
      },
      proposedSol1:{
        type: String,
      },
      proposedSol2:{
        type: String,
      },
      proposedSol3:{
        type: String,
      },
      proposedSol4:{
        type: String,
      },
      
      webAddress:{
        type: String,
      },
      webAddress1:{
        type: String,
      },
      webAddress2:{
        type: String,
      },
      webAddress3:{
        type: String,
      },
      webAddress4:{
        type: String,
      },
      
      ApprovalBuyRate:{
        type: String,
      },
      ApprovalBuyRate1:{
        type: String,
      },
      ApprovalBuyRate2:{
        type: String,
      },
      ApprovalBuyRate3:{
        type: String,
      },
      ApprovalBuyRate4:{
        type: String,
      },
      ApprovalBuyRate5:{
        type: String,
      },
      INTERMEDIARYCOST:{
        type: String,
      },
      INTERMEDIARYCOST1:{
        type: String,
      },
      INTERMEDIARYCOST2:{
        type: String,
      },
      INTERMEDIARYCOST3:{
        type: String,
      },
      INTERMEDIARYCOST4:{
        type: String,
      },
      INTERMEDIARYCOST5:{
        type: String,
      },
      PARTNERCOST:{
        type: String,
      },
      PARTNERCOST1:{
        type: String,
      },
      PARTNERCOST2:{
        type: String,
      },
      PARTNERCOST3:{
        type: String,
      },
      PARTNERCOST4:{
        type: String,
      },
      PARTNERCOST5:{
        type: String,
      },
      EMSSELLRATE:{
        type: String,
      },
      EMSSELLRATE1:{
        type: String,
      },
      EMSSELLRATE2:{
        type: String,
      },
      EMSSELLRATE3:{
        type: String,
      },
      EMSSELLRATE4:{
        type: String,
      },
      EMSSELLRATE5:{
        type: String,
      },
      MERCHANTACCEPTED:{
        type: String,
      },
      MERCHANTACCEPTED1:{
        type: String,
      },
      MERCHANTACCEPTED2:{
        type: String,
      },
      MERCHANTACCEPTED3:{
        type: String,
      },
      MERCHANTACCEPTED4:{
        type: String,
      },
      MERCHANTACCEPTED5:{
        type: String,
      },
      Date:{
        type: String,
      },
      Date1:{
        type: String,
      },
      Date2:{
        type: String,
      },
      Date3:{
        type: String,
      },
      Date4:{
        type: String,
      },
      Date5:{
        type: String,
      },
      Date6:{
        type: String,
      },
      Date7:{
        type: String,
      },
      Date8:{
        type: String,
      },
      Date9:{
        type: String,
      },
      Notes:{
        type: String,
      },
      Notes1:{
        type: String,
      },
      Notes2:{
        type: String,
      },
      Notes3:{
        type: String,
      },
      Notes4:{
        type: String,
      },
      Notes5:{
        type: String,
      },
      Notes6:{
        type: String,
      },
      Notes7:{
        type: String,
      },
      Notes8:{
        type: String,
      },
      Notes9:{
        type: String,
      },
    
  },
},
  {
    collection: "PreWorkbook",
  }
);
module.exports  = mongoose.model("PreWorkbook", PreWorkbookSchema);