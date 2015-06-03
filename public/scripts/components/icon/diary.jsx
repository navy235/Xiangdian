/**
 * Created by hshen on 5/30/2015.
 */
var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;
var StylePropable = mui.Mixins.StylePropable;

var iConDiary = React.createClass({

    mixins: [StylePropable],

    render: function () {
        return (
            <SvgIcon  style={this.mergeAndPrefix(this.getStyles(), this.props.style)} {...this.props}>
                <g transform="scale(0.023438 0.023438)">
                    <path d="M320 384h128v128h-128zM512 384h128v128h-128zM704 384h128v128h-128zM128 768h128v128h-128zM320 768h128v128h-128zM512 768h128v128h-128zM320 576h128v128h-128zM512 576h128v128h-128zM704 576h128v128h-128zM128 576h128v128h-128zM832 0v64h-128v-64h-448v64h-128v-64h-128v1024h960v-1024h-128zM896 960h-832v-704h832v704z"></path>
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

module.exports = iConDiary;