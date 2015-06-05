/**
 * Created by hshen on 6/4/2015.
 */
/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var Auth = require('../helpers/auth');
var requireAuth = require('./filters/requireAuth');
var FullWidthSection = require('./controls/FullWidthSection');
var RouteButton = require('./controls/RouteButton')
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var ResizeMixin = require('./mixins/ResizeMixin');
var Colors = mui.Styles.Colors;
var {
    DropDownIcon,
    DropDownMenu,
    FontIcon,
    RaisedButton,
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle,

    } = mui;


var Dashboard = requireAuth(React.createClass({

    getStyles() {
        return {
            toolbar: {
                padding: '0 10px',
                backgroundColor: Colors.grey900
            },
            button: {
                padding: '0px 0px 0px 0px',
                margin: '10px 5px',
            },
            buttonLabel: {
                padding: '0 8px',
                fontSize: '12px',
            },
            flatButtonIcon: {
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
                float: 'left',
                paddingLeft: '8px',
                lineHeight: '36px',
                fontSize: '12px',
                color:'rgba(255,255,255,.7)'
            },
            user:{

            },
            userIcon:{
                fontSize: '12px',
                color:'rgba(255,255,255,.7)'
            }
        }
    },
    render() {
        //var token = Auth.getUserInfo();
        var styles = this.getStyles();
        var iconMenuItems = [
            {payload: '1', text: 'Profile'},
            {payload: '2', text: 'Logout'}
        ];
        return (
            <FullWidthSection noPadding={true}>
                <Toolbar style={styles.toolbar}>
                    <ToolbarGroup key={0} float="left" >
                        <RouteButton
                            secondary={true}
                            buttonComponent={RaisedButton}
                            label="Content"
                            to="home"
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                            iconClassName="icon-home3" >
                            <FontIcon className="icon-home3" style={styles.flatButtonIcon}/>
                        </RouteButton>
                        <RouteButton
                            secondary={true}
                            buttonComponent={RaisedButton}
                            label="New Post"
                            to="home"
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                            iconClassName="icon-home3" >
                            <FontIcon className="icon-home3"  style={styles.flatButtonIcon}/>
                        </RouteButton>
                        <RouteButton
                            secondary={true}
                            buttonComponent={RaisedButton}
                            label="Setting"
                            to="home"
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                            iconClassName="icon-home3" >
                            <FontIcon className="icon-home3"  style={styles.flatButtonIcon}/>
                        </RouteButton>
                    </ToolbarGroup>
                    <ToolbarGroup key={1} float="right">
                        <DropDownIcon
                            iconClassName="icon-user"
                            style={styles.user}
                            iconStyle={styles.userIcon}
                            menuItems={iconMenuItems} >
                        </DropDownIcon>
                    </ToolbarGroup>
                </Toolbar>
                <RouteHandler />
            </FullWidthSection>
        );
    }
}));

module.exports = Dashboard;