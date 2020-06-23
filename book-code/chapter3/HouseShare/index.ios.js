/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./App/Components/Home');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} = React;


var mainView = React.createClass ({
  render: function() {
    return (

      <NavigatorIOS barTintColor='#48BBEC' titleTextColor= "#FFFFFF" style={styles.navigator} initialRoute={{
        title: 'House Share',
        component: Home
      }}/>
    );
  },
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

AppRegistry.registerComponent('HouseShare', () => mainView);
