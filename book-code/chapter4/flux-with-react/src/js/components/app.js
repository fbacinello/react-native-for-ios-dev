var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');

var AppTitle = React.createClass({
    onClickHandler:function(){
      AppActions.addElement('element added');
    },
    render:function(){
      return (
        <div className="wrapper">
          <h3 onClick={this.onClickHandler}>Open console and Click Here </h3>
        </div>
      )
    }
  });

module.exports = AppTitle;
