/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var TodoApp = require('./Apps/Components/TodoApp');

AppRegistry.registerComponent('RefluxTodoProject', () => TodoApp);
