/**
 * Created by hshen on 5/26/2015.
 */
var React = require('react');
var Auth = require('../../helpers/auth');
var Router = require('react-router');
var requireAuth = (Component) => {
    return React.createClass({
        statics: {
            willTransitionTo: function (transition, params, query, callback) {
                if (!Auth.loggedIn()) {
                    transition.redirect('/login', {}, {'nextPath': transition.path});
                }
            }
        },
        render() {
            return <Component {...this.props}/>
        }
    })
};

module.exports = requireAuth;
