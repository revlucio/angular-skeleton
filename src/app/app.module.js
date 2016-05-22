var angular = require('angular');

var app = angular.module('app', []);

app.controller('MainController', require('./main.controller'));
app.factory('studentService', require('./student.service'));