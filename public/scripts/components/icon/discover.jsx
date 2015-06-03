/**
 * Created by hshen on 5/30/2015.
 */
var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;

var iConDiscover = React.createClass({

    mixins: [StylePropable],

    render: function () {
        return (
            <SvgIcon  style={this.mergeAndPrefix(this.getStyles(), this.props.style)} {...this.props}>
                <g transform="scale(0.023438 0.023438)">
                    <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM96 512c0-229.75 186.25-416 416-416 109.574 0 209.232 42.386 283.534 111.628l-411.534 176.372-176.372 411.534c-69.242-74.302-111.628-173.96-111.628-283.534zM585.166 585.166l-256.082 109.75 109.75-256.082 146.332 146.332zM512 928c-109.574 0-209.234-42.386-283.532-111.628l411.532-176.372 176.372-411.532c69.242 74.298 111.628 173.958 111.628 283.532 0 229.75-186.25 416-416 416z"></path>
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

module.exports = iConDiscover;