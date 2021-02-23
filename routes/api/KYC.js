let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// KYC Model
let KYCSchema = require("../../models/KYC");

// CREATE KYC
router.route("/kyc").post((req, res, next) => {
  KYCSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ KYCs
router.route("/kyc").get((req, res) => {
  KYCSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single KYC
router.route("/KYC/:id").get((req, res) => {
  KYCSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update KYC
router.route("/KYC/").put((req, res, next) => {
  let obj = new KYCSchema(req.body);
  KYCSchema.updateOne(
    { _id: req.body.id },
    { $set: { kyc: req.body.kyc } },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("KYC updated successfully !");
      }
    }
  );
});

// Delete KYC
router.route("/KYC/:id").delete((req, res, next) => {
  KYCSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
