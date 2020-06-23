(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			message: 'this is a default message from state',
			id: 0
		};
	},
	updateState: function updateState(e) {
		this.setState({ message: e.target.value });
	},
	render: function render() {
		var txt = this.props.txt;
		return React.createElement(
			'div',
			null,
			React.createElement('input', { type: 'text', onChange: this.updateState }),
			React.createElement(
				'h1',
				null,
				' ',
				this.state.message,
				' '
			)
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('container'));

},{}]},{},[1]);
