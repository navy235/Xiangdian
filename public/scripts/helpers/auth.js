/**
 * Created by hshen on 5/25/2015.
 */
var request = require('superagent');
var Cookie = require('../tools/cookie');
var LOGINCOOKIE = 'xduser';
var Auth = {
    login: function (username, password, cb) {
        var self = this;
        if (this.loggedIn()) {
            if (cb) cb(true);
            if (self.onChange) {
                self.onChange(true);
            }
        } else {
            request.post('api/user/login')
                .send({
                    username: username,
                    password: password
                })
                .end(function (err, response) {
                    var result = response.body;
                    if (cb) cb(result.success);
                    if (self.onChange) {
                        self.onChange(result.success);
                    }
                })
        }
    },

    register: function (username, password, cb) {
        var self = this;
        request.post('api/user/register')
            .send({
                username: username,
                password: password
            })
            .end(function (err, response) {
                var result = response.body;
                if (cb) cb(result.success);
                if (self.onChange) {
                    self.onChange(result.success);
                }
            })
    },

    getUserInfo: function () {
        return Cookie.getCookie(LOGINCOOKIE)
    },

    logOut: function (cb) {
        Cookie.destroyCookie(LOGINCOOKIE)
        if (cb) cb();
        this.onChange(false);
    },

    loggedIn: function () {
        return !!Cookie.getCookie(LOGINCOOKIE)
    },

    onChange: function (result) {
    }
};

module.exports = Auth;