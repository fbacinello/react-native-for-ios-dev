var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleAction: function(action) {
    this.dispatch({
      source: 'TEST_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
