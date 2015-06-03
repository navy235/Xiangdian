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

var List = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render() {
        return (
            <div id="list">
                List View
            </div>
        );
    }

})

module.exports = List;