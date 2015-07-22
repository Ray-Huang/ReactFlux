/** @jsx React.DOM */
var React = require('react'),
	ArticleActions = require('../actions/ArticleActions'),
	ArticleStore = require('../stores/ArticleStore');

var Article = React.createClass({
	   	getInitialState: function(){
	        return {
	            "results": ArticleStore.getArticles()
	        }
	    },
	    componentDidMount: function() {
		    ArticleStore.addChangeListener(this.onChange);
		},
	    handleClick:function(){
	    	//mock data, real data would be differen
	    	var res = this.getInitialState().results,
	    		res = res[res.length-1];
	    	res.id ++;
	      	ArticleActions.add(res);
	    },
	    onChange: function() {
	    	this.setState(this.getInitialState());
	    },
	    render:function(){
	      return (
	        <div className='articles'>
		      {
		          this.state.results.map(function(article) {
		            return <div id={article.id}>
		            			<h2>{article.title}</h2>
		            			<p>{article.content}</p>
					       </div>
		          })
		      }
		      <button type='button' onClick={this.handleClick}>Click to add Article</button>
	        </div>
	      )
	    }
  });

module.exports = Article;
