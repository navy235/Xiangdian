/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link,State,Navigation } = Router;

var mui = require('material-ui');

var {
    TextField,
    FlatButton,
    Paper
    }=mui;
var StylePropable = mui.Mixins.StylePropable;

var Logo = require('./Logo');

var { IconInfo }= require('./icon');

var FluxibleMixin = require('fluxible/addons/FluxibleMixin');

var AuthStore = require('../stores/AuthStore');

var AuthActions = require('../actions/AuthActions');

var Login = React.createClass({

    mixins: [State, Navigation, StylePropable, FluxibleMixin],

    statics: {
        storeListeners: [AuthStore]
    },

    getInitialState: function () {
        return this.getStateFromStores();
    },

    getStateFromStores: function () {
        return {
            isSigningIn: this.getStore(AuthStore).isSigningIn(),
            error: this.getStore(AuthStore).getSignInError()
        };
    },

    onChange: function () {
        this.setState(this.getStateFromStores());
    },

    getStyles() {
        return {
            paper: {
                width: 300,
                textAlign: 'center',
                margin: '150px auto 0 auto',
                padding: '30px 0'
            },
            logo: {
                margin: '0 auto'
            },
            button: {
                'margin': '10px 0 0 0'
            },
            err: {
                color: '#ffbb4d',
                fontSize: 12,
            }
        }
    },

    render() {

        var disabled;
        var text = 'Sign in';

        if (this.state.isSigningIn) {
            disabled = true;
            text = 'Signing in...';
        }

        var styles = this.getStyles();
        return (
            <Paper style={this.mergeAndPrefix(styles.paper, this.props.style)}>
                <form onSubmit={this.handleSubmit}>
                    <Logo style={styles.logo}/>
                    <TextField
                        floatingLabelText="UserName"
                        hintText="Enter UserName"
                        type="text"
                        ref="username"
                        />
                    <TextField
                        floatingLabelText="Password"
                        hintText="Enter Password"
                        type="password"
                        ref="password"
                        />
                    <FlatButton type="submit" primary={true} disabled={disabled} label={text} style={styles.button}/>

                    <Link to="profile">profile</Link>

                    {this.state.error && (
                        <div className="bg-danger" style={styles.err}>
                            <IconInfo />
                            Bad login information</div>
                    )}
                </form>
            </Paper>
        )
    },
    handleSubmit(event) {
        event.preventDefault();
        var self = this;
        var nextPath = this.getQuery().nextPath;
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();
        this.executeAction(signIn, {
            username: username,
            password: password,
            nextPath: nextPath
        });
    }
})
module.exports = Login;