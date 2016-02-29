var assert = require('assert');
var should = require('should');
var request = require('supertest');

//https://thewayofcode.wordpress.com/2013/04/21/how-to-build-and-test-rest-api-with-nodejs-express-mocha/
describe('Routing', function() {
  	var url = 'http://localhost:3000';
  
  	//just hit the homepage
	describe('HomePage', function() {

		it('Make sure the homepage responds', function() {
			request(url)
				.get('/')
				.send()
				.expect(200)
			    // end handles the response
				.end(function(err, res) {
			          if (err) {
			            throw err;
			          }
			          // this is should.js syntax, very clears
			          res.should.have.status(200);
			          done();
		        });
		});
  	});

	//hit the user endpoint
	describe('User endpoint', function() {

		it('Use a valid username', function() {
			request(url)
				.get('/desUser/clownboat81')
				.set('Accept', 'application/json')
				.expect(200, {
					iconPath:"/img/theme/destiny/icons/icon_psn.png",
					membershipType:2,
					displayName:"asdf"
				})/*
				.end(function(err, res) {

					//check for error
					if (err) {
						return  done(err);
					}

					//else test the response
					//res.should.have.property('membershipType', '5');
					done();

				});*/

		});


	});


});