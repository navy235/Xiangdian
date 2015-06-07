var createStore = require('fluxible/addons/createStore');

var AuthStore = createStore({
    storeName: 'AuthStore',

    handlers: {
        'LOAD_SESSION': 'loadSession',
        'SIGN_IN_START': 'signInStart',
        'SIGN_IN_FAILURE': 'signInFailure',
        'SIGN_IN_SUCCESS': 'signIn',
        //'SIGN_OUT_START': 'signOutStart',
        //'SIGN_OUT_FAILURE': 'signOutFailure',
        'SIGN_OUT_SUCCESS': 'signOut',
        'REGISTER_START': 'registerStart',
        'REGISTER_FAILURE': 'registerFailure',
        'REGISTER_SUCCESS': 'register'
    },

    initialize: function () {
        this.token = null;
        this.signingIn = false;
        this.signingOut = false;
        this.signInError = null;
        this.registering = false;
        this.registerError = null;
    },

    loadSession: function (token) {
        this.token = token;
        this.emitChange();
    },

    signInStart: function () {
        this.signingIn = true;
        this.signInError = null;
        this.emitChange();
    },

    signInFailure: function (error) {
        this.signingIn = false;
        this.signInError = error;
        this.emitChange();
    },

    signIn: function (token) {
        this.signingIn = false;
        this.signInError = null;
        this.token = token;
        this.emitChange();
    },

    signOutStart: function () {
        this.signingOut = true;
        this.emitChange();
    },

    signOutFailure: function () {
        this.signingOut = false;
        this.emitChange();
    },

    signOut: function () {
        this.signingOut = false;
        this.token = null;
        this.emitChange();
    },

    registerStart: function () {
        this.registing = true;
        this.emitChange();
    },
    registerFailure: function (error) {
        this.registering = false;
        this.registerError = error;
        this.emitChange();
    },
    register: function (token) {
        this.registering = false;
        this.registerError = null;
        this.token = token;
        this.emitChange();
    },
    isAuthenticated: function () {
        return Boolean(this.token);
    },

    getToken: function () {
        return this.token;
    },

    isSigningIn: function () {
        return this.signingIn;
    },

    isSigningOut: function () {
        return this.signingOut;
    },

    getSignInError: function () {
        return this.signInError;
    },

    isRegistering: function () {
        return this.registering;
    },

    getRegisterError: function () {
        return this.registerError;
    },

    dehydrate: function () {
        return {
            token: this.token,
            signingIn: this.signingIn,
            signingOut: this.signingOut,
            signInError: this.signInError,
            registering: this.registering,
            registerError: this.registerError
        };
    },

    rehydrate: function (state) {
        this.token = state.token;
        this.signingIn = state.signingIn;
        this.signingOut = state.signingOut;
        this.signInError = state.signInError;
        this.registering = state.registering;
        this.registerError = state.registerError;
    }
});

module.exports = AuthStore;
