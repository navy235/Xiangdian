/**
 * Created by hshen on 5/25/2015.
 */
var _ = require('underscore');
var Cookie = {
    destroyCookie: function (key, path) {
        path || (path = '/');
        var expDate = new Date(1970, 0, 1).toGMTString();
        document.cookie = [
            key + '=',
            'path=' + path,
            'expires=' + expDate
        ].join(';') + ';';
    },
    cookieToObject: function () {
        var pairs = document.cookie.split(';'),
            jar = {};

        _.each(pairs, function (p) {
            var key = p.replace(/[\s\n]/g, '').split('=');
            jar[key[0]] = key[1];
        });
        return jar;
    },
    setCookie: function (key, value) {
        document.cookie = key + "=" + value;
    },
    getCookie: function (key) {
        var cookies = this.cookieToObject();
        return cookies[key];
    }
}
module.exports = Cookie;