let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
// CTI Model
let PreWorkbookSchema = require("../../models/PreAppWork");
// let PreWorkbookSchema = require('../../models/preappw')

// CREATE CTI
router.route("/preappw").post((req, res, next) => {
  PreWorkbookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ CTIs
router.route("/preappw").get((req, res) => {
  PreWorkbookSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single CTI
router.route("/app/:id").get((req, res) => {
  PreWorkbookSchema.findById(req.body.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update CTI
router.route("/preappw/").put((req, res, next) => {
  let obj1 = new PreWorkbookSchema(req.body);
  console.log(req.body);
  PreWorkbookSchema.updateOne(
    { _id: req.body.id },
    { $set: { AppW: req.body.AppW } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("CTI updated successfully !");
      }
    }
  );
});
router.route("/preappw/:id").put((req, res, next) => {
  let obj1 = new PreWorkbookSchema(req.body);
  console.log(req.body);
  PreWorkbookSchema.updateOne(
    { _id: req.body.id },
    { $set: { APPW: req.body.APPW } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("CTI updated successfully !");
      }
    }
  );
});

// Delete CTI
router.route("/delete-preappw/:id").delete((req, res, next) => {
  PreWorkbookSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
