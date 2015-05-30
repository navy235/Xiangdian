/**
 * Created by hshen on 5/26/2015.
 */
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();
Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});
module.exports = routes;