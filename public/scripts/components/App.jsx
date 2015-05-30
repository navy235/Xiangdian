/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');
var _ = require('underscore');
var {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    AppBar
    }=require('material-ui');
var FlatRouteButton = require('./controls/FlatRouteButton');

var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

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
        var routelist = ['/home', '/list'];
        var name = this.context.router.getCurrentPath();
        var currentIndex = _.indexOf(routelist, name);
        var lastRouteIndex = _.indexOf(routelist, this.lastRoute);
        var transition = 'swipeleft';
        if (currentIndex < lastRouteIndex) {
            transition = 'swiperight';
        }
        this.lastRoute = name;
        return (
            <div id="app">
                <CSSTransitionGroup  component="div" transitionName={transition}>
                    <RouteHandler key={name} />
                </CSSTransitionGroup>
            </div>
        )
    }
})

module.exports = App;