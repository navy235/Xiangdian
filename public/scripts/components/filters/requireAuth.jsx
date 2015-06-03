/**
 * Created by hshen on 5/26/2015.
 */
var React = require('react');
var Auth = require('../../helpers/auth');
var Router = require('react-router');
var requireAuth = (Component) => {
    return React.createClass({
        statics: {
            willTransitionTo: function (transition, params, query) {
                if (!transition.context.auth()) {
                    if (transition.context.serverside) {
                        transition.context.redirect('/login');
                        return;
                        //transition.abort();
                    } else {
                        transition.redirect('/login', {}, {'nextPath': transition.path});
                    }
                }
            }
        },
        render() {
            return <Component {...this.props}/>
        },
        contextTypes: {
            loggedIn: React.PropTypes.bool.isRequired
        }
    })
};

module.exports = requireAuth;
