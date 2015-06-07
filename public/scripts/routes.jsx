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
    Register,
    Profile,
    Dashboard,
    List,
    NotFound,
    AdminBlogList
    }=require('./components');
// declare our routes and their hierarchy
var routes = (
    <Route  handler={App}>
        <Route name="home" path="/" handler={Home}>
            <Route name="list" path="list" handler={List}/>
        </Route>
        <Route name="dashboard" path="/dashboard" handler={Dashboard}>
            <DefaultRoute handler={AdminBlogList} />
            <Route name="profile" path="/profile" handler={Profile}/>
        </Route>
        <Route name="login" path="/login" handler={Login}/>
        <Route name="register" path="/register" handler={Register}/>
        <NotFoundRoute name='notfound' handler={NotFound} />
    </Route>
);

module.exports = routes;