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

var BlogListItem = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },
    getStyles() {

        return {
            li: {
                lineHeight: '1.6em',
                margin: '0 0 2.2em 0'
            },
            title: {
                margin: '0 0 .2em 0',
                fontSize: '1.5em',
                lineHeight: '1.3em'
            },
            title_link: {
                color: '#333333'
            },
            desc: {
                margin: 0,
                fontSize: '.9em',
                color: '#999999',
                lineHeight: '1.7em'
            },
            meta: {
                display: 'block',
                margin: '.7em 0 0 0',
                fontSize: '.9em',
                color: '#c7c7c7'
            },
            meta_time: {
                marginRight: '.5em',
                fontSize: '.8em',
                color: '#c7c7c7'
            },
            meta_tag: {
                marginLeft: '.5em',
                fontSize: '.8em',
                color: '#c7c7c7'
            },
            read_link: {
                marginLeft: '1em',
                fontSize: '.8em'
            },
            divider: {
                width: '30%',
                margin: '2.2em 0 2.1em 0',
                border: 0,
                borderTop: '1px solid #DDDDDD'
            }
        }
    },
    render() {
        var styles = this.getStyles();
        return (
            <li style={styles.li}>
                <h2 style={styles.title}>
                    <a style={styles.title_link} href="/2015/05/scheme/" title="link to Scheme 初步">Scheme 初步</a>
                </h2>
                <p style={styles.desc}>
                    之前定了每年学习一门语言的目标，自然不能轻言放弃。今年目标：简单掌握 Scheme。 因为自己接触这门语言也不过寥寥数天，所以更多的会以引导的方式简单介绍语法，而不会 (也没有能力) 去探讨什么深入的东西。本文很多例程和图示参考了紫藤貴文的《もうひとつの Scheme 入門》这篇深入浅出的教程，这篇教程现在也有英译版和中译版。我自己是参照这篇教程入门的，一方面这篇教程可以说是能找到合适初学者学习的很好的材料，另一方面也希望能挑战一下自己的日文阅读能力 (结果对比日文和英文看下来发现果然还是日文版…</p>
                <div style={styles.meta}>
                    <time style={styles.meta_time}>08 May 2015</time>
                    •
                    <span style={styles.meta_tag}>于
                        <a href="/tag/nan-ji-bei-dou-ji/">南箕北斗集</a>
                    </span>
                    <a style={styles.read_link} href="/2015/05/scheme/">继续阅读</a>
                </div>
                <hr style={styles.divider}/>
            </li>
        );
    }
})

module.exports = BlogListItem;