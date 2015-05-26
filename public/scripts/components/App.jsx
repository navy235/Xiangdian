/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');

var App = React.createClass({
    getInitialState() {
        return {
            loggedIn: Auth.loggedIn()
        }
    },
    componentWillMount() {
        Auth.onChange = this.setLoginState.bind(this);
    },
    setLoginState(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        });
    },
    render() {
        return (
            <div id="app">
                <RouteHandler/>
            </div>
        )
    }
})

module.exports = App;