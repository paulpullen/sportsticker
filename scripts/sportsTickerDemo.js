'use strict';

var sportsTickerDemo = angular.module('sportsTickerDemo', ['sportsTicker']);

sportsTickerDemo.controller("TickerFeedCtrl", function($scope, $http){

    $http.get('feed.json').then(function(response){
        $scope.feed = response.data;
    });

});