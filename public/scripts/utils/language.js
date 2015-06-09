/**
 * Created by hshen on 6/7/2015.
 */
var env = require('./env');

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
    if (env.SERVER) {
        var lang = this._req.headers['accept-language'];
        if (lang && lang.indexOf(',') > -1) {
            lang = lang.split(',')[0];
        }
        return lang;
    }
    return navigator.language || navigator.browserlanguage;
};


module.exports = Language;
