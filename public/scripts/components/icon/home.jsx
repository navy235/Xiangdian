/**
 * Created by hshen on 5/30/2015.
 */
var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;

var iConHome = React.createClass({

    mixins: [StylePropable],

    render: function () {
        return (
            <SvgIcon  style={this.mergeAndPrefix(this.getStyles(), this.props.style)} {...this.props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </SvgIcon>
        );
    },
    getStyles: function () {
        return {
            fill: 'white'
        }
    }

});

module.exports = iConHome;