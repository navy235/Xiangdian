/**
 * Created by hshen on 5/28/2015.
 */
var React = require('react');

var {FlatButton }=require('material-ui');
var LinkMixin = require('./LinkMixin');

var FlatRouteButton = React.createClass({
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
            <FlatButton
                href={this.getHref()}
                label={label}
                active={active}
                onClick={this.handleRouteTo}
                ref="button"
                style={style}
                {...this.props}
            >
          {this.props.children}
            </FlatButton>
        );
    }
});

module.exports = FlatRouteButton;