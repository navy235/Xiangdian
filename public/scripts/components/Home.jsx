/**
 * Created by hshen on 5/25/2015.
 */
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var mui = require('material-ui');
var {
    Toolbar,
    ToolbarGroup,
    LeftNav,
    MenuItem,
    }=mui;
var {StylePropable}= mui.Mixins;
var ResizeMixin = require('../mixins/ResizeMixin');
var FloatingActionButton = require('./controls/FloatingActionButton')
var FullWidthSection = require('./controls/FullWidthSection');
var FullScreen = require('./controls/FullScreen');
var Logo = require('./Logo');
var {
    IconHome,
    IconGithub,
    IconDiscover,
    IconMood,
    IconDiary
    }=require('./icon');
var Home = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    mixins: [StylePropable, ResizeMixin],

    getStyles() {
        return {
            left: {
                background: 'url(../../images/blog.png) center center no-repeat #666666',
                backgroundSize: 'cover',
                display: 'table',
                height: '100%',
                position: 'fixed',
                zIndex: 900,
                width: '30%',
                maxWidth: '700px'
            },
            leftWhenHome: {
                width: '100%',
                maxWidth: 'initial'
            },
            leftSMALL: {
                display: 'none'
            },
            logo: {
                margin: '20px auto',
                width: 90,
                height: 90,
                border: '3px solid #FFF',
                boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.3)'
            },
            header: {
                'fontWeight': '100',
                'textAlign': 'center',
                'color': '#FFF',
                'textShadow': '0 1px 1px rgba(0, 0, 0, 0.4)',
                display: 'table-cell',
                'verticalAlign': 'middle',
                'position': 'relative',
                'zIndex': '800',
                'padding': '0 60px'
            },
            name: {
                margin: '0 0 5px 0',
                fontSize: '2.5em',
                letterSpacing: '4px'
            },
            belief: {
                color: '#CCCCCC',
                fontSize: '1.2em'
            },
            divider: {
                width: '50%',
                margin: '20px auto',
                border: 'none',
                borderTop: '1px solid rgba(255, 255, 255, 0.24)'
            },
            info: {
                margin: '0 30px',
                lineHeight: '2em'
            },
            button: {
                margin: '0 10px 10px 0'
            },
            nav: {
                margin: '20px auto'
            },
            iconStyle: {
                fontSize: '16px'
            }
        }
    },
    getLeftNavMenu() {
        var menuItems = [
            {type: MenuItem.Types.SUBHEADER, text: 'Category'},
            {route: 'get-started', text: 'Get Started'},
            {route: 'customization', text: 'Customization'},
            {route: 'components', text: 'Components'},
            {type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub'},
        ];
        return menuItems;
    },
    _onMenuItemClick: function (e, index, item) {
        this.context.router.transitionTo(item.route);
    },

    render() {
        var isHome = this.context.router.getCurrentPath() == '/';
        var styles = this.getStyles();
        if (isHome) {
            styles.left = this.mergeAndPrefix(styles.left, styles.leftWhenHome);
        }
        if (this.underDeviceSize(ResizeMixin.statics.Sizes.SMALL)) {
            styles.left = this.mergeAndPrefix(styles.leftSMALL);
        }
        return (
            <FullScreen id="home" scroll={true} >
                <div style={styles.left}>
                    <div style={styles.header}>
                        <Logo style={styles.logo} />
                        <h1 style={styles.name}>Blog Name</h1>
                        <span style={styles.belief}>Belief is Important For Everybody</span>
                        <hr style={styles.divider}/>
                        <p style={styles.info}>
                            其实跨平台开发最大的问题还是针对不同的平台 UI 和体验的不同。如果忽视掉这个最困难的问题，只是共用逻辑部分的代码的话，问题一下子就简单不少。
                        </p>
                        <div style={styles.nav}>
                            <FloatingActionButton to="home" style={styles.button} iconStyle={styles.iconStyle} iconClassName="icon-home3" mini={true}/>
                            <FloatingActionButton to="list"  style={styles.button} iconStyle={styles.iconStyle} iconClassName="icon-compass2" mini={true}/>
                            <FloatingActionButton to="profile" style={styles.button} iconStyle={styles.iconStyle} iconClassName="icon-calendar" mini={true}/>
                            <FloatingActionButton to="profile"  style={styles.button} iconStyle={styles.iconStyle} iconClassName="icon-heart" mini={true}/>
                            <FloatingActionButton to="dashboard"  style={styles.button} iconStyle={styles.iconStyle} iconClassName="icon-github4" mini={true}/>
                        </div>
                    </div>
                </div>
                <RouteHandler/>
            </FullScreen>
        );
    }
})

module.exports = Home;