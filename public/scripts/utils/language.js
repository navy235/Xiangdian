/**
 * Created by hshen on 6/7/2015.
 */
var env = require('./env');
var _ = require('underscore');

var supportLan = ['zh', 'en-US']

function Language(options) {
    options = options || {};

    this._req = options.req;
    if (env.SERVER && !this._req) {
        throw new Error('Express `req` is a required option');
    }

    this._res = options.res;
    if (env.SERVER && !this._res) {
        throw new Error('Express `res` is a required option');
    }
}

Language.prototype.getLang = function () {
    var lang = '';
    if (env.SERVER) {
        lang = this._req.headers['accept-language'];
        if (lang && lang.indexOf(',') > -1) {
            lang = lang.split(',')[0];
        }

    } else {
        lang = navigator.language || navigator.browserlanguage;
    }
    if (!_.contains(supportLan, lang)) {
        lang = supportLan[0];
    }
    return lang;
};


module.exports = Language;
