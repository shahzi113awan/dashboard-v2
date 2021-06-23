let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Notes Model
let NotesSchema = require("../../models/Notes");

// CREATE Notes
// router.route("/Notes").put((req, res, next) => {
//   NotesSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

// READ Notess
router.route("/Notes").get((req, res) => {
  NotesSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Notes
router.route("/Notes/:id").get((req, res) => {
  NotesSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Notes
router.route("/Notes/").put((req, res, next) => {
  let obj = new NotesSchema(req.body);
  NotesSchema.updateOne(
    { _id: req.body.id },
    { $set: { Notes: req.body.Notes } },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Notes updated successfully !");
      }
    }
  );
});

// Delete Notes
router.route("/Notes/:id").delete((req, res, next) => {
  NotesSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
