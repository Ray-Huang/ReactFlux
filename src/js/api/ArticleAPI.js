var actions = require('../actions/ArticleActions'),
	$ = require('jquery');

module.exports = {
  //get mocked data from ajax call
  getData: function(callback) {
  	$.ajax({
      url: '../app/json/data.json',
      dataType: 'json',
      success: function(response) {
      	if(response.status.toUpperCase() == 'OK' && response.results.length > 0){
      		 actions.getData(response.results);
      		 callback();
		}else{
			 console.log(response.status);
		}
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }
};