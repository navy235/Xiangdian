/**
 * Created by navy on 15/6/7.
 */
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd');

var Users = require('../models/Users');

var Crypto = require('../tools/crypto')

function authenticate(account, callback) {
    Users.findOne(account, function (err, user) {
        callback(err, user);
    });
}


var UserApi={
    name:'users',
    read: function (req, resource, params, config, callback) {
        authenticate({
            username: params.username,
            password: Crypto.hashCrypto(params.password)
        }, function (err, user) {

        })
    },
    create: function (req, resource, params, body, config, callback) {
        var newTodo = {
            label: params.label
        };
        Todo.create(newTodo, function (err, post) {
            callback(null, post);
        })
    },


}