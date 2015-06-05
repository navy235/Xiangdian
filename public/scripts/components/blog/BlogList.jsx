/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var {
    AppBar
    }=mui;
var {StylePropable,StyleResizable}= mui.Mixins;
var BlogListItem = require('./BlogListItem');
var BlogList = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },
    getStyles() {

        return {
            ul: {
                margin: 0,
                padding: 0,
                listStyleType: 'none',
                listStyle: 'none',
                textAlign: 'left'
            }
        }
    },
    shouldComponentUpdate: function (nextProps) {
        if (nextProps.adjustSize) {
            return false;
        }
        return true;
    },
    render() {
        console.log('render blog');
        var items = [];
        var styles = this.getStyles();
        for (var i = 0; i < 20; i++) {
            items.push(
                <BlogListItem key={i}/>
            )
        }
        return (
            <ul style={styles.ul}>
                {items}
            </ul>
        );
    }
})

module.exports = BlogList;