/**
 * Created by hshen on 6/9/2015.
 */


var Fluxible = require('fluxible');

var BlogStore = require('../../public/scripts/stores/BlogStore');
var BlogActions = require('../../public/scripts/actions/BlogActions');
var fetchrPlugin = require('fluxible-plugin-fetchr');

describe('Test BlogActions ', function () {
    var app,
        context;

    beforeEach(function () {
        app = new Fluxible();
        app.plug(fetchrPlugin({
            xhrPath: 'http://localhost:3000/api'
        }));
        context = app.createContext({});

        app.registerStore(BlogStore);
    })

    it('test LoadBlogs', function (done) {
        context.executeAction(BlogActions.LoadBlogs, {}, function (err) {
            if (err) {
                return done(err);
            }
            var blogs = context.getActionContext().getStore(BlogStore).getBlogs();
            console.log(blogs.length)
            expect(blogs).not.toBeLessThan(0);
            done();
        });
    })

    //it('test change lang', function (done) {
    //    context.executeAction(LanguageActions.ChangeLang, {lang: 'zh'}, function (err) {
    //        if (err) {
    //            return done(err);
    //        }
    //        var lang = context.getActionContext().getStore(LanguageStore).getLang();
    //        expect(lang).toEqual('zh');
    //        done();
    //    });
    //})
})
