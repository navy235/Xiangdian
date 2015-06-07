/**
 * Created by hshen on 5/25/2015.
 */
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/xd');
var Crypto = require('../tools/crypto');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now}
});

UserSchema.virtual('cookietoken').get(function () {
    var str = '';
    str += 'username=' + this.username;
    str += 'password=' + Crypto.hashCrypto(this.password);
    str = str.toLowerCase();
    var secretStr = Crypto.hashCrypto(str);
    str += 'secret=' + secretStr;
    return str;
})

UserSchema.set('toJSON', {
    virtuals: true
});
var Users = db.model('Users', UserSchema);

module.exports = Users;