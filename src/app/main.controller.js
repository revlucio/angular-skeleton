angular
	.module('app')
	.controller('MainController', MainController);

function MainController() {
	var vm = this;

	vm.hello = 'welcome to the Angular world!';
}