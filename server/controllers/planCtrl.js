var Plan = require('../models/Plan');

module.exports = {
  // Create new Plan document
  addPlan: function(req, res) {
    var newPlan = new Plan(req.body)
    .save(function(err, plan) {
      if (err) return res.status(500).send(err);
      else res.send(plan);
    });
  },
  
  // Get all plan documents
  getAllPlans: function(req, res) {
    Plan.find({})
    .populate('location')
    .exec(function(err, plans) {
      if (err) return res.status(500).send(err);
      else res.send(plans);
    });
  },

  // Find one plan by ObjectId
  getOnePlan: function(req, res) {
    Plan.findById(req.params.planId)
    .populate('location')
    .exec(function(err, plan) {
      if (err) return res.status(500).send(err);
      else res.send(plan);
    });
  },

  // Find a plan by ObjectId, delete, return updated list of plans
  removePlan: function(req, res) {
    Plan.findByIdAndRemove(req.params.planId, function(err, response) {
      console.log(23);
      if (err) return res.status(500).send(err);
      else Plan.find({})
      .populate('location')
      .exec(function(err, plans) {
        console.log(26);
        if (err) return res.status(500).send(err);
        else res.send(plans);
      });
    });
  }
};
