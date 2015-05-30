var React = require('react');

var TabBarTemplate = React.createClass({

    render: function () {

        var styles = {
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': '48px'
        };

        return (
            <div style={styles}>
        {this.props.children}
            </div>
        );
    }
});

module.exports = TabBarTemplate;