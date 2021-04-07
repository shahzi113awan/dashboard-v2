let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// App Model
let ApprovalSchema = require("../../models/Approval");

// CREATE App
router.post("/App", (req, res, next) => {
  // let obj = {name : 'hello world'};
  console.log("log from App API");
  console.log(req);
  let obj = new ApprovalSchema(req.body);
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

// router.route("/App").post((req, res, next) => {
//   // let obj = {name : 'hello world'};
//   console.log('log from App API');
//   console.log(req);
//   let obj = new ApprovalSchema(req.body);
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

// Get Single App
router.get("/App/:id", (req, res) => {
  ApprovalSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next("error");
    } else {
      res.json(data);
    }
  });
});

// READ Apps
router.get("/AppL", (req, res) => {
  ApprovalSchema.find({ "App.status": "Lost" }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});
router.get("/AppA", (req, res) => {
  ApprovalSchema.find({ "App.status": "Approve" }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});
router.get("/App", (req, res) => {
  ApprovalSchema.find( (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});

// Update App
router.route("/App/").put((req, res, next) => {
  let obj1 = new ApprovalSchema(req.body);
  console.log(req);
  ApprovalSchema.updateOne(
    { _id: req.body.id },
    { $set: { App: req.body.App } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("App updated successfully !");
      }
    }
  );
});

// Delete App
router.route("/App/:id").delete((req, res, next) => {
  ApprovalSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
