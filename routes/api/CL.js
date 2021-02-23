let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// CL Model
let CLSchema = require('../../models/CL')
// let CLSchema = require('../../models/cl')

// CREATE CL
router.route('/cl').post((req, res, next) => {
  CLSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ CLs
router.route('/cl').get((req, res) => {
  CLSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single CL
router.route('/cl/:id').get((req, res) => {
  CLSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update CL
router.route('/cl/').put((req, res, next) => {
  let obj1 = new CLSchema(req.body)
  console.log(req);
  CLSchema.updateOne(
    { _id:req.body.id},
    { $set: {cl:req.body.cl} },
    // {$set: req.body},
    
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('cl updated successfully !')
      }
    }
  )
})

// Delete CL
router.route('/delete-cl/:id').delete((req, res, next) => {
  CLSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
