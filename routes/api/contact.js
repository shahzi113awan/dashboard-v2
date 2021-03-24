let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Contact Model
let contactSchema = require("../../models/contact");

// CREATE Contact
router.post("/contact", (req, res, next) => {
  // let obj = {name : 'hello world'};
  console.log("log from contact API");
  console.log(req);
  let obj = new contactSchema(req.body);
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

// router.route("/contact").post((req, res, next) => {
//   // let obj = {name : 'hello world'};
//   console.log('log from contact API');
//   console.log(req);
//   let obj = new contactSchema(req.body);
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

// Get Single contact
router.get("/contact/:id", (req, res) => {
  contactSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next("error");
    } else {
      res.json(data);
    }
  });
});

// READ contacts
 
router.get("/contact", (req, res) => {
  contactSchema.find( (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("xxxxxx");
      res.json(data);
    }
  });
});

// Update contact
router.route("/contact/").put((req, res, next) => {
  let obj1 = new contactSchema(req.body);
  console.log(req);
  contactSchema.updateOne(
    { _id: req.body.id },
    { $set: { contact: req.body.Contact } },
    // {$set: req.body},

    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Contact updated successfully !");
      }
    }
  );
});

// Delete Contact
router.route("/Contact/:id").delete((req, res, next) => {
  contactSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
