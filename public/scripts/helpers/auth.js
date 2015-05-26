/**
 * Created by hshen on 5/25/2015.
 */
var request = require('superagent');
var Cookie = require('../tools/cookie');
var LOGINCOOKIE = 'login';
var Auth = {
    login: function (username, password, cb) {
        cb = arguments[arguments.length - 1];
        if (this.loggedIn()) {
            if (cb) cb(true);
            this.onChange(true);
            return;
        }
        request.post('api/user/login')
            .send({
                username: username,
                password: password
            })
            .end(function (err, response) {
                var result = response.body;
                if (cb) cb(result.success);
                this.onChange(result.success);
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

    onChange: function () {
    }
};

module.exports = Auth;