var React = require('react');
var mui = require('material-ui');
var ClearFix = mui.ClearFix;
var StylePropable = mui.Mixins.StylePropable;
var Colors = mui.Styles.Colors;
var Icon = require('../icon');

var TabBarItem = React.createClass({

    mixins: [StylePropable],

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    propTypes: {
        handleTouchTap: React.PropTypes.func,
        selected: React.PropTypes.bool,
        width: React.PropTypes.string
    },

    handleTouchTap: function () {
        this.props.handleTouchTap(this.props.tabIndex, this);
    },

    render: function () {
        var styles = this.mergeAndPrefix({
            'display': 'table-cell',
            'cursor': 'pointer',
            'textAlign': 'center',
            'verticalAlign': 'middle',
            'height': '48px',
            'color': Colors.white,

            'fontSize': '14sp',
            'fontWeight': '500',
            'whiteSpace': 'initial',
            'fontFamily': this.context.muiTheme.contentFontFamily,
            'boxSizing': 'border-box',
            'width': this.props.width
        }, this.props.style);

        var iconStyles = {
            fill: 'white'
        };
        if (this.props.selected) {

            iconStyles.fill = 'green';
        }
        var Label = this.props.label;
        if (this.props.icon) {
            var LabelIcon = Icon[this.props.icon];
            Label = <LabelIcon style={iconStyles}/>;
        }

        return (
            <div style={styles} onTouchTap={this.handleTouchTap} routeName={this.props.route}>
            {Label}
            </div>
        )
    }

});

module.exports = TabBarItem;
