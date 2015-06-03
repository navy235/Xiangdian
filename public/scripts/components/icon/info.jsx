/**
 * Created by hshen on 5/30/2015.
 */
var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;

var iConInfo = React.createClass({

    mixins: [StylePropable],

    render: function () {
        return (
            <SvgIcon {...this.props} style={this.mergeAndPrefix(this.getStyles(), this.props.style)} >
                <g transform="scale(0.023438 0.023438)">
                    <path d="M448 304c0-26.4 21.6-48 48-48h32c26.4 0 48 21.6 48 48v32c0 26.4-21.6 48-48 48h-32c-26.4 0-48-21.6-48-48v-32z"></path>
                    <path d="M640 768h-256v-64h64v-192h-64v-64h192v256h64z"></path>
                    <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                </g>
            </SvgIcon>
        );
    },
    getStyles: function () {
        return {
            fill: '#ffbb4d'
        }
    }

});

module.exports = iConInfo;