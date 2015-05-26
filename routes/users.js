var express = require('express');
var router = express.Router();
var moment = require('moment');
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd');
var Users = require('../models/Users');
var Crypto = require('../tools/crypto')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


/* Post users login. */
router.post('/login', function (req, res, next) {
    authenticate({
        username: req.body.username,
        password: Crypto.hashCrypto(req.body.password)
    }, function (err, user) {
        if (user) {
            res.cookie('xduser',
                user.cookietoken,
                {
                    expires: moment().add(1, 'd'),
                    path: '/'
                })
            res.json({
                success: true
            })
        }
        res.json({
            success: false
        })
    })
});

router.post('/register', function (req, res, next) {
    var form = {
        username: req.body.username,
        password: Crypto.hashCrypto(req.body.password)
    };
    Users.create(form, function (err, count) {
        if (err) return next(err);
        authenticate(form, function (autherr, user) {
            if (user) {
                res.cookie('xduser',
                    user.cookietoken,
                    {
                        expires: moment().add(1, 'd'),
                        path: '/'
                    })
                res.json({
                    success: true
                })
            }
            res.json({
                success: false
            })
        })
    })
})


function authenticate(user, callback) {
    Users.findOne({
        username: req.body.username,
        password: Crypto.hashCrypto(req.body.password)
    }, function (err, user) {
        callback(err, user);
    });
}

module.exports = router;
