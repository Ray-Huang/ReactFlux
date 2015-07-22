var ArticleDispatcher = require('../dispatcher/ArticleDispatcher'),
	ArticleConstants = require('../constants/ArticleConstants');

var ArticleActions = {
	getData: function(data) {
		ArticleDispatcher.handleViewAction({
   	  		actionType:	ArticleConstants.LOAD_ITEM,
	    	item: data
	 	});
	},
	add: function(data){
		ArticleDispatcher.handleViewAction({
	   	  	actionType:ArticleConstants.ADD_ITEM,
		    item: data
		});
	}
}

module.exports = ArticleActions
