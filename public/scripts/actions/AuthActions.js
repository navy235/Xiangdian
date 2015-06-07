/**
 * Created by navy on 15/6/7.
 */
var debug = require('debug')('app:signIn');
var cookieName='xduser';
var AuthActions={};

AuthActions.SignIn = function(context, payload, done) {

    var username = payload.username;
    var password = payload.password;

    context.dispatch('SIGN_IN_START');
    context.api.signIn(username, password, function(err, auth) {
        if (err) {
            debug('Failed');
            context.dispatch('SIGN_IN_FAILURE', err);
            done();
            return;
        }
        debug('Success');
        context.dispatch('SIGN_IN_SUCCESS', auth.token);
        context.cookie.set(cookieName, auth.token);
        // NOTE: possible race condition here
        // the AuthStore needs to set its state to "authenticated"
        // before the transition
        context.getRouter().transitionTo('/dashboard');
        done();
    });
};
