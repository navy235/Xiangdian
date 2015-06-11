/**
 * Created by hshen on 6/9/2015.
 */

var languagePlugin = require('../../public/scripts/plugins/language');
var Fluxible = require('fluxible');

var LanguageStore = require('../../public/scripts/stores/LanguageStore');
var LanguageActions = require('../../public/scripts/actions/LanguageActions');

describe('language action', function () {
    var app,
        context;

    beforeEach(function () {
        app = new Fluxible();
        app.plug(languagePlugin);
        context = app.createContext({});
        app.registerStore(LanguageStore);
    })

    it('test load lang', function (done) {
        context.executeAction(LanguageActions.LoadLang, {}, function (err) {
            if (err) {
                return done(err);
            }
            var lang = context.getActionContext().getStore(LanguageStore).getLang();
            expect(lang).toEqual('en-US');
            done();
        });
    })

    it('test change lang', function (done) {
        context.executeAction(LanguageActions.ChangeLang, {lang: 'zh'}, function (err) {
            if (err) {
                return done(err);
            }
            var lang = context.getActionContext().getStore(LanguageStore).getLang();
            expect(lang).toEqual('zh');
            done();
        });
    })
})
