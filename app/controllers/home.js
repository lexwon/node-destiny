var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
 	//call the destiny API with our API key
 	var destiny = require('destiny-client')('06981e4453b841c0ba2f84907d80aeaa');

	destiny
		.Search({
			membershipType: 2,
	    	name: 'clownboat81'
	  	})
	  	.then(users => {
	  		debugger;
	    	console.debug('users', users);
	  	});
	  	//.then(res => { /* deal with response */ })
		//.catch(err => { /* handle error */ });

	var articles = [new Article({title: 'title1'}), new Article({title:"title2"})];
    res.render('index', {
      	title: 'Generator-Express MVC',
      	articles: articles
    });

});
