/**
 * Created by hshen on 6/3/2015.
 */
/**
 * Created by hshen on 5/18/2015.
 */
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/xd');

var BlogSchema = new mongoose.Schema({
    title: String,
    metaTitle: String,
    metaDesc: String,
    content:String,
    publish: Boolean,
    url: String,
    imageUrl: String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
});

var Blog = db.model('Blog', BlogSchema);

module.exports = Blog;