/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');
var mui = require('material-ui');
var Colors = mui.Styles.Colors;
var ThemeManager = new mui.Styles.ThemeManager();
var _ = require('underscore');
var {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    AppBar
    }=mui;
var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object,
        loggedIn: React.PropTypes.bool
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme(),
            loggedIn: this.props.auth
        };
    },
    componentWillMount() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
        ThemeManager.setComponentThemes({
            floatingActionButton: {
                color: Colors.cyan900
            }
        });
    },
    render() {
        return (
            <div id="app">
                <RouteHandler  />
            </div>
        )
    }
})

module.exports = App;