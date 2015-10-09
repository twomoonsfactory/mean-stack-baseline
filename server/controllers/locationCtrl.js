var Location = require('../models/Location');

module.exports = {
  getLocations: function(req, res) {
    Location.find({}, function(err, locations) {
      if (err) return res.status(500).send(err);
      else res.send(locations);
    });
  },

  addLocation: function(req, res) {
    var newLocation = new Location(req.body)
    .save(function(err, location) {
      if (err) return res.status(500).send(err);
      else res.send(location);
    });
  }
};
