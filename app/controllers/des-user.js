var express = require('express'),
  	router = express.Router(),
  	User = require('../models/user');

module.exports = function (app) {
  	app.use('/desUser/', router);
};

router.get('/:inUser', function (req, res, next) {
 	
	//read in the user paramenter - use my account as default
	var inUser = (req.params.inUser != null) ? req.params.inUser : 'clownboat81'; 
	
	//call the destiny API with our API key
	var destiny = require('destiny-client')('06981e4453b841c0ba2f84907d80aeaa');

 	//call the destiny API - search only PSN for now 
	destiny
		.Search({
			membershipType: 2,
	    	name: inUser
	  	})
	  	.then(users => {

  			//check the returned results - should only be one user
	    	if (users == null) {

	    		//error case
	    		res.json({ error: 'null users'});
	    		
	    	} else if (users.length == 0) {

    			//no user case
    			res.json({ error: 'no users'});
    			
	    	} else if (users.length > 1) {

	    		//too many users returned in search
	    		res.json({ error: 'too many users'});	
	    		
	    	} else {

	    		//copy the users over    			
				currUser = new User({ 
					iconPath: users[0].iconPath,
					membershipType: users[0].membershipType,
					displayName: users[0].displayName
				});
				
				res.json(currUser);
	
	    	}

	  	})
		.catch(err => { 

			//throw up an error
			res.json("{ error: '" + err + "'}");

		});

});
