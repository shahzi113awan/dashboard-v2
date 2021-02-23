let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// CI Model
let CISchema = require("../../models/CI");

// CREATE CI
router.post("/ci", (req, res, next) => {
  // let obj = {name : 'hello world'};
  console.log("log from CI API");
  console.log(req);
  let obj = new CISchema(req.body);
  obj
    .save()

    .then((obj) => {
      console.log(req.body);
      console.log(obj);

      res.status(200).json(obj);
    })
    .catch((err) => {
      res.status(400).send("there is error in saving");
    });
});

// router.route("/ci").post((req, res, next) => {
//   // let obj = {name : 'hello world'};
//   console.log('log from CI API');
//   console.log(req);
//   let obj = new CISchema(req.body);
//   obj
//     .save()

//     .then((obj) => {
//       console.log(req.body);
//       console.log(obj);

//       res.status(200).json(obj);
//     })
//     .catch((err) => {
//       res.status(400).send("there is error in saving");
//     });
// });

// Get Single CI
router.get("/ci/:id", (req, res) => {
  CISchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next("error");
    } else {
      res.json(data);
    }
  });
});

// READ CIs
router.get("/ci", (req, res) => {
  CISchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});

// Update CI
router.route("/ci/").put((req, res, next) => {
  let obj1 = new CISchema(req.body);
  console.log(req);
  CISchema.updateOne(
    { _id: req.body.id },
    { $set: { ci: req.body.ci } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("CI updated successfully !");
      }
    }
  );
});

// Delete CI
router.route("/CI/:id").delete((req, res, next) => {
  CISchema.findByIdAndRemove(req.params.id, (error, data) => {
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
