var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planSchema = new Schema({
  location: {type: Schema.Types.ObjectId, ref: 'Location'},
  numberOfPeople: {type: Number, min: 1},
  numberOfNights: {type: Number, min: 1},
  totalPrice: {type: Number, min: 0},
  carRental: {type: Boolean, default: false}
});

module.exports = mongoose.model('Plan', planSchema);
