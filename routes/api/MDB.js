let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// CTI Model
let CTISchema = require('../../models/CTI')
// let CTISchema = require('../../models/CTI')

// CREATE CTI
// router.route('/cti').post((req, res, next) => {
//   CTISchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// })

// READ CTIs
router.route('/mdb').get((req, res) => {
  CTISchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single CTI
// router.route('/cti/:id').get((req, res) => {
//   CTISchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// Update CTI
// router.route('/cti/').put((req, res, next) => {
//   let obj1 = new CTISchema(req.body)
//   console.log(req);
//   CTISchema.updateOne(
//     { _id:req.body.id},
//     { $set: {cti:req.body.cti} },
//     // {$set: req.body},
    
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('CTI updated successfully !')
//       }
//     }
//   )
// })

// Delete CTI
// router.route('/delete-CTI/:id').delete((req, res, next) => {
//   CTISchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

module.exports = router
