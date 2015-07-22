var Dispatcher = require('flux').Dispatcher,
	assign = require('object-assign');

var ArticleDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = ArticleDispatcher;
