/**
 * Created by navy on 15/6/7.
 */
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd');

var Users = require('../models/Users');

var Crypto = require('../tools/crypto')


var UserService = {
    name: 'users',
    update: function (req, resource, params, body, config, callback) {
        Users.findOne({
            username: params.username,
            password: Crypto.hashCrypto(params.password)
        }, function (err, user) {
            callback(err, user);
        });
    },
    create: function (req, resource, params, body, config, callback) {
        var form = {
            username: req.body.username,
            password: Crypto.hashCrypto(req.body.password)
        };
        Users.create(form, function (err, count) {
            Users.findOne(form, function (err, user) {
                callback(err, user);
            });

        })
    }
}

module.exports = UserService;