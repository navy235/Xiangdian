/**
 * Created by hshen on 6/4/2015.
 */
/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var FullScreen = require('../controls/FullScreen');
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var {Spacing, Colors} = mui.Styles;
var MarkdownEditor = require('../editor/MarkdownEditor');
var {
    TextField,
    RaisedButton,
    FontIcon,
    FlatButton
    } = mui;
var AuthMixin = require('../../mixins/AuthMixin');
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var BlogActions = require('../../actions/BlogActions');
var BlogStore = require('../../stores/BlogStore');
var NewPost = React.createClass({

    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    mixins: [AuthMixin, FluxibleMixin],

    statics: {
        storeListeners: [BlogStore],
        fetchData: function (context, params, query, done) {
            context.executeAction(BlogActions.GetBlog, {id: params.id}, done);
        }
    },

    getInitialState: function () {
        return this.getStateFromStores();
    },

    getStateFromStores: function () {
        return this.getStore(BlogStore).getCurrentBlog();
    },

    onChange: function () {
        this.setState(this.getStateFromStores());
    },

    getStyles() {
        return {
            root: {
                top: '56px'
            },
            editor: {
                top: '60px',
                bottom: '40px',
            },
            header: {
                height: '60px',
                padding: '0 20px',
                position: 'relative',
                boxSizing: 'border-box',
                borderBottom: '#edece4 1px solid'
            },
            title: {
                boxSizing: 'border-box',
                width: '100%',
                height: '60px',
                margin: 0,
                padding: 0,
                fontSize: '30px',
                fontWeight: 700,
                letterSpacing: '-1px',
                background: '0 0',
                border: 0,
                outline: 0
            },
            bottom: {
                top: 'initial',
                height: '40px',
                padding: 0,
                color: '#7d878a',
                background: '#1a1c1d',
                zIndex: 900,
                boxShadow: '0 -2px 8px rgba(0,0,0,.2)',
                transform: 'translateZ(0)'
            },
            bleft: {
                position: 'relative',
                float: 'left'
            },
            bright: {
                position: 'relative',
                float: 'right'
            },
            button: {
                padding: '0px 0px 0px 0px',
                margin: '4px 5px',
                height: '32px'
            },
            buttonLabel: {
                padding: '0 8px 0 3px',
                fontSize: '14px',
                lineHeight: '32px',
            },
            flatButtonIcon: {
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
                float: 'left',
                paddingLeft: '8px',
                lineHeight: '32px',
                fontSize: '14px',
                color: '#fff'
            },
        }
    },

    onPublish: function () {
        var title = React.findDOMNode(this.refs.title).value;
        var content = this.refs.editor.getValue();
        var action = this.state.isCreate ? BlogActions.createBlog : BlogActions.updateBlog;
        this.executeAction(action, {
            id: this.state.currentBlog._id,
            title: title,
            content: content,
            publish: true
        });
    },
    onSave: function () {
        var title = React.findDOMNode(this.refs.title).value;
        var content = this.refs.editor.getValue();
        var action = this.state.isCreate ? BlogActions.createBlog : BlogActions.updateBlog;
        this.executeAction(action, {
            id: this.state.currentBlog._id,
            title: title,
            content: content,
            publish: false,
        });
    },
    onDelete: function () {
        if (this.state.isCreate) {
            this.context.router.transitionTo('dashboard');
        } else {
            this.executeAction(BlogActions.DeleteBlog, {
                id: this.state.currentBlog._id
            });
        }
    },
    titleChange: function (e) {
        var currentBlog = this.state.currentBlog;
        currentBlog.title = e.target.value;
        this.setState({
            currentBlog: currentBlog
        });
    },

    render() {
        var styles = this.getStyles();
        return (
            <FullScreen style={styles.root}>
                <div style={styles.header}>
                    <input type="text"
                        ref="title"
                        style={styles.title}
                        value={this.state.currentBlog.title}
                        placeholder="Your Post Title"
                        onChange={this.titleChange}
                    />
                </div>
                <MarkdownEditor initialContent={this.state.currentBlog.content} style={styles.editor}  ref="editor" />
                <FullScreen style={styles.bottom}>
                    <div style={styles.bleft}>
                    </div>
                    <div style={styles.bright}>
                        <RaisedButton
                            primary={true}
                            label="Save"
                            onClick={this.onSave}
                            style={styles.button}
                            labelStyle={styles.buttonLabel}>
                            <FontIcon className="icon-home3" style={styles.flatButtonIcon}/>
                        </RaisedButton>
                        <RaisedButton
                            primary={true}
                            label="Publish"
                            onClick={this.onPublish}
                            style={styles.button}
                            labelStyle={styles.buttonLabel}>
                            <FontIcon className="icon-home3" style={styles.flatButtonIcon}/>
                        </RaisedButton>
                        <RaisedButton
                            label="Delete"
                            primary={true}
                            onClick={this.onDelete}
                            style={styles.button}
                            labelStyle={styles.buttonLabel}>
                            <FontIcon className="icon-home3" style={styles.flatButtonIcon}/>
                        </RaisedButton>
                    </div>
                </FullScreen>
            </FullScreen>
        );
    }
});

module.exports = NewPost;