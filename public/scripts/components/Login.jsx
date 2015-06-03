/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link,State,Navigation } = Router;
var Auth = require('../helpers/auth');
var mui = require('material-ui');
var {
    TextField,
    FlatButton,
    Paper
    }=mui;
var StylePropable = mui.Mixins.StylePropable;
var Logo = require('./Logo');

var { IconInfo }= require('./icon');

var Login = React.createClass({

    mixins: [State, Navigation, StylePropable],

    getInitialState() {
        return {
            error: false
        }
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
        var styles = this.getStyles();
        return (
            <Paper style={this.mergeAndPrefix(styles.paper, this.props.style)}>
                <form onSubmit={this.handleSubmit}>
                    <Logo  style={styles.logo} />
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
                    <FlatButton type="submit" primary={true} label="login" style={styles.button} />

                    <Link to="profile">profile</Link>

                {this.state.error && (
                    <div className="bg-danger"  style={styles.err}>
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
        Auth.login(username, password, (loggedIn) => {
            if (!loggedIn)
                return this.setState({error: true});
            if (nextPath) {
                self.transitionTo(nextPath);
            } else {
                self.transitionTo('/profile');
            }
        });
    }
})
module.exports = Login;