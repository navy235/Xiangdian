/**
 * Created by navy on 15/6/7.
 */
var cookieName = 'xduser';
var AuthActions = {};

AuthActions.LoadSession = function (context, payload, done) {
    var token = context.cookie.get(cookieName);
    context.dispatch('LOAD_SESSION', token);
    done();
};

AuthActions.SignIn = function (context, payload, done) {
    context.dispatch('SIGN_IN_START');
    context.service.update('users', payload, {}, function (err, user) {
        if (err) {
            context.dispatch('SIGN_IN_FAILURE', err);
            done();
            return;
        }
        context.dispatch('SIGN_IN_SUCCESS', user.cookietoken);
        context.cookie.set(cookieName, user.cookietoken);
        context.getRouter().transitionTo('/dashboard');
        done();
    });
};

AuthActions.Register = function (context, payload, done) {
    context.dispatch('REGISTER_START');
    context.service.create('users', payload, {}, function (err, user) {
        if (err) {
            context.dispatch('REGISTER_FAILURE', err);
            done();
            return;
        }
        context.dispatch('REGISTER_SUCCESS', user.cookietoken);
        context.cookie.set(cookieName, user.cookietoken);
        context.getRouter().transitionTo('/dashboard');
        done();
    });
};

AuthActions.SignOut = function (context, payload, done) {
    context.cookie.clear(cookieName);
    context.dispatch('SIGN_OUT_SUCCESS');
    done();
};

module.exports = AuthActions;