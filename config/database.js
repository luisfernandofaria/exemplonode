//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/node_rest_apiaa';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;