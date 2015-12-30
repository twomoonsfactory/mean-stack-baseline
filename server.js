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
var locationCtrl = require('./server/controllers/locationCtrl'),
    planCtrl = require('./server/controllers/planCtrl');

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Serve public directory
app.use(express.static('./public'));

// Endpoints
app.get('/api/locations', locationCtrl.getLocations);
app.post('/api/locations', locationCtrl.addLocation);
app.post('/api/travelPlans', planCtrl.addPlan);
app.get('/api/travelPlans', planCtrl.getAllPlans);
app.get('/api/travelPlans/:planId', planCtrl.getOnePlan);
app.delete('/api/travelPlans/:planId', planCtrl.removePlan);

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
