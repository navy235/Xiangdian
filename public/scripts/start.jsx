/**
 * Created by hshen on 5/26/2015.
 */
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var Auth = require('./helpers/auth');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
var context = {
    auth: function () {
        return Auth.loggedIn();
    }
};
var router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
    transitionContext: context
})
router.run((Root) => {
    React.render(<Root auth={Auth.loggedIn()}/>, document.body);
});
module.exports = routes;