// setting the correct environmet
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// node modules
var express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var app = express();

// Controllers
var planCtrl = './server/controllers/planCtrl',
    locactionCtrl = './server/controllers/locactionCtrl';

// Endpoints
app.get('/api/travelPlans', planCtrl.getAllPlans);
app.post('/api/travelPlans', planCtrl.addPlan);
app.get('/api/travelPlans/:planId', planCtrl.getOnePlan);
app.delete('/api/travelPlans/:planId', planCtrl.deletePlan);

app.get('/api/locations', locactionCtrl.getLocations);

// Connections
var mongoUri = 'mongodb://localhost:27017/mean-stack-sample';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port' + port);
});