/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var {
    Paper
    }=mui;
var Logo = React.createClass({

    mixins: [StylePropable],

    getStyles() {
        return {
            paper: {
                width: 60,
                height: 60,
                overflow: 'hidden'
            },
            img: {
                width: '100%',
                height: '100%'
            }
        }
    },

    render() {
        var styles = this.getStyles();

        return (
            <Paper  {...this.props} zDepth={1} circle={true} style={this.mergeAndPrefix(styles.paper, this.props.style)} >
                <img src="/images/avatar.jpg" style={styles.img} />
            </Paper>
        );
    }
})

module.exports = Logo;