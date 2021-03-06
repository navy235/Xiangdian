/**
 * Created by hshen on 6/7/2015.
 */
var Fluxible = require('fluxible');
var fetchrPlugin = require('fluxible-plugin-fetchr');

var app = new Fluxible({
        component: require('./routes.jsx')
    });

app.plug(fetchrPlugin({
    xhrPath: '/api'
}));
app.plug(require('./plugins/cookie'));
app.plug(require('./plugins/language'));
app.plug(require('./plugins/router')());

app.registerStore(require('./stores/AuthStore'));
app.registerStore(require('./stores/BlogStore'));
app.registerStore(require('./stores/LanguageStore'));

module.exports = app;
