var React = require('react');
var mui = require('material-ui');
var ClearFix = mui.ClearFix;

var StylePropable = mui.Mixins.StylePropable;
var ResizeMixin = require('../../mixins/ResizeMixin');
var DesktopGutter = mui.Styles.Spacing.desktopGutter;

var FullWidthSection = React.createClass({

    mixins: [StylePropable, ResizeMixin],

    propTypes: {
        useContent: React.PropTypes.bool,
        contentType: React.PropTypes.string,
        contentStyle: React.PropTypes.object
    },

    getDefaultProps: function () {
        return {
            useContent: false,
            contentType: 'div',
            noPadding: false
        };
    },

    getStyles: function () {
        return {
            root: {
                padding: DesktopGutter + 'px',
                boxSizing: 'border-box'
            },
            content: {
                maxWidth: '1200px',
                margin: '0 auto'
            },
            rootWhenSmall: {
                paddingTop: (DesktopGutter * 2) + 'px',
                paddingBottom: (DesktopGutter * 2) + 'px'
            },
            rootWhenLarge: {
                paddingTop: (DesktopGutter * 3) + 'px',
                paddingBottom: (DesktopGutter * 3) + 'px'
            },
            rootNoPadding: {
                paddingTop: '0px',
                paddingBottom:'0px',
                paddingLeft:'0px',
                paddingRight:'0px',
                padding:'0px'
            }
        };
    },

    render: function () {
        var {
            style,
            useContent,
            contentType,
            contentStyle

            } = this.props;

        var styles = this.getStyles();

        var content;
        if (useContent) {
            content =
                React.createElement(
                    contentType,
                    {style: this.mergeAndPrefix(styles.content, contentStyle)},
                    this.props.children
                );
        } else {
            content = this.props.children;
        }

        return (
            <ClearFix
                style={this.mergeAndPrefix(
                    styles.root,
                    style,
                    this.isDeviceSize(ResizeMixin.statics.Sizes.SMALL) && styles.rootWhenSmall,
                    this.isDeviceSize(ResizeMixin.statics.Sizes.LARGE) && styles.rootWhenLarge,
                    this.props.noPadding && styles.rootNoPadding
                )}
    {...this.props}
            >
				{content}
            </ClearFix>
        );
    }
});

module.exports = FullWidthSection;
