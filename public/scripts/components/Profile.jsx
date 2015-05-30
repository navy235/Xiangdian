/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');
var requireAuth = require('./filters/requireAuth');

var Profile = requireAuth(React.createClass({
    render() {
        //var token = Auth.getUserInfo();
        return (
            <div>
                <h1>Profile</h1>
                <p>You made it!</p>
            </div>
        );
    }
}));

module.exports = Profile;