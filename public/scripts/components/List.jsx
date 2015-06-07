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

var {StylePropable}= mui.Mixins;

var ResizeMixin = require('../mixins/ResizeMixin');
var BlogList = require('./blog/BlogList');


var List = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    mixins: [StylePropable, ResizeMixin],

    getStyles() {
        return {
            list: {
                zIndex: 800,
                width: '70%',
                marginLeft: '30%'
            },
            listSMALL: {
                width: '100%',
                marginLeft: 0
            },
            listWrapper: {
                margin: '0 10%',
                padding: '50px 0'
            }
        }
    },
    render() {
        var styles = this.getStyles();
        if (this.underDeviceSize(ResizeMixin.statics.Sizes.SMALL)) {
            styles.list = this.mergeAndPrefix(styles.listSMALL);
        }
        return (
            <div id="list" style={styles.list}>
                <div style={styles.listWrapper}>
                    <BlogList adjustSize={this.state.adjustSize}/>
                </div>
            </div>
        );
    }

})

module.exports = List;