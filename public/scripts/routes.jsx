/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var {
    Route,
    DefaultRoute,
    NotFoundRoute,
    Redirect
    }=Router;
var {
    App,
    Home,
    Login,
    List,
    NotFound
    }=require('./components');
// declare our routes and their hierarchy
var routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="home"  handler={Home}/>
        <Route name="list" path="/list" handler={List}/>
        <Route name="profile" path="/profile" handler={Login}/>
        <Route name="login" path="/login" handler={Login}/>
        <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;