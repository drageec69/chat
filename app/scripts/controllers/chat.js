// JavaScript Document
'use strict';

 var app = angular.module('angNewsApp');

app.controller('MsgsCtrl', function ($scope, Chat) {
  $scope.msgs = Chat.all;
  $scope.msg = {user: '', input: ''};
  
   $scope.submitMsg = function () {
    Chat.create($scope.msg).then(function () {
      $scope.msg = {user: '', input: ''};
    });
  };
	  
 $scope.deleteMsg = function (msg) {
    Chat.delete(msg);
  };
  });
