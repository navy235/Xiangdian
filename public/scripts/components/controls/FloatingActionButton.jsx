/**
 * Created by hshen on 5/28/2015.
 */
var React = require('react');
var mui = require('material-ui');
var { FloatingActionButton }= mui;

var LinkMixin = require('./LinkMixin');

var FloatingActionRouteButton = React.createClass({
    mixins: [
        LinkMixin
    ],
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    propTypes: {
        to: React.PropTypes.string.isRequired
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
            <FloatingActionButton
                href={this.getHref()}
                label={label}
                active={active}
                onClick={this.handleRouteTo}
                ref="button"
                style={style}
                {...this.props}
            >
          {this.props.children}
            </FloatingActionButton>
        );
    }
});

module.exports = FloatingActionRouteButton;