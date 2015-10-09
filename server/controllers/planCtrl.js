var Plan = require('../models/Plan');

module.exports = {
  // Get all plan documents
  getAllPlans: function(req, res) {
    Plan.find({}, function(err, plans) {
      if (err) return res.status(500).send(err);
      else res.send(plans);
    });
  },

  // Find one plan by ObjectId
  getOnePlan: function(req, res) {
    Plan.findById(req.params.planId, function(err, plan) {
      if (err) return res.status(500).send(err);
      else res.send(plan);
    });
  },

  // Create new Plan document
  addPlan: function(req, res) {
    var newPlan = new Plan(req.body)
    .save(function(err, plan) {
      if (err) return res.status(500).send(err);
      else res.send(plan);
    });
  },

  // Find a plan by ObjectId and delete
  deletePlan: function(req, res) {
    Plan.findByIdAndRemove(req.params.planId, function(err) {
      if (err) return res.status(500).send(err);
      else res.end();
    });
  }
};
