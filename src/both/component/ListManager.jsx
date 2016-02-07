'use strict';
var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
	getInitialState: function() {
		return {
      items: [],
      newItemText: ''
    };
	},

  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    console.log(currentItems);

    this.setState({
      items: currentItems,
      newItemText: ''
    });
  },

  handleChange: function(e) {
    this.setState({
      newItemText: e.target.value
    });
  },

  render: function() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newItemText} onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListManager;
