let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// sol Model
let SolutionNav = require("../../models/solutionNav");

// CREATE App
router.post("/sol", (req, res, next) => {
  // let obj = {name : 'hello world'};
  console.log("log from sol API");
  console.log(req);
  let obj = new SolutionNav(req.body);
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

// router.route("/sol").post((req, res, next) => {
//   // let obj = {name : 'hello world'};
//   console.log('log from sol API');
//   console.log(req);
//   let obj = new SolutionNav(req.body);
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
router.get("/sol/:id", (req, res) => {
  SolutionNav.findById(req.params.id, (error, data) => {
    if (error) {
      return next("error");
    } else {
      res.json(data);
    }
  });
});

// READ sols

router.get("/sol", (req, res) => {
  SolutionNav.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});
// router.get("/sol", (req, res) => {
//   SolutionNav.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log("xxxxxx");
//       res.json(data);
//     }
//   });
// });

// Update sol
router.route("/sol/").put((req, res, next) => {
  let obj1 = new SolutionNav(req.body);
  console.log(req);
  SolutionNav.updateOne(
    { _id: req.body.id },
    { $set: { sol: req.body.sol } },
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
router.route("/sol/:id").delete((req, res, next) => {
  SolutionNav.findByIdAndRemove(req.params.id, (error, data) => {
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
