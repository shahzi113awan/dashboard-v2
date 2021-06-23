const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CLSchema = new Schema(
  {
    cl: {
      pendingCount: {
        type: Array,
      },
      fcaf_status: {
        type: String,
      },
      fcaf_fileName: {
        type: String,
      },
      fcaf_note: {
        type: String,
      },
      cdf_status: {
        type: String,
      },
      cdf_fileName: {
        type: String,
      },
      cdf_note: {
        type: String,
      },

      bi_status: {
        type: String,
      },
      bi_fileName: {
        type: String,
      },
      bi_note: {
        type: String,
      },
      ota_status: {
        type: String,
      },
      ota_fileName: {
        type: String,
      },
      ota_note: {
        type: String,
      },
      aps_status: {
        type: String,
      },
      aps_fileName: {
        type: String,
      },
      aps_note: {
        type: String,
      },
      hwua_status: {
        type: String,
      },
      hwua_fileName: {
        type: String,
      },
      hwua_note: {
        type: String,
      },
      wc_status: {
        type: String,
      },
      wc_fileName: {
        type: String,
      },
      wc_note: {
        type: String,
      },
      wuod_status: {
        type: String,
      },
      wuod_fileName: {
        type: String,
      },
      wuod_note: {
        type: String,
      },
      owsc_status: {
        type: String,
      },
      owsc_fileName: {
        type: String,
      },
      owsc_note: {
        type: String,
      },
      bp_status: {
        type: String,
      },
      bp_fileName: {
        type: String,
      },
      bp_note: {
        type: String,
      },
      ldp_status: {
        type: String,
      },
      ldp_fileName: {
        type: String,
      },
      ldp_note: {
        type: String,
      },
      ldpa_status: {
        type: String,
      },
      ldpa_fileName: {
        type: String,
      },
      ldpa_note: {
        type: String,
      },
      pad_status: {
        type: String,
      },
      pad_fileName: {
        type: String,
      },
      pad_note: {
        type: String,
      },
      sdp_status: {
        type: String,
      },
      sdp_fileName: {
        type: String,
      },
      sdp_note: {
        type: String,
      },
      sdpa_status: {
        type: String,
      },
      sdpa_fileName: {
        type: String,
      },
      sdpa_note: {
        type: String,
      },
      tdp_status: {
        type: String,
      },
      tdp_fileName: {
        type: String,
      },
      tdp_note: {
        type: String,
      },
      tdpa_status: {
        type: String,
      },
      tdpa_fileName: {
        type: String,
      },
      tdpa_note: {
        type: String,
      },
      fdp_status: {
        type: String,
      },
      fdp_fileName: {
        type: String,
      },
      fdp_note: {
        type: String,
      },
      fdpa_status: {
        type: String,
      },
      fdpa_fileName: {
        type: String,
      },
      fdpa_note: {
        type: String,
      },
      coi_status: {
        type: String,
      },
      coi_fileName: {
        type: String,
      },
      coi_note: {
        type: String,
      },
      moa_status: {
        type: String,
      },
      moa_fileName: {
        type: String,
      },
      moa_note: {
        type: String,
      },
      aoa_status: {
        type: String,
      },
      aoa_fileName: {
        type: String,
      },
      aoa_note: {
        type: String,
      },
      sr_status: {
        type: String,
      },
      sr_fileName: {
        type: String,
      },
      sr_note: {
        type: String,
      },
      scs_status: {
        type: String,
      },
      scs_fileName: {
        type: String,
      },
      scs_note: {
        type: String,
      },
      ccre_status: {
        type: String,
      },
      ccre_fileName: {
        type: String,
      },
      ccre_note: {
        type: String,
      },
      cbs_status: {
        type: String,
      },
      cbs_fileName: {
        type: String,
      },
      cbs_note: {
        type: String,
      },
      pbs_status: {
        type: String,
      },
      pbs_fileName: {
        type: String,
      },
      pbs_note: {
        type: String,
      },
      pow_status: {
        type: String,
      },
      pow_fileName: {
        type: String,
      },
      pow_note: {
        type: String,
      },
      cap_status: {
        type: String,
      },
      cap_fileName: {
        type: String,
      },
      cap_note: {
        type: String,
      },
      gofl_status: {
        type: String,
      },
      gofl_fileName: {
        type: String,
      },
      gofl_note: {
        type: String,
      },
      cora_status: {
        type: String,
      },
      cora_fileName: {
        type: String,
      },
      cora_note: {
        type: String,
      },
      fodsa_status: {
        type: String,
      },
      fodsa_fileName: {
        type: String,
      },
      fodsa_note: {
        type: String,
      },
      status: {
        type: String,
      },
      fcr_fileName: {
        type: String,
      },
      fcr_note: {
        type: String,
      },
      shs_status: {
        type: String,
      },
      shs_fileName: {
        type: String,
      },
      shs_note: {
        type: String,
      },
      df_status: {
        type: String,
      },
      df_fileName: {
        type: String,
      },
      df_note: {
        type: String,
      },
      clg_status:{
        type:String
      },
      clg_fileName:{
        type:String
      },
      
      TIC1: {
        type: Boolean,
      },
      TIC2: {
        type: Boolean,
      },
      TIC3: {
        type: Boolean,
      },
      TIC4: {
        type: Boolean,
      },
      TIC5: {
        type: Boolean,
      },
      TIC6: {
        type: Boolean,
      },
      TIC7: {
        type: Boolean,
      },
      TIC8: {
        type: Boolean,
      },
      TIC9: {
        type: Boolean,
      },
      TIC21: {
        type: Boolean,
      },
      TIC22: {
        type: Boolean,
      },
      TIC23: {
        type: Boolean,
      },
      TIC24: {
        type: Boolean,
      },
      TIC25: {
        type: Boolean,
      },
      TIC26: {
        type: Boolean,
      },
      TIC27: {
        type: Boolean,
      },
      TIC28: {
        type: Boolean,
      },
      TIC29: {
        type: Boolean,
      },
    
     KYCC1: {
        type: Boolean,
      },
     KYCC2: {
        type: Boolean,
      },
     KYCC3: {
        type: Boolean,
      },
     KYCC4: {
        type: Boolean,
      },
     KYCC5: {
        type: Boolean,
      },
     KYCC6: {
        type: Boolean,
      },
     KYCC7: {
        type: Boolean,
      },
     KYCC8: {
        type: Boolean,
      },
     KYCC9: {
        type: Boolean,
      },
     KYCC10: {
        type: Boolean,
      },
     KYCC21: {
        type: Boolean,
      },
     KYCC22: {
        type: Boolean,
      },
     KYCC23: {
        type: Boolean,
      },
     KYCC24: {
        type: Boolean,
      },
     KYCC25: {
        type: Boolean,
      },
     KYCC26: {
        type: Boolean,
      },
     KYCC27: {
        type: Boolean,
      },
     KYCC28: {
        type: Boolean,
      },

     KYCC29: {
        type: Boolean,
      },



    KYBC1: {
        type: Boolean,
      },
    KYBC2: {
        type: Boolean,
      },
    KYBC3: {
        type: Boolean,
      },
    KYBC4: {
        type: Boolean,
      },
    KYBC5: {
        type: Boolean,
      },
    KYBC6: {
        type: Boolean,
      },
    KYBC7: {
        type: Boolean,
      },
    KYBC8: {
        type: Boolean,
      },
    KYBC9: {
        type: Boolean,
      },
    KYBC10: {
        type: Boolean,
      },
    KYBC21: {
        type: Boolean,
      },
    KYBC22: {
        type: Boolean,
      },
    KYBC23: {
        type: Boolean,
      },
    KYBC24: {
        type: Boolean,
      },
    KYBC25: {
        type: Boolean,
      },
    KYBC26: {
        type: Boolean,
      },
    KYBC27: {
        type: Boolean,
      },
    KYBC28: {
        type: Boolean,
      },
    KYBC29: {
        type: Boolean,
      },



    SDC1: {
        type: Boolean,
      },
    SDC2: {
        type: Boolean,
      },
    SDC3: {
        type: Boolean,
      },
    SDC4: {
        type: Boolean,
      },
    SDC5: {
        type: Boolean,
      },
    SDC6: {
        type: Boolean,
      },
    SDC7: {
        type: Boolean,
      },
    SDC8: {
        type: Boolean,
      },
    SDC9: {
        type: Boolean,
      },
    SDC10: {
        type: Boolean,
      },
    SDC21: {
        type: Boolean,
      },
    SDC22: {
        type: Boolean,
      },
    SDC23: {
        type: Boolean,
      },
    SDC24: {
        type: Boolean,
      },
    SDC25: {
        type: Boolean,
      },
    SDC26: {
        type: Boolean,
      },
    SDC27: {
        type: Boolean,
      },
    SDC28: {
        type: Boolean,
      },
    SDC29: {
        type: Boolean,
      },
      ti:{
         type:Boolean
       },
      kyc:{
         type:Boolean
       },
      kyb:{
         type:Boolean
       },
      sd:{
         type:Boolean
       },
      ti_status:{
         type:String
       },
      kyc_status:{
         type:String
       },
      kyb_status:{
         type:String
       },
      sd_status:{
         type:String
       },
      md_status:{
         type:String
       },
      checkby:{
         type:String
       },
      senttosolby:{
         type:String
       },
      sentDate:{
         type:String
       },
     notes:[{
       date:{
         type:String
       },
       text:{
         type:String
       }
     }]
    },
  },
  {
    collection: "Records",
  }
);
module.exports = CL = mongoose.model("CL", CLSchema);
