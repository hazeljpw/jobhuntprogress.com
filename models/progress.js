// imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Progress = mongoose.model('Progress', progressSchema);

//exports
module.exports = Progress;