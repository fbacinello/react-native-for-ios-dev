var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var AppActions = {
  addElement: function(param){
    AppDispatcher.handleAction({
      actionType:AppConstants.ADD_ELEMENT,
      description: param
    })
  }
}

module.exports = AppActions
