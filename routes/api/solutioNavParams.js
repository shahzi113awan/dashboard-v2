let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// sol Model
let SolutionParamsSchema = require("../../models/solutionNavParam");

// CREATE App
// router.post("/sol-params", (req, res, next) => {
//   // let obj = {name : 'hello world'};
//   console.log("log from sol API");
//   console.log(req);
//   let obj = new SolutionParamsSchema(req.body);
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

// router.route("/sol-params").post((req, res, next) => {
//   // let obj = {name : 'hello world'};
//   console.log('log from sol API');
//   console.log(req);
//   let obj = new SolutionParamsSchema(req.body);
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

// Get Single sol
router.get("/sol-params/:id", (req, res) => {
  SolutionParamsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next("error");
    } else {
      res.json(data);
    }
  });
});

// READ sols

router.get("/sol-params", (req, res) => {
  SolutionParamsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});
// router.get("/sol-params", (req, res) => {
//   SolutionParamsSchema.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log("xxxxxx");
//       res.json(data);
//     }
//   });
// });

// Update sol
router.route("/sol-params/").put((req, res, next) => {
  let obj1 = new SolutionParamsSchema(req.body);
  console.log(req);
  SolutionParamsSchema.updateOne(
    { _id: req.body.id },
    { $set: { solParam: req.body.solParam } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("sol updated successfully !");
      }
    }
  );
});

// Delete sol
router.route("/sol-params/:id").delete((req, res, next) => {
  SolutionParamsSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
