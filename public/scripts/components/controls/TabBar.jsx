var React = require('react/addons');
var mui = require('material-ui');
var StylePropable = mui.Mixins.StylePropable;
var TabBarTemplate = require('./TabBarTemplate');
var Colors = mui.Styles.Colors;
var Events = mui.Utils.Events;

var TabBarIem = React.createClass({

    mixins: [StylePropable],

    contextTypes: {
        muiTheme: React.PropTypes.object
    },

    propTypes: {
        initialSelectedIndex: React.PropTypes.number,
        onActive: React.PropTypes.func,
        tabWidth: React.PropTypes.number,
        hasAppBar: React.PropTypes.bool
    },

    getInitialState: function () {
        var selectedIndex = 0;
        if (this.props.initialSelectedIndex && this.props.initialSelectedIndex < this.props.children.length) {
            selectedIndex = this.props.initialSelectedIndex;
        }
        return {
            selectedIndex: selectedIndex
        };
    },

    getEvenWidth: function () {
        return (
            parseInt(window
                .getComputedStyle(React.findDOMNode(this))
                .getPropertyValue('width'), 10)
        );
    },

    componentDidMount: function () {
        this._updateTabWidth();
        Events.on(window, 'resize', this._updateTabWidth);
    },

    componentWillUnmount: function () {
        Events.off(window, 'resize', this._updateTabWidth);
    },

    componentWillReceiveProps: function (newProps) {
        if (newProps.hasOwnProperty('style')) this._updateTabWidth();
    },

    handleTouchTap: function (tabIndex, tab) {
        if (this.props.onChange && this.state.selectedIndex !== tabIndex) {
            this.props.onChange(tabIndex, tab);
        }

        this.setState({selectedIndex: tabIndex});
        //default CB is _onActive. Can be updated in tab.jsx
        if (tab.props.onActive) tab.props.onActive(tab);
    },

    getStyles: function () {
        var themeVariables = this.context.muiTheme.component.tabs;

        return {
            root: {
                position: 'absolute',
                top: this.props.hasAppBar ? '64px' : 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            tabItemContainer: {
                position: 'absolute',
                bottom: 0,
                margin: '0',
                padding: '0',
                width: '100%',
                height: '48px',
                backgroundColor: themeVariables.backgroundColor,
                whiteSpace: 'nowrap',
                display: 'table'
            }
        };
    },

    render: function () {
        var styles = this.getStyles();

        var width = this.state.fixedWidth ?
        100 / this.props.children.length + '%' :
        this.props.tabWidth + 'px';

        var left = 'calc(' + width + '*' + this.state.selectedIndex + ')';

        var currentTemplate;
        var tabs = React.Children.map(this.props.children, function (tab, index) {
            if (tab.type.displayName === "TabBarItem") {
                if (this.state.selectedIndex === index) currentTemplate = tab.props.children;
                return React.cloneElement(tab, {
                    key: index,
                    selected: this.state.selectedIndex === index,
                    tabIndex: index,
                    width: width,
                    handleTouchTap: this.handleTouchTap
                })
            } else {
                var type = tab.type.displayName || tab.type;
                throw 'Tabs only accepts Tab Components as children. Found ' +
                type + ' as child number ' + (index + 1) + ' of Tabs';
            }
        }, this);

        return (
            <div style={this.mergeAndPrefix(styles.root, this.props.style)}>
                <TabBarTemplate>
          {currentTemplate}
                </TabBarTemplate>
                <div style={this.mergeAndPrefix(styles.tabItemContainer, this.props.tabItemContainerStyle)}>
          {tabs}
                </div>
            </div>
        )
    },
    _tabWidthPropIsValid: function () {
        return this.props.tabWidth &&
            (this.props.tabWidth * this.props.children.length <= this.getEvenWidth());
    },

    // Validates that the tabWidth can fit all tabs on the tab bar. If not, the
    // tabWidth is recalculated and fixed.
    _updateTabWidth: function () {
        if (this._tabWidthPropIsValid()) {
            this.setState({
                fixedWidth: false
            });
        } else {
            this.setState({
                fixedWidth: true
            });
        }
    }

});

module.exports = TabBarIem;
