let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Spare Model
let SpareSchema = require("../../models/Spare");

// CREATE Spare
// router.route("/Spare").put((req, res, next) => {
//   SpareSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

// READ Spares
router.route("/Spare").get((req, res) => {
  SpareSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Spare
router.route("/Spare/:id").get((req, res) => {
  SpareSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Spare
router.route("/Spare/").put((req, res, next) => {
  let obj = new SpareSchema(req.body);
  SpareSchema.updateOne(
    { _id: req.body.id },
    { $set: { spare: req.body.spare } },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Spare updated successfully !");
      }
    }
  );
});

// Delete Spare
router.route("/Spare/:id").delete((req, res, next) => {
  SpareSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
