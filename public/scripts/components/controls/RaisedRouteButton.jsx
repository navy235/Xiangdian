/**
 * Created by hshen on 5/28/2015.
 */
var React = require('react');
var mui = require('material-ui');
var {
    RaisedButton
}=mui;

var LinkMixin = require('../mixins/LinkMixin');

var RaisedRouteButton = React.createClass({
    mixins: [
        LinkMixin
    ],
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },
    render: function () {
        var {
            label,
            to,
            params,
            query,
            active,
            style
            } = this.props;

        if (this.props.active === undefined) {
            active = this.context.router.isActive(to, params, query);
        }

        return (
            <RaisedButton
                href={this.getHref()}
                label={label}
                active={active}
                onClick={this.handleRouteTo}
                ref="button"
                style={style}
                {...this.props}
            >
          {this.props.children}
            </RaisedButton>
        );
    }
});

module.exports = RaisedRouteButton;