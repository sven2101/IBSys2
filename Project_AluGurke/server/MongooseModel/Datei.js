/**
 * Created by sven_ on 29.11.2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dateiSchema  = new Schema ({
    benutzerId: String,
    datei: Object,
    periode: Number
});

module.exports = mongoose.model('datei', dateiSchema, 'datei');