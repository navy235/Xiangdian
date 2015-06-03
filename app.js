var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('node-jsx').install({harmony: true, extension: '.jsx'});
var app = express();
var ApiRoutes = require('./routes');

var React = require('react');
var Router = require('react-router');
var routes = require("./public/scripts/routes.jsx");

var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd', function (err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});
var webpackconfig = require('./webpack.client.config');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/user', ApiRoutes.userApi);

app.get('*', function (req, res, next) {
    //res.render('index', {content: ''});
    // pass in `req.url` and the router will immediately match
    var loggedIn = (req.cookies && req.cookies['xduser'] != null);
    var resAbort = false;
    var context = {
        auth: function () {
            return loggedIn;
        },
        serverside: true,
        redirect: function (url) {
            resAbort = true;
            res.redirect(url);
        }
    };

    var router = Router.create({
        routes: routes,
        location: req.path,
        transitionContext: context
    })

    router.run(function (routeHandler) {
        var routeComponent = React.createFactory(routeHandler)
        var content = React.renderToString(routeComponent({
            auth: loggedIn
        }));
        if (!resAbort) {
            res.render('index', {content: content});
        } else {
            res.end();
        }
    });
});


// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});


module.exports = app;
