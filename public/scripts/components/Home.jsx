/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    AppBar
    }=require('material-ui');
var TabBar = require('./controls/TabBar');
var TabBarItem = require('./controls/TabBarItem');
var Home = React.createClass({
    render() {
        //var token = Auth.getUserInfo();
        return (

            <TabBar hasAppBar={true}>
                <TabBarItem label="Item One" icon="home" >
                    <div>TabBar1</div>
                </TabBarItem>
                <TabBarItem label="Item Two" >
                    <div>TabBar2</div>
                </TabBarItem>
            </TabBar>
        );
    }
})

module.exports = Home;