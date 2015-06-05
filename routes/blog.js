/**
 * Created by hshen on 6/4/2015.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd');
var Blog = require('../models/Blog');

/* GET home page. */
router.get('/', function (req, res, next) {
    Blog.find(function (err, blogs) {
        if (err) return next(err);
        res.send(blogs);
    });
});

router.post('/', function (req, res, next) {
    Blog.create(req.body, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
});

/* GET /blogs/id */
router.get('/:id', function (req, res, next) {
    Blog.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    });
});

/* PUT /blogs/:id */
router.put('/:id', function (req, res, next) {
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post) {
        console.log(req.body);
        if (err) return next(err);
        res.send(post);
    });
});

/* DELETE /blogs/:id */
router.delete('/:id', function (req, res, next) {
    Blog.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.send({success: true});
    });
});


module.exports = router;
