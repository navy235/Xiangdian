var React = require('react');
var mui = require('material-ui');
var ClearFix = mui.ClearFix;

var StylePropable = mui.Mixins.StylePropable;
var ResizeMixin = require('../../mixins/ResizeMixin');
var DesktopGutter = mui.Styles.Spacing.desktopGutter;

var FullScreen = React.createClass({

    mixins: [StylePropable],

    getDefaultProps: function () {
        return {
            scroll: false
        };
    },

    getStyles: function () {
        return {
            root: {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                overflow: 'hidden'
            },
            scroll: {
                overflow: 'auto'
            }
        };
    },

    render: function () {
        var styles = this.getStyles();
        return (
            <div
                    {...this.props}
                style={this.mergeAndPrefix(
                    styles.root,
                    this.props.style,
                    this.props.scroll && styles.scroll
                )}
            >
				{this.props.children}
            </div>
        );
    }
});

module.exports = FullScreen;
