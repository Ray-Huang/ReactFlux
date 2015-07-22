/** @jsx React.DOM */
var React = require('react'),
	Article = require('./components/Article.js'),
	ArticleAPI = require('./api/ArticleAPI.js');

//get data from server
ArticleAPI.getData(function(){
	React.render(
	  <Article/>,
	  document.getElementById("content")
	);
});