/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link,State,Navigation } = Router;
var Auth = require('../helpers/auth');

var Login = React.createClass({

    mixins: [State, Navigation],

    getInitialState() {
        return {
            error: false
        }
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="username">UserName</label>
                    <input ref="username" type="text" className="form-control" id="username" placeholder="Enter UserName"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input ref="password" type="password" className="form-control" id="password" placeholder="Enter Password"/>
                </div>

                <button className="btn btn-default" type="submit">login</button>
                {this.state.error && (
                    <p className="bg-danger">Bad login information</p>
                )}
            </form>
        )
    },
    handleSubmit(event) {
        event.preventDefault();
        var self = this;
        var nextPath = this.getQuery().nextPath;
        var username = this.refs.username.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        Auth.login(username, password, (loggedIn) => {
            if (!loggedIn)
                return this.setState({error: true});
            if (nextPath) {
                self.replaceWith(nextPath);
            } else {
                self.replaceWith('/about');
            }
        });
    }
})
module.exports = Login;