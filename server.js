// setting the correct environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5001;

// node modules
var express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var app = express();

// Controllers
var planCtrl = require('./server/controllers/planCtrl'),
    locactionCtrl = require('./server/controllers/locationCtrl');

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Serve public directory
app.use(express.static('./public'));asdfdsf

// Endpoints
app.get('/api/travelPlans', planCtrl.getAllPlans);
app.post('/api/travelPlans', planCtrl.addPlan);
app.get('/api/travelPlans/:planId', planCtrl.getOnePlan);
app.delete('/api/travelPlans/:planId', planCtrl.deletePlan);

app.get('/api/locations', locactionCtrl.getLocations);
app.post('/api/locations', locactionCtrl.addLocation);

// Connections
var mongoUri = 'mongodb://localhost:27017/mean-stack-sample';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
