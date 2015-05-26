/**
 * Created by hshen on 5/26/2015.
 */
var React = require('react');
var Router = require('react-router');
var routes=require('./routes');
Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.body);
});
module.exports = routes;