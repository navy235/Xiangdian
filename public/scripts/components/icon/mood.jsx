/**
 * Created by hshen on 5/30/2015.
 */
var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;

var iConMood = React.createClass({

    mixins: [StylePropable],

    render: function () {
        return (
            <SvgIcon  style={this.mergeAndPrefix(this.getStyles(), this.props.style)} {...this.props}>
                <g transform="scale(0.023438 0.023438)">
                    <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
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

module.exports = iConMood;