let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
// CLIENT Model
let CLIENTSchema = require("../../models/Client");
// let CLIENTSchema = require('../../models/client')

// CREATE CLIENT
router.route("/client").post((req, res, next) => {
  CLIENTSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ CLIENTs
router.route("/client").get((req, res) => {
  CLIENTSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single CLIENT
router.route("/client/:id").get((req, res) => {
  CLIENTSchema.findById(req.body.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update CLIENT
router.route("/client/").put((req, res, next) => {
  let obj1 = new CLIENTSchema(req.body);
  console.log(req.body);
  CLIENTSchema.updateOne(
    { _id: req.body.id },
    { $set: { client: req.body.client } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("CLIENT updated successfully !");
      }
    }
  );
});
router.route("/client/:id").put((req, res, next) => {
  let obj1 = new CLIENTSchema(req.body);
  console.log(req.body);
  CLIENTSchema.updateOne(
    { _id: req.body.id },
    { $set: { CLIENT: req.body.CLIENT } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("CLIENT updated successfully !");
      }
    }
  );
});

// Delete CLIENT
router.route("/delete-client/:id").delete((req, res, next) => {
  CLIENTSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
