const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const DirectorSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    bestdirector: {
        type: String,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Director', DirectorSchema);