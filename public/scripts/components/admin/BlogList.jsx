/**
 * Created by hshen on 6/4/2015.
 */
/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var FullWidthSection = require('../controls/FullWidthSection');
var RouteButton = require('../controls/RouteButton')
var IconRouteButton = require('../controls/IconRouteButton')
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var {Spacing, Colors} = mui.Styles;
var {
    Menu,
    IconButton,
    RaisedButton,
    FontIcon
    } = mui;
var AuthMixin = require('../../mixins/AuthMixin');

var BlogList = React.createClass({

    mixins: [AuthMixin],

    getStyles() {
        return {
            root: {},
            secondaryNav: {
                overflow: 'hidden',
                width: Spacing.desktopKeylineIncrement * 6 + 'px',
                borderTop: 'none',
                position: 'absolute',
                top: '56px'
            },
            content: {
                boxSizing: 'border-box',
                padding: Spacing.desktopGutter + 'px',
                maxWidth: (Spacing.desktopKeylineIncrement * 14) + 'px',
                marginLeft: Spacing.desktopKeylineIncrement * 6 + 'px',
                borderLeft: 'solid 1px ' + Colors.grey300,
                minHeight: '800px'
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
                color: 'rgba(255,255,255,.7)'
            },
            header: {
                height: ' 50px',
                lineHeight: ' 50px',
                padding: '0px 10px',
                boxSizing: 'border-box',
                fontSize: '1.3rem',
                textTransform: 'uppercase',
                color: '#aaa9a2',
                borderBottom: '#e8eaeb 1px solid',
                position: 'relative'
            },
            filter: {
                position: 'relative'
            },
            filter_title: {
                fontSize: '.55em'
            },
            icon: {
                position: 'absolute',
                top: '9px',
                right: '20px',
                border: '0',
                width: '20px',
                height: '20px'
            },
            iconStyle: {
                color: 'green',
                fontSize: '14px',
                position:'absolute',
                left:'10px',
                top:'10px'
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
            <div style={styles.root}>
                <div style={styles.content}>

                </div>
                <div style={styles.secondaryNav}>
                    <div style={styles.header}>
                        <div style={styles.filter}>
                            <span style={styles.filter_title}>All Posts</span>
                        </div>
                        <IconRouteButton
                            iconClassName='icon-plus'
                            to='home'
                            style={styles.icon}
                            iconStyle={styles.iconStyle} />
                    </div>
                    <Menu
                        ref="menuItems"
                        zDepth={0}
                        menuItems={iconMenuItems}
                        onItemClick={this._onMenuItemClick} />
                </div>
            </div>
        );
    }
});

module.exports = BlogList;