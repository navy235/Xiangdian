/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var Colors = mui.Styles.Colors;
var ThemeManager = new mui.Styles.ThemeManager();
var _ = require('underscore');
var FullScreen = require('./controls/FullScreen');
var provideContext = require('fluxible/addons/provideContext');

var {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    AppBar
    }=mui;
var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.func,
        executeAction: React.PropTypes.func.isRequired
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
            },
            raisedButton:{
                primaryColor: Colors.blueA700,
                primaryTextColor: '#fff',
                secondaryColor: Colors.grey900,
                secondaryTextColor: Colors.grey600
            },
            toolbar:{
                iconColor: 'rgba(255,255,255,.7)'
            }
        });
    },
    render() {
        return (
            <FullScreen id="app" scroll={true}>
                <RouteHandler  />
            </FullScreen>
        )
    }
})

App = provideContext(App);
module.exports = App;