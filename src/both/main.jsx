'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./component/ListManager.jsx');
var List = require('./component/List.jsx');

var items = [ 'Lettuce', 'Tomato', 'Rye Bread' ];

ReactDOM.render(<ListManager title="Ingredients App" />, document.getElementById('ingredients'));
//ReactDOM.render(<List items={items} />, document.getElementById('ingredients'));
