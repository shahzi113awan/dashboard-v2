const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CISchema = new Schema(
  {
    name: {
      type: String,
    },
    ci: {
      tpi_rcName: {
        type: String,
      },
      tpi_aaSolution: {
        type: String,
      },
      tpi_ntc: {
        type: String,
      },
      tpi_vtSector: {
        type: String,
      },
      tpi_date: {
        type: String,
      },
      tpi_brPartner: {
        type: String,
      },
      tpi_aBdmOwner: {
        type: String,
      },
      tpi_ccLocation: {
        type: String,
      },
      tpi_EEADocuments: {
        type: String,
      },
      tpi_TLoAR: {
        type: String,
      },

      mci_crAddress: {
        type: String,
      },
      mci_crNumber: {
        type: String,
      },
      mci_ctAddress: {
        type: String,
      },
      mci_vtSector: {
        type: String,
      },

      cci_cName: {
        type: String,
      },
      cci_skypeAddress: {
        type: String,
      },
      cci_mNumber: {
        type: String,
      },
      cci_lNumber: {
        type: String,
      },
      cci_otpMNumber: {
        type: String,
      },

      tci_crAddress: {
        type: String,
      },
      tci_crNumber: {
        type: String,
      },
      tci_ctAddress: {
        type: String,
      },
      tci_wUrl: {
        type: String,
      },

      cci_2_cName: {
        type: String,
      },
      cci_2_Position: {
        type: String,
      },
      cci_2_mNumber: {
        type: String,
      },
      cci_2_lNumber: {
        type: String,
      },
      cci_2_otpMNumber: {
        type: String,
      },
      cci_2_skypeAddress: {
        type: String,
      },
      COM: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'COM',
      },
    },
  },
  {
    collection: 'Records',
  }
)

module.exports = CI = mongoose.model('CI', CISchema)
