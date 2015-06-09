/**
 * Created by navy on 15/6/7.
 */
var cookieName = 'xduser';
var LanguageActions = {};

LanguageActions.LoadLang = function (context, payload, done) {
    var lang = context.language.getLang();
    context.dispatch('LOAD_LANG', lang);
    done();
};

LanguageActions.ChangeLang = function (context, payload, done) {
    var lang = payload.lang;
    context.dispatch('CHANGE_LANG', lang);
    done();
};

module.exports = LanguageActions;