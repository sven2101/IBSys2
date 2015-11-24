/**
 * Created by sven_ on 10.11.2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema  = new Schema ({
    name: String,
    password: String
});

module.exports = mongoose.model('benutzer', usersSchema, 'benutzer');