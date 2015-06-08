/**
 * Created by hshen on 6/8/2015.
 */
var React = require('react');
var Markdown = require('markdown').markdown;
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var FullScreen = require('../controls/FullScreen');

var MarkdownEditor = React.createClass({

    mixins: [StylePropable],
    getStyles() {
        return {
            root: {},
            editor: {
                position: 'absolute',
                top: '0px',
                left: '0',
                bottom: '0px',
                width: '50%',
                padding: '15px',
                background: '#fff',
            },
            preview: {
                position: 'absolute',
                top: '0px',
                right: '0',
                bottom: '0px',
                width: '50%',
                padding: '15px',
                background: '#fff',
                borderLeft: '#edece4 1px solid'
            },
            header: {
                position: 'absolute',
                top: '0px',
                right: '0',
                left: '0px',
                padding: '10px 20px',
                fontSize: '14px',
                textTransform: 'uppercase',
                color: '#aaa9a2',
                zIndex: 400,
                background: 'linear-gradient(to bottom,#fff 0,#fff 25%,rgba(255,255,255,.9) 100%)'
            },
            header_scrolled: {
                boxShadow: 'rgba(0,0,0,.03) 0 1px 3px '
            },
            small: {
                fontSize: '.85em'
            },
            textarea: {
                padding: '62px 20px 36px',
                position: 'absolute',
                top: '0px',
                right: '0',
                bottom: '0px',
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                border: 0,
                outline: 0,
                resize: 'none',
                color: '#3c4043',
                overflow: 'auto',
                fontSize: '1.6rem',
                lineHeight: '2.5rem'
            },
            previewContent: {
                padding: '60px 40px 37px',
                position: 'absolute',
                top: '0px',
                right: '0',
                bottom: '0px',
                color: '#3c4043',
                overflow: 'auto',
                wordBreak: 'break-word',
                width: '100%',
                fontSize: '1.8rem',
                lineHeight: '2.5rem'
            }
        }
    },
    componentDidMount: function () {
        React.findDOMNode(this.refs.editor).value = this.state.content;
    },

    getInitialState() {
        return {
            showPreview: true,
            scrolled: false,
            content: this.props.initialContent
        }
    },

    componentWillReceiveProps(newprops) {
        this.setState({
            content: newprops.initialContent,
            showPreview: true,
            scrolled: false
        })
    },

    getValue: function () {
        return this.state.content;
    },

    onChange: function () {
        var content = React.findDOMNode(this.refs.editor).value;
        this.setState({
            content: content
        })

    },
    onScroll: function () {
        var editor = React.findDOMNode(this.refs.editor);
        var scrollTop = editor.scrollTop;
        var scrollHeight = editor.scrollHeight - editor.clientHeight;
        var scrollContent = React.findDOMNode(this.refs.scrollContent);
        var scrollContentHeight = scrollContent.scrollHeight - scrollContent.clientHeight;
        var scrollContentTop = (scrollTop / scrollHeight) * scrollContentHeight;

        var scrolled = this.state.scrolled;
        if (scrollTop > 0) {
            scrolled = true;
        } else {
            scrolled = false;
        }
        this.setState({
            scrolled: scrolled
        })
        scrollContent.scrollTop = scrollContentTop;
    },
    render: function () {
        var styles = this.getStyles();
        var markdownContent = this.state.content.replace(/[\n\r]/g, "  \n");
        var html = Markdown.toHTML(markdownContent);

        return (
            <FullScreen style={this.mergeAndPrefix(styles.root, this.props.style)}>
                <div style={styles.editor}>
                    <div style={this.mergeAndPrefix(styles.header, this.state.scrolled && styles.header_scrolled)}>
                        <span style={styles.small}>{"Markdown"}</span>
                    </div>
                    <FullScreen>
                        <textarea style={styles.textarea} ref="editor"
                            onChange={this.onChange}
                            onScroll={this.onScroll}
                            value={this.state.content}
                        ></textarea>
                    </FullScreen>
                </div>
                <div style={styles.preview}>
                    <div style={this.mergeAndPrefix(styles.header, this.state.scrolled && styles.header_scrolled)}>
                        <span style={styles.small}>{"Preview"}</span>
                    </div>
                    <div ref="scrollContent" style={styles.previewContent}>
                        <div dangerouslySetInnerHTML={{__html: html}}></div>
                    </div>
                </div>
            </FullScreen>
        )
    }
})

module.exports = MarkdownEditor;