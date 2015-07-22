var ArticleDispatcher = require('../dispatcher/ArticleDispatcher'),
	ArticleConstants = require('../constants/ArticleConstants'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign');


var CHANGE_EVENT = 'change',articles;

var ArticleStore = assign({}, EventEmitter.prototype, {
	getArticles: function() {
		return articles;
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT,callback);
	},
	emitChange: function() {
   		this.emit(CHANGE_EVENT);
    }
});

ArticleDispatcher.register(function(payload){
	var action = payload.action;
	switch (action.actionType){
		case ArticleConstants.LOAD_ITEM:
			articles = action.item;//load articles
		break;
		case ArticleConstants.ADD_ITEM:
			articles.push(action.item);
		break;
		default:
		return true;
	}
	
	ArticleStore.emitChange();
	
	return true;
});

module.exports = ArticleStore;
