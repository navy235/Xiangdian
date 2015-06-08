/**
 * Created by navy on 15/6/7.
 */
var BlogActions = {};

BlogActions.LoadBlogs = function (context, payload, done) {
    context.service.read('blog', payload, {}, function (err, blogs) {
        context.dispatch('LOAD_BLOGS', blogs);
        done();
    });
};
BlogActions.GetBlog = function (context, payload, done) {
    if (!payload.id) {
        context.dispatch('GET_BLOG', null);
        done();
    } else {
        context.service.read('blog.findById', payload, {}, function (err, blog) {
            context.dispatch('GET_BLOG', blog);
            done();
        });
    }
};


BlogActions.createBlog = function (context, payload, done) {
    context.dispatch('CREATE_BLOG_START');
    context.service.create('blog', payload, {}, function (err, blog) {
        if (err) {
            context.dispatch('CREATE_BLOG_FAILURE', err);
            done();
            return;
        }
        context.dispatch('CREATE_BLOG_SUCCESS', blog);
        context.getRouter().replaceWith('edit', {id: blog._id});
        done();
    });
};

BlogActions.updateBlog = function (context, payload, done) {
    context.dispatch('UPDATE_BLOG_START');
    context.service.update('blog', payload, {}, function (err, blog) {
        if (err) {
            context.dispatch('UPDATE_BLOG_FAILURE', err);
            done();
            return;
        }
        context.dispatch('UPDATE_BLOG_SUCCESS', blog);
        done();
    });
};

BlogActions.DeleteBlog = function (context, payload, done) {
    context.service.delete('blog', payload, {}, function (err, res) {
        context.dispatch('DELETE_BLOG', res);
        context.getRouter().transitionTo('dashboard');
        done();
    });
};

module.exports = BlogActions;