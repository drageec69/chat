// JavaScript Document

'use strict';

 var app = angular.module('angNewsApp');
 
app.factory('Chat', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var msgs = $firebase(ref.child('msgs')).$asArray();
  
  var Chat = {
    all: msgs,
    create: function (msg) {
      return msgs.$add(msg);
    },
    get: function (msgId) {
      return $firebase(ref.child('msgs').child(msgId)).$asObject();
    },
    delete: function (msg) {
      return msgs.$remove(msg);
    }
  };

  return Chat;
});