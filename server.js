require('node-jsx').install({harmony: true, extension: '.jsx'});
require('./webpack.client.config');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var serialize = require('serialize-javascript');
var app = express();
var React = require('react');
var Router = require('react-router');
var routes = require("./public/scripts/routes.jsx");
var fetchData = require('./public/scripts/utils/fetchData');
var AuthActions = require('./public/scripts/actions/AuthActions');
var fluxibleApp = require("./public/scripts/app");
var FluxibleComponent = require('fluxible/addons/FluxibleComponent');
var apiService = require('./services')


var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd', function (err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(csrf({cookie: true}));

app.use(express.static(path.join(__dirname, 'public')));

var fetchrPlugin = fluxibleApp.getPlugin('FetchrPlugin');

fetchrPlugin.registerService(apiService.users);

app.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

app.use(function (req, res, next) {

    var context = fluxibleApp.createContext({
        req: req,
        res: res,
        xhrContext: {
            _csrf: req.csrfToken() // Make sure all XHR requests have the CSRF token
        }
    });
    context.getActionContext().executeAction(AuthActions.LoadSession, {}, function () {
        var router = Router.create({
            routes: routes,
            location: req.path,
            transitionContext: context,
            onAbort: function (redirect) {
                return res.redirect(303, redirect.to);
            },
            onError: function (err) {
                return next(err);
            }
        });
        router.run(function (Handler, routerState) {
            if (routerState.routes[0].name === 'notfound') {
                return res.render('error', {status: 404});
            }
            fetchData(context, routerState, function (err) {
                if (err) {
                    return res.render('error', {status: 500, stack: err});
                }
                var exposed = 'window.__DATA__='+serialize(fluxibleApp.dehydrate(context));
                var content = React.renderToString(React.createElement(
                    FluxibleComponent,
                    {context: context.getComponentContext()},
                    React.createElement(Handler)
                ));
                res.render('index', {content: content, exposed: exposed});
            });
        });

    })
});

module.exports = app;
