/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');
var requireAuth = require('./filters/requireAuth');

var Home = requireAuth(React.createClass({
    render() {
        var token = Auth.getUserInfo();
        return (
            <div>
                <h1>Dashboard</h1>
                <p>You made it!</p>
                <p>{token}</p>
            </div>
        );
    }
}));

module.exports = Home;