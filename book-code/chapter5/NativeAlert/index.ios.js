/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} = React;

var NativeAlert = React.createClass({
   getInitialState: function(){
    return{
      textForButton: 'Button text will come here'
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
         <TouchableHighlight style={styles.wrapper}
          onPress={() => AlertIOS.alert(
            'Alert Title',
            'Alert Message'
          )}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click me !!</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => AlertIOS.alert(
            'Alert Title',
            'Alert Message',
            [
            {text: 'Button 1', onPress: () => this.setState({textForButton: 'Button 1 clicked'})},
            {text: 'Button 2', onPress: () => this.setState({textForButton: 'Button 2 clicked'})}
            ]
          )}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Alert with Buttons !!</Text>
          </View>
        </TouchableHighlight>
        <Text> {this.state.textForButton} </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
   button: {
    backgroundColor: '#659EC7',
    padding: 10,
    margin: 10
  },
  buttonText: {
    color: '#FFFFFF'
  }

});

AppRegistry.registerComponent('NativeAlert', () => NativeAlert);
