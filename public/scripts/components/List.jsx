/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var {
    AppBar
    }=require('material-ui');

var IconBack = require('./icon').back;
var List = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render() {
        //var token = Auth.getUserInfo();
        var iconElementLeft = <IconBack/>;
        return (
            <div id="list">
                <AppBar
                    title='List View'
                    //iconElementLeft={iconElementLeft}
                    onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
                />
            </div>
        );
    },
    onLeftIconButtonTouchTap: function (e) {
        this.context.router.transitionTo('home');
    }
})

module.exports = List;