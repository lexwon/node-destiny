// model for a destiny User


function User (opts) {
  	
	//read in any inputs
  	if(!opts) opts = {};
  	this.iconPath = opts.iconPath || '';
  	this.membershipType = opts.membershipType || '';
  	this.displayName = opts.displayName || '';
  	//this.grimoireScore = opts.grimoireScore || '';

}

module.exports = User;