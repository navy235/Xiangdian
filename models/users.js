/**
 * Created by hshen on 5/25/2015.
 */
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/xd');

var UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    created: {type: Date, default: Date.now}
});

var Users = db.model('Users', UserSchema);

module.exports = Users;