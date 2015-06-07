/**
 * Created by hshen on 5/26/2015.
 */
var React = require('react');
var Router = require('react-router');
var FluxibleComponent = require('fluxible/addons/FluxibleComponent');
var app = require('./app');
var routes = require('./routes');
var fetchData=require('./utils/fetchData');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
window.React = React;

var dehydratedState = window.__DATA__;
app.rehydrate(dehydratedState, function(err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    var router = Router.create({
        routes: routes,
        location: Router.HistoryLocation,
        transitionContext: context
    })
    app.getPlugin('RouterPlugin').setRouter(router);

    var firstRender = true;
    router.run(function(Handler, routerState) {
        if (firstRender) {
            firstRender = false;
            render(context, Handler);
            return;
        }
        render(context, Handler);
        fetchData(context, routerState);
    });
});

function render(context, Handler) {
    React.render(React.createElement(
        FluxibleComponent,
        {context: context.getComponentContext()},
        React.createElement(Handler)
    ),  document.body);
}

module.exports = routes;