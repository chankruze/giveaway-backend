const mongoose = require('mongoose');

const accSchema = new mongoose.Schema({
    ingameID: Number,
    ingameName: String,
    accDomain: String,
    accEmail: String,
    accPass: String,
    date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Account', accSchema);