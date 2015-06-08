var createStore = require('fluxible/addons/createStore');

var BlogStore = createStore({
    storeName: 'BlogStore',

    handlers: {
        'LOAD_BLOGS': 'loadBlogs',
        'GET_BLOG': 'getBlog',
        'CREATE_BLOG_START': 'createBlogStart',
        'CREATE_BLOG_FAILURE': 'createBlogFailure',
        'CREATE_BLOG_SUCCESS': 'createBlog',
        'UPDATE_BLOG_START': 'updateBlogStart',
        'UPDATE_BLOG_FAILURE': 'updateBlogFailure',
        'UPDATE_BLOG_SUCCESS': 'updateBlog',
        'DELETE_BLOG': 'deleteBlog'
    },

    initialize: function () {
        this.blogs = [];
        this.currentBlog = null;
        this.creating = false;
        this.createError = null;
        this.updating = false;
        this.updateError = null;
        this.isCreate = false;
    },

    loadBlogs: function (blogs) {
        this.blogs = blogs;
        this.emitChange();
    },
    getBlog: function (blog) {
        this.currentBlog = blog;
        if (this.currentBlog) {
            this.isCreate = false;
        } else {
            this.isCreate = true;
        }
        this.emitChange();
    },
    createBlogStart: function () {
        this.creating = true;
        this.createError = null;
        this.emitChange();
    },
    createBlogFailure: function (error) {
        this.creating = false;
        this.createError = error;
        this.emitChange();
    },
    createBlog: function (blog) {
        this.creating = false;
        this.createError = null;
        this.currentBlog = blog;
        this.isCreate = false;
        this.blogs.push(blog);
        this.emitChange();
    },
    updateBlogStart: function () {
        this.updating = true;
        this.updateError = null;
        this.emitChange();
    },

    updateBlogFailure: function (error) {
        this.updating = false;
        this.updateError = error;
        this.emitChange();
    },

    updateBlog: function (theblog) {
        this.currentBlog = theblog;
        this.isCreate = false;
        this.emitChange();
    },
    deleteBlog: function () {
        this.currentBlog = null;
        this.emitChange();
    },
    getBlogs: function () {
        return this.blogs;
    },
    getCurrentBlog: function () {
        return {
            currentBlog: this.currentBlog ? this.currentBlog : {title: 'untitled', content: ''},
            createError: this.createError,
            updateError: this.updateError,
            creating: this.creating,
            updating: this.updating,
            isCreate: this.isCreate
        }
    },
    getCreateError: function () {
        return this.createError;
    },
    getUpdateError: function () {
        return this.updateError;
    },

    dehydrate: function () {
        return {
            blogs: this.blogs,
            creating: this.creating,
            createError: this.createError,
            updating: this.updating,
            updateError: this.updateError,
            currentBlog: this.currentBlog
        };
    },

    rehydrate: function (state) {
        this.blogs = state.blogs;
        this.creating = state.creating;
        this.createError = state.createError;
        this.updating = state.updating;
        this.currentBlog = state.currentBlog;
        this.updateError = state.updateError;
    }
});

module.exports = BlogStore;
