/**
 * Created by navy on 15/6/7.
 */
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/xd');

var Blogs = require('../models/blogs');

var BlogService = {
    name: 'blog',
    read: function (req, resource, params, config, callback) {
        if (resource == 'blog.findById') {
            Blogs.findById(params.id, function (err, blog) {
                callback(null, blog);
            });
        } else {
            Blogs.find(function (err, blogs) {
                callback(null, blogs);
            });
        }
    },
    update: function (req, resource, params, body, config, callback) {
        Blogs.findByIdAndUpdate(params.id, {
            title: params.title,
            content: params.content,
            publish: params.publish
        }, {new: true}, function (err, post) {
            callback(null, post);
        })
    },
    create: function (req, resource, params, body, config, callback) {
        var form = {
            title: params.title,
            content: params.content,
            publish: params.publish
        };
        Blogs.create(form, function (err, blog) {
            callback(err, blog);
        })
    },
    delete: function (req, resource, params, config, callback) {
        Blogs.findByIdAndRemove(params.id, {}, function (err, post) {
            callback(null, {success: true});
        });
    }
}

module.exports = BlogService;