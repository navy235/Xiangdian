/**
 * Created by hshen on 5/28/2015.
 */
var React = require('react');
var mui = require('material-ui');
var { IconButton  }= mui;

var LinkMixin = require('../../mixins/LinkMixin');

var IconRouteButton = React.createClass({
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
            <IconButton
                href={this.getHref()}
                label={label}
                active={active}
                onClick={this.handleRouteTo}
                ref="button"
                style={style}
                {...this.props}
            >
          {this.props.children}
            </IconButton>
        );
    }
});

module.exports = IconRouteButton;