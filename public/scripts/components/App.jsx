/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');
var {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    AppBar
    }=require('material-ui');
var FlatRouteButton = require('./controls/FlatRouteButton');

var App = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState() {
        return {
            loggedIn: Auth.loggedIn()
        }
    },
    componentWillMount() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
        Auth.onChange = this.setLoginState;
    },
    setLoginState(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        });
    },
    routeClick: function (e, button) {
        console.log(e);
        console.log(button);
    },
    render() {
        return (
            <div id="app">
                <AppBar title='Title' iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <RouteHandler/>
            </div>
        )
    }
})

module.exports = App;