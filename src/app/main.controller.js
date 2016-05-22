var _ = require('lodash');

module.exports = function(studentService) {
	var vm = this;

	vm.hello = studentService.get();
}
