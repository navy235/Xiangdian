/**
 * Created by hshen on 5/30/2015.
 */
var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;

var iConBack = React.createClass({

    mixins: [StylePropable],

    render: function () {
        return (
            <SvgIcon  style={this.mergeAndPrefix(this.getStyles(), this.props.style)} {...this.props}>
                <g transform="scale(0.023438 0.023438)">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                </g>
            </SvgIcon>
        );
    },
    getStyles: function () {
        return {
            fill: 'white'
        }
    }

});

module.exports = iConBack;