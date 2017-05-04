const Restaurant = require('../models/restaurants')
const methods = {}

methods.insertOne = function(req, res){
  Restaurant.create(
    {
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.open_status
    }, function(error, record){
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.getAll = function(req, res){
  Restaurant.find({}, function(error, records){
    if(error){
      res.json({error})
    } else {
      res.json(records)
    }
  })
}

methods.getById = function(req, res){
  Restaurant.findById(req.params.id, function(error, record){
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.updateById = function(req, res){
  Restaurant.findByIdAndUpdate(req.params.id, { $set:req.body }, {new: true})
  .exec((error, record) => {
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.deleteById = function(req, res){
  Restaurant.findByIdAndRemove(req.params.id)
  .exec((error, record) => {
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

module.exports = methods
