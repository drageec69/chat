'use strict';
/* global app:true */
/* exported app */
/**
 * @ngdoc overview
 * @name angularChatApp
 * @description
 * # angularChatApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'firebase'
  ])
.constant('FIREBASE_URL', 'https://angular-chat2.firebaseio.com/')
 .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/chat.html',
      controller: 'MsgsCtrl'
    })
      .otherwise({
        redirectTo: '/'
		
  })

.when('/register', {
  templateUrl: 'views/register.html',
  controller: 'AuthCtrl',
  resolve: {
    user: function(Auth) {
      return Auth.resolveUser();
    }
  }
})

.when('/login', {
  templateUrl: 'views/login.html',
  controller: 'AuthCtrl',
  resolve: {
    user: function(Auth) {
      return Auth.resolveUser();
    }
  }
})

  });
  

