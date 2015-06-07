/**
 * Created by hshen on 6/4/2015.
 */
/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var FullWidthSection = require('../controls/FullWidthSection');
var RouteButton = require('../controls/RouteButton')
var IconRouteButton = require('../controls/IconRouteButton')
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var {Spacing, Colors} = mui.Styles;
var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
var {
    TextField,
    RaisedButton,
    FontIcon
    } = mui;
var AuthMixin = require('../../mixins/AuthMixin');

var NewPost = React.createClass({

    mixins: [AuthMixin],

    getStyles() {
        return {
            root: {},
            editor: {},
            header: {},
            title: {}
        }
    },
    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.root}>
                <div style={styles.header}>
                    <TextField style={styles.title} hintText="Your Post Title"/>
                </div>
                <div style={styles.editor}>
                    <MarkdownEditor initialContent="Test"  />
                </div>
            </div>
        );
    }
});

module.exports = NewPost;