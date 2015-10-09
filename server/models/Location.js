var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  city: {type: String, required: true},
  country: {type: String, required: true},
  costPerNight: {type: Number, min: 0}
});

module.exports = mongoose.model('Location', locationSchema);
