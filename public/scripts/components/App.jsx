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
var locales = require('../locales');
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    AppBar
    }=mui;
var ReactIntl = require('react-intl');
var {
    IntlMixin,
    FormattedMessage
    }=ReactIntl;
var LanguageStore = require('../stores/LanguageStore');
var LanguageActions = require('../actions/LanguageActions');
var App = React.createClass({
    mixins: [IntlMixin, FluxibleMixin],

    statics: {
        storeListeners: [LanguageStore],
        fetchData: function (context, params, query, done) {
            context.executeAction(LanguageActions.LoadLang, {}, done);
        }
    },
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
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState: function () {
        return this.getStateFromStores();
    },

    getStateFromStores: function () {
        return {
            lang: this.getStore(LanguageStore).getLang()
        };
    },

    onChange: function () {
        this.setState(this.getStateFromStores());
    },

    componentWillMount() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
        ThemeManager.setComponentThemes({
            floatingActionButton: {
                color: Colors.cyan900
            },
            raisedButton: {
                primaryColor: Colors.blueA700,
                primaryTextColor: '#fff',
                secondaryColor: Colors.grey900,
                secondaryTextColor: Colors.grey600
            },
            toolbar: {
                iconColor: 'rgba(255,255,255,.7)'
            }
        });
    },
    changeLang: function (lang) {
        this.executeAction(LanguageActions.ChangeLang, {
            lang: lang
        })
    },
    render() {
        var lang = locales[this.state.lang];
        return (
            <FullScreen id="app" scroll={true}>
                <RouteHandler locales={lang.locales} messages={lang.messages} formats={lang.formats} changeLang={this.changeLang}  />
            </FullScreen>
        )
    }
})

App = provideContext(App);
module.exports = App;