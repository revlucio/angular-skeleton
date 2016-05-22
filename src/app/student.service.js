var _ = require('lodash');

module.exports = function() {
	var x = [1, 2, 3];
	
	return {
		get: function() {
			return _.find(x, function(i) { return i === 2; })
		}
	}
}